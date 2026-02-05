#!/usr/bin/env npx ts-node

/**
 * IndexNow Full Sitemap Submission
 *
 * Submits ALL site URLs to IndexNow. Use for:
 * - Initial site indexing
 * - Manual resubmission after major changes
 *
 * Usage:
 *   npx ts-node scripts/indexnow-submit.ts
 *   npx ts-node scripts/indexnow-submit.ts --dry-run
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

async function submitToIndexNow(urls: string[]): Promise<void> {
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
    console.log(`✓ Success! ${urls.length} URLs submitted`);
    console.log(`  Status: ${response.status} ${response.statusText}`);
  } else {
    console.error(`✗ Failed to submit URLs`);
    console.error(`  Status: ${response.status} ${response.statusText}`);
    const body = await response.text();
    if (body) console.error(`  Response: ${body}`);
    process.exit(1);
  }
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');

  console.log('=== IndexNow Full Sitemap Submission ===');
  console.log(`Host: ${SITE_HOST}`);
  console.log(`Key: ${INDEXNOW_KEY.substring(0, 8)}...`);

  const urls = generateUrls();
  console.log(`\nGenerated ${urls.length} URLs`);

  if (dryRun) {
    console.log('\n--- DRY RUN ---\n');
    urls.forEach((url, i) => console.log(`${i + 1}. ${url}`));
    console.log(`\nTotal: ${urls.length} URLs (not submitted)`);
    return;
  }

  console.log('\nSubmitting to IndexNow...');
  await submitToIndexNow(urls);
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
