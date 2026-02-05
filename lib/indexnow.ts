/**
 * IndexNow API Integration
 *
 * Notifies search engines (Bing, Yandex, Seznam, Naver) about new/updated URLs.
 * https://www.indexnow.org/
 */

const INDEXNOW_KEY = 'af5101cb946a4263b64f188ed0ef5a70';
const SITE_HOST = 'www.jindabyneelectrician.com.au';
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

export interface IndexNowResponse {
  success: boolean;
  statusCode: number;
  statusMessage: string;
  urlCount: number;
}

/**
 * Submit multiple URLs to IndexNow API
 * Use for bulk submissions (sitemap, batch updates)
 */
export async function submitToIndexNow(urls: string[]): Promise<IndexNowResponse> {
  if (urls.length === 0) {
    return {
      success: true,
      statusCode: 200,
      statusMessage: 'No URLs to submit',
      urlCount: 0
    };
  }

  const payload = {
    host: SITE_HOST,
    key: INDEXNOW_KEY,
    keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
    urlList: urls
  };

  try {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    return {
      success: response.status === 200 || response.status === 202,
      statusCode: response.status,
      statusMessage: response.statusText,
      urlCount: urls.length
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return {
      success: false,
      statusCode: 500,
      statusMessage: message,
      urlCount: urls.length
    };
  }
}

/**
 * Fire-and-forget notification for individual paths
 * Use in API routes when content changes (new review, profile update, etc.)
 */
export function notifyIndexNow(...paths: string[]): void {
  const urls = paths.map(path =>
    path.startsWith('http') ? path : `https://${SITE_HOST}${path.startsWith('/') ? path : '/' + path}`
  );

  // Fire and forget - don't await
  submitToIndexNow(urls).catch(err => {
    console.error('[IndexNow] Notification failed:', err);
  });
}

/**
 * Get the IndexNow key for verification endpoint
 */
export function getIndexNowKey(): string {
  return INDEXNOW_KEY;
}

/**
 * Get full key verification URL
 */
export function getKeyLocation(): string {
  return `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`;
}
