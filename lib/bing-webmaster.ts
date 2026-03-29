/**
 * Bing Webmaster Tools API Integration
 * https://learn.microsoft.com/en-us/dotnet/api/microsoft.bing.webmaster.api.interfaces
 */

const API_KEY = process.env.BING_WEBMASTER_API_KEY!;
const BASE_URL = 'https://ssl.bing.com/webmaster/api.svc/json';
const SITE_URL = 'https://www.jindabyneelectrician.com.au/';

function bingUrl(endpoint: string, params: Record<string, string> = {}): string {
  const query = new URLSearchParams({ apikey: API_KEY, ...params });
  return `${BASE_URL}/${endpoint}?${query}`;
}

async function bingGet<T>(endpoint: string, params: Record<string, string> = {}): Promise<T> {
  const res = await fetch(bingUrl(endpoint, params), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  });
  if (!res.ok) throw new Error(`Bing API error ${res.status}: ${res.statusText}`);
  const data = await res.json();
  return data.d as T;
}

async function bingPost<T>(endpoint: string, body: object): Promise<T> {
  const res = await fetch(bingUrl(endpoint), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body)
  });
  if (!res.ok) throw new Error(`Bing API error ${res.status}: ${res.statusText}`);
  const data = await res.json();
  return data.d as T;
}

/** Get all verified sites on this account */
export async function getSites(): Promise<string[]> {
  return bingGet<string[]>('GetUserSites');
}

/** Get crawl stats for the site */
export async function getCrawlStats() {
  return bingGet('GetCrawlStats', { siteUrl: SITE_URL });
}

/** Get crawl issues/errors */
export async function getCrawlIssues() {
  return bingGet('GetCrawlIssues', { siteUrl: SITE_URL });
}

/** Get keyword search traffic data */
export async function getKeywordStats(query: string, country: string = 'AU', language: string = 'en') {
  return bingGet('GetKeywordStats', { query, country, language });
}

/** Get top pages by traffic */
export async function getPageStats(page: number = 0) {
  return bingGet('GetPageStats', { siteUrl: SITE_URL, page: String(page) });
}

/** Get top keywords driving traffic */
export async function getQueryStats(page: number = 0) {
  return bingGet('GetQueryStats', { siteUrl: SITE_URL, page: String(page) });
}

/** Submit a sitemap URL */
export async function submitSitemap(sitemapUrl: string) {
  return bingPost('SubmitSitemap', { siteUrl: SITE_URL, sitemapUrl });
}

/** Submit URLs for indexing */
export async function submitUrls(urls: string[]) {
  return bingPost('SubmitUrlBatch', { siteUrl: SITE_URL, urlList: urls });
}

/** Get URL traffic info */
export async function getUrlInfo(url: string) {
  return bingGet('GetUrlInfo', { siteUrl: SITE_URL, url });
}
