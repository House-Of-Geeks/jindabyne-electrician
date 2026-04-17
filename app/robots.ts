import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.jindabyneelectrician.com.au'

  return {
    rules: [
      { userAgent: '*',                allow: '/', disallow: ['/api/', '/private/'] },
      { userAgent: 'GPTBot',               allow: '/' },
      { userAgent: 'OAI-SearchBot',        allow: '/' },
      { userAgent: 'ChatGPT-User',         allow: '/' },
      { userAgent: 'ClaudeBot',            allow: '/' },
      { userAgent: 'Claude-SearchBot',     allow: '/' },
      { userAgent: 'Claude-User',          allow: '/' },
      { userAgent: 'Google-Extended',      allow: '/' },
      { userAgent: 'Gemini-Deep-Research', allow: '/' },
      { userAgent: 'PerplexityBot',        allow: '/' },
      { userAgent: 'Perplexity-User',      allow: '/' },
      { userAgent: 'Bingbot',              allow: '/' },
      { userAgent: 'Meta-ExternalAgent',   allow: '/' },
      { userAgent: 'Meta-ExternalFetcher', allow: '/' },
      { userAgent: 'Applebot',             allow: '/' },
      { userAgent: 'Applebot-Extended',    allow: '/' },
      { userAgent: 'CCBot',                allow: '/' },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
