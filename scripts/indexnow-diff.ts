#!/usr/bin/env npx ts-node

/**
 * IndexNow Differential Submission
 *
 * Compares current sitemap against cached URL list.
 * Only submits NEW URLs that haven't been submitted before.
 *
 * Used by GitHub Actions on each deploy to avoid re-submitting existing pages.
 *
 * Usage:
 *   npx ts-node scripts/indexnow-diff.ts
 *   npx ts-node scripts/indexnow-diff.ts --dry-run
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_HOST = 'jindabyneelectrician.com.au';
const BASE_URL = `https://${SITE_HOST}`;
const INDEXNOW_KEY = '710e32a908824dadaa14b1535c3f1392';
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';
const CACHE_FILE = path.join(__dirname, '..', '.indexnow-cache.json');

function loadLocations(): string[] {
  const locationsPath = path.join(__dirname, '..', 'data', 'locations.json');
  const data = JSON.parse(fs.readFileSync(locationsPath, 'utf8'));
  return Object.keys(data).filter(key => key !== '_metadata');
}

function generateUrls(): string[] {
  const locations = loadLocations();
  const urls: string[] = [];

  // Static pages
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/privacy',
    '/our-services',
    '/our-services/residential',
    '/our-services/commercial',
    '/service-areas',
    '/blog',
  ];
  staticRoutes.forEach(route => urls.push(`${BASE_URL}${route}`));

  // Residential service pages
  const residentialServices = [
    'solar-battery',
    'battery-storage',
    'starlink-installation',
    'underfloor-heating',
    'ev-charger-installation',
    'property-management-real-estate',
    'lighting-power',
    'switchboard-upgrades',
    'emergency-electrical',
    'smoke-alarm-installation',
    'split-system-heating-cooling',
    'security-systems-lighting',
    'data-cabling-wifi',
  ];
  residentialServices.forEach(service => {
    urls.push(`${BASE_URL}/our-services/residential/${service}`);
  });

  // Commercial service pages
  const commercialServices = [
    'ski-lodge-accommodation',
    'retail-hospitality',
    'commercial-solar',
    'commercial-switchboards',
    'data-communications',
    'test-tag',
    'emergency-exit-lighting',
  ];
  commercialServices.forEach(service => {
    urls.push(`${BASE_URL}/our-services/commercial/${service}`);
  });

  // Location pages
  locations.forEach(location => {
    urls.push(`${BASE_URL}/service-areas/${location}`);
  });

  // Location + Service pages
  const locationServices = [
    'solar-installation',
    'battery-storage',
    'starlink-installation',
    'ev-charger-installation',
    'underfloor-heating',
    'emergency-electrical',
    'switchboard-upgrades',
  ];
  locations.forEach(location => {
    locationServices.forEach(service => {
      urls.push(`${BASE_URL}/service-areas/${location}/${service}`);
    });
  });

  // Blog posts
  try {
    const blogDataPath = path.join(__dirname, '..', 'data', 'blog.ts');
    const blogContent = fs.readFileSync(blogDataPath, 'utf8');
    const slugMatches = blogContent.matchAll(/slug:\s*['"]([^'"]+)['"]/g);
    for (const match of slugMatches) {
      urls.push(`${BASE_URL}/blog/${match[1]}`);
    }
  } catch {
    console.log('Note: Could not parse blog posts');
  }

  return urls;
}

function loadCache(): Set<string> {
  try {
    if (fs.existsSync(CACHE_FILE)) {
      const data = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
      return new Set(data.urls || []);
    }
  } catch {
    console.log('Note: Could not load cache, treating as empty');
  }
  return new Set();
}

function saveCache(urls: string[]): void {
  const data = {
    lastUpdated: new Date().toISOString(),
    urlCount: urls.length,
    urls: urls
  };
  fs.writeFileSync(CACHE_FILE, JSON.stringify(data, null, 2));
}

async function submitToIndexNow(urls: string[]): Promise<boolean> {
  if (urls.length === 0) {
    return true;
  }

  const payload = {
    host: SITE_HOST,
    key: INDEXNOW_KEY,
    keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
    urlList: urls
  };

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(payload)
  });

  if (response.status === 200 || response.status === 202) {
    console.log(`✓ Success! ${urls.length} new URLs submitted`);
    console.log(`  Status: ${response.status} ${response.statusText}`);
    return true;
  } else {
    console.error(`✗ Failed to submit URLs`);
    console.error(`  Status: ${response.status} ${response.statusText}`);
    const body = await response.text();
    if (body) console.error(`  Response: ${body}`);
    return false;
  }
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');

  console.log('=== IndexNow Differential Submission ===');
  console.log(`Host: ${SITE_HOST}`);
  console.log(`Key: ${INDEXNOW_KEY.substring(0, 8)}...`);

  // Load current URLs and cache
  const currentUrls = generateUrls();
  const cachedUrls = loadCache();

  console.log(`\nCurrent sitemap: ${currentUrls.length} URLs`);
  console.log(`Cached URLs: ${cachedUrls.size} URLs`);

  // Find new URLs
  const newUrls = currentUrls.filter(url => !cachedUrls.has(url));

  // Find removed URLs (for logging only)
  const removedUrls = [...cachedUrls].filter(url => !currentUrls.includes(url));

  console.log(`\nNew URLs: ${newUrls.length}`);
  console.log(`Removed URLs: ${removedUrls.length}`);

  if (newUrls.length === 0) {
    console.log('\n✓ No new URLs to submit');
    // Update cache anyway to remove stale entries
    saveCache(currentUrls);
    return;
  }

  if (dryRun) {
    console.log('\n--- DRY RUN ---');
    console.log('\nNew URLs that would be submitted:');
    newUrls.forEach((url, i) => console.log(`  ${i + 1}. ${url}`));
    if (removedUrls.length > 0) {
      console.log('\nRemoved URLs (not in current sitemap):');
      removedUrls.forEach((url, i) => console.log(`  ${i + 1}. ${url}`));
    }
    return;
  }

  // Submit new URLs
  console.log('\nSubmitting new URLs to IndexNow...');
  const success = await submitToIndexNow(newUrls);

  if (success) {
    // Update cache with current URLs
    saveCache(currentUrls);
    console.log('\n✓ Cache updated');
  } else {
    process.exit(1);
  }
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
