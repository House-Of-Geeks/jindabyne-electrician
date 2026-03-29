/**
 * Google Search Console API Integration
 * Uses service account JWT auth — no googleapis dependency needed.
 * Service account: hog-350@why-solar.iam.gserviceaccount.com
 */

const SITE_URL = 'sc-domain:jindabyneelectrician.com.au';
const GSC_BASE = 'https://searchconsole.googleapis.com/webmasters/v3';
const SCOPE = 'https://www.googleapis.com/auth/webmasters.readonly';

// ─── JWT / Auth ───────────────────────────────────────────────────────────────

let cachedToken: { token: string; expiresAt: number } | null = null;

async function getAccessToken(): Promise<string> {
  if (cachedToken && Date.now() < cachedToken.expiresAt - 60_000) {
    return cachedToken.token;
  }

  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!;
  const rawKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY!.replace(/\\n/g, '\n');

  const now = Math.floor(Date.now() / 1000);
  const header = { alg: 'RS256', typ: 'JWT' };
  const claim = {
    iss: email,
    scope: SCOPE,
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600
  };

  const encode = (obj: object) =>
    btoa(JSON.stringify(obj)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');

  const signingInput = `${encode(header)}.${encode(claim)}`;

  // Import private key
  const pemBody = rawKey.replace(/-----BEGIN PRIVATE KEY-----|-----END PRIVATE KEY-----|\n/g, '');
  const keyBytes = Uint8Array.from(atob(pemBody), c => c.charCodeAt(0));
  const cryptoKey = await crypto.subtle.importKey(
    'pkcs8',
    keyBytes,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signature = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    cryptoKey,
    new TextEncoder().encode(signingInput)
  );

  const sig = btoa(String.fromCharCode(...new Uint8Array(signature)))
    .replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');

  const jwt = `${signingInput}.${sig}`;

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt
    })
  });

  if (!res.ok) throw new Error(`GSC auth failed: ${await res.text()}`);
  const { access_token, expires_in } = await res.json();

  cachedToken = { token: access_token, expiresAt: Date.now() + expires_in * 1000 };
  return access_token;
}

async function gscGet<T>(path: string): Promise<T> {
  const token = await getAccessToken();
  const res = await fetch(`${GSC_BASE}${path}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error(`GSC API error ${res.status}: ${await res.text()}`);
  return res.json();
}

async function gscPost<T>(path: string, body: object): Promise<T> {
  const token = await getAccessToken();
  const res = await fetch(`${GSC_BASE}${path}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  if (!res.ok) throw new Error(`GSC API error ${res.status}: ${await res.text()}`);
  return res.json();
}

// ─── API Methods ─────────────────────────────────────────────────────────────

export interface SearchAnalyticsRow {
  keys: string[];
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

export interface SearchAnalyticsResponse {
  rows: SearchAnalyticsRow[];
}

/** Top queries by clicks for a date range */
export async function getTopQueries(
  startDate: string,
  endDate: string,
  rowLimit = 25
): Promise<SearchAnalyticsRow[]> {
  const data = await gscPost<SearchAnalyticsResponse>(
    `/sites/${encodeURIComponent(SITE_URL)}/searchAnalytics/query`,
    {
      startDate,
      endDate,
      dimensions: ['query'],
      rowLimit,
      orderBy: [{ fieldName: 'clicks', sortOrder: 'DESCENDING' }]
    }
  );
  return data.rows ?? [];
}

/** Top pages by clicks for a date range */
export async function getTopPages(
  startDate: string,
  endDate: string,
  rowLimit = 25
): Promise<SearchAnalyticsRow[]> {
  const data = await gscPost<SearchAnalyticsResponse>(
    `/sites/${encodeURIComponent(SITE_URL)}/searchAnalytics/query`,
    {
      startDate,
      endDate,
      dimensions: ['page'],
      rowLimit,
      orderBy: [{ fieldName: 'clicks', sortOrder: 'DESCENDING' }]
    }
  );
  return data.rows ?? [];
}

/** Search analytics with any dimensions — flexible query */
export async function querySearchAnalytics(
  startDate: string,
  endDate: string,
  dimensions: ('query' | 'page' | 'country' | 'device' | 'searchAppearance')[],
  rowLimit = 25
): Promise<SearchAnalyticsRow[]> {
  const data = await gscPost<SearchAnalyticsResponse>(
    `/sites/${encodeURIComponent(SITE_URL)}/searchAnalytics/query`,
    { startDate, endDate, dimensions, rowLimit }
  );
  return data.rows ?? [];
}

/** List all sitemaps */
export async function getSitemaps() {
  return gscGet(`/sites/${encodeURIComponent(SITE_URL)}/sitemaps`);
}

/** List URL inspection result for a specific URL */
export async function inspectUrl(inspectionUrl: string) {
  const token = await getAccessToken();
  const res = await fetch('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ inspectionUrl, siteUrl: SITE_URL })
  });
  if (!res.ok) throw new Error(`GSC inspect error ${res.status}: ${await res.text()}`);
  return res.json();
}
