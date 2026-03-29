/**
 * Quick test of Google Search Console API connection.
 * Run with: npx tsx scripts/test-gsc.ts
 */

import * as fs from 'fs';
import * as path from 'path';

// Load .env.local manually
const envPath = path.join(process.cwd(), '.env.local');
fs.readFileSync(envPath, 'utf8').split('\n').forEach(line => {
  const [key, ...rest] = line.split('=');
  if (key && rest.length) process.env[key.trim()] = rest.join('=').trim().replace(/^"|"$/g, '');
});

import { getTopQueries } from '../lib/google-search-console';

const end = new Date();
const start = new Date();
start.setDate(end.getDate() - 28);

const fmt = (d: Date) => d.toISOString().split('T')[0];

async function main() {
  console.log('Testing Google Search Console connection...\n');

  try {
    const rows = await getTopQueries(fmt(start), fmt(end), 10);

    if (!rows.length) {
      console.log('Connected! No data returned for the last 28 days yet.');
    } else {
      console.log(`Top 10 queries (last 28 days):\n`);
      rows.forEach((r, i) => {
        console.log(
          `${String(i + 1).padStart(2)}. ${r.keys[0].padEnd(50)} clicks: ${r.clicks}  impressions: ${r.impressions}  pos: ${r.position.toFixed(1)}`
        );
      });
    }
  } catch (err) {
    console.error('Connection failed:', err);
  }
}

main();
