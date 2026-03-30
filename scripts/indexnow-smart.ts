#!/usr/bin/env npx tsx

/**
 * IndexNow Smart Submission
 *
 * Uses git diff to detect which files changed, maps them to affected URLs,
 * and also checks for any new URLs not yet in the cache.
 * Only submits what actually needs reindexing.
 */

import * as fs from 'fs'
import * as path from 'path'
import { execSync } from 'child_process'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT = path.join(__dirname, '..')

const SITE_HOST = 'www.jindabyneelectrician.com.au'
const BASE_URL = `https://${SITE_HOST}`
const INDEXNOW_KEY = 'af5101cb946a4263b64f188ed0ef5a70'
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow'
const CACHE_FILE = path.join(ROOT, '.indexnow-cache.json')

// ─── URL generation ───────────────────────────────────────────────────────────

function getLocations(): string[] {
  const data = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/locations.json'), 'utf8'))
  return Object.keys(data).filter(k => k !== '_metadata')
}

function getBlogSlugs(): string[] {
  const content = fs.readFileSync(path.join(ROOT, 'data/blog.ts'), 'utf8')
  return [...content.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map(m => m[1])
}

function allUrls(): string[] {
  const locations = getLocations()
  const blogs = getBlogSlugs()
  const locationServices = [
    'solar-battery', 'battery-storage', 'starlink-installation',
    'ev-charger-installation', 'underfloor-heating', 'emergency-electrical', 'switchboard-upgrades',
  ]

  return [
    '','/about','/contact','/privacy','/our-services',
    '/our-services/residential','/our-services/commercial','/service-areas','/blog',
    // residential
    ...['solar-battery','battery-storage','starlink-installation','underfloor-heating',
        'ev-charger-installation','property-management-real-estate','lighting-power',
        'switchboard-upgrades','emergency-electrical','smoke-alarm-installation',
        'split-system-heating-cooling','security-systems-lighting','data-cabling-wifi',
    ].map(s => `/our-services/residential/${s}`),
    // commercial
    ...['ski-lodge-accommodation','retail-hospitality','commercial-solar',
        'commercial-switchboards','data-communications','test-tag','emergency-exit-lighting',
    ].map(s => `/our-services/commercial/${s}`),
    // locations
    ...locations.map(l => `/service-areas/${l}`),
    ...locations.flatMap(l => locationServices.map(s => `/service-areas/${l}/${s}`)),
    // blog
    ...blogs.map(s => `/blog/${s}`),
  ].map(p => `${BASE_URL}${p}`)
}

// ─── Git diff → affected URLs ─────────────────────────────────────────────────

function getChangedFiles(): string[] {
  try {
    // Try last commit diff first (works on Vercel which does shallow clones)
    const out = execSync('git diff HEAD~1 --name-only 2>/dev/null || git show --name-only --format="" HEAD', {
      cwd: ROOT, encoding: 'utf8'
    })
    return out.trim().split('\n').filter(Boolean)
  } catch {
    return []
  }
}

function changedFilesToUrls(files: string[], locations: string[], blogs: string[]): string[] | 'all' {
  // Site-wide files — resubmit everything
  const siteWide = [
    'app/layout.tsx',
    'app/components/Header.tsx',
    'app/components/Footer.tsx',
    'app/components/CTASection.tsx',
    'app/globals.css',
    'app/alpine-technical.css',
    'components/Schema.tsx',
  ]
  if (files.some(f => siteWide.includes(f))) return 'all'

  const urls = new Set<string>()

  for (const file of files) {
    // Homepage
    if (file === 'app/page.tsx') { urls.add(`${BASE_URL}/`) }
    // Static pages
    else if (file.match(/^app\/(about|contact|privacy|blog)\/page\.tsx$/)) {
      urls.add(`${BASE_URL}/${file.split('/')[1]}`)
    }
    // Service index pages
    else if (file === 'app/our-services/page.tsx') { urls.add(`${BASE_URL}/our-services`) }
    else if (file === 'app/our-services/residential/page.tsx') { urls.add(`${BASE_URL}/our-services/residential`) }
    else if (file === 'app/our-services/commercial/page.tsx') { urls.add(`${BASE_URL}/our-services/commercial`) }
    // Specific service page
    else if (file.match(/^app\/our-services\/(residential|commercial)\/([^/]+)\/page\.tsx$/)) {
      const [,type,service] = file.match(/^app\/our-services\/(residential|commercial)\/([^/]+)\/page\.tsx$/)!
      urls.add(`${BASE_URL}/our-services/${type}/${service}`)
    }
    // All location pages
    else if (file === 'app/service-areas/[location]/page.tsx' || file === 'data/locations.json') {
      locations.forEach(l => urls.add(`${BASE_URL}/service-areas/${l}`))
    }
    // All blog pages
    else if (file === 'app/blog/[slug]/page.tsx' || file === 'data/blog.ts') {
      blogs.forEach(s => urls.add(`${BASE_URL}/blog/${s}`))
    }
  }

  return [...urls]
}

// ─── Cache ────────────────────────────────────────────────────────────────────

function loadCache(): Set<string> {
  try {
    if (fs.existsSync(CACHE_FILE)) {
      const data = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'))
      return new Set(data.urls || [])
    }
  } catch { /* empty cache */ }
  return new Set()
}

function saveCache(urls: string[]): void {
  fs.writeFileSync(CACHE_FILE, JSON.stringify({ lastUpdated: new Date().toISOString(), urls }, null, 2))
}

// ─── Submit ───────────────────────────────────────────────────────────────────

async function submit(urls: string[]): Promise<boolean> {
  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: SITE_HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
      urlList: urls,
    }),
  })
  if (res.status === 200 || res.status === 202) {
    console.log(`✓ Submitted ${urls.length} URLs (${res.status})`)
    return true
  }
  console.error(`✗ Failed: ${res.status} ${await res.text()}`)
  return false
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const dryRun = process.argv.includes('--dry-run')
  console.log('=== IndexNow Smart Submission ===')

  const locations = getLocations()
  const blogs = getBlogSlugs()
  const current = allUrls()
  const cache = loadCache()

  // 1. New URLs not yet in cache
  const newUrls = current.filter(u => !cache.has(u))

  // 2. Changed URLs from git diff
  const changedFiles = getChangedFiles()
  console.log(`Changed files: ${changedFiles.length > 0 ? changedFiles.join(', ') : 'none detected'}`)

  const affected = changedFilesToUrls(changedFiles, locations, blogs)
  const changedUrls = affected === 'all'
    ? current
    : affected.filter(u => cache.has(u)) // only resubmit if previously cached (already live)

  // 3. Union, deduped
  const toSubmit = [...new Set([...newUrls, ...changedUrls])]

  console.log(`New URLs: ${newUrls.length}`)
  console.log(`Changed URLs: ${affected === 'all' ? 'all (site-wide change)' : changedUrls.length}`)
  console.log(`Total to submit: ${toSubmit.length}`)

  if (toSubmit.length === 0) {
    console.log('✓ Nothing to submit')
    saveCache(current)
    return
  }

  if (dryRun) {
    console.log('\n--- DRY RUN ---')
    toSubmit.forEach((u, i) => console.log(`  ${i + 1}. ${u}`))
    return
  }

  const ok = await submit(toSubmit)
  if (ok) saveCache(current)
  else process.exit(1)
}

main().catch(err => { console.error(err); process.exit(1) })
