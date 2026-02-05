// Sitemap Index - references all child sitemaps
const baseUrl = 'https://www.jindabyneelectrician.com.au'

export async function GET() {
  const sitemaps = [
    { name: 'main', lastmod: new Date().toISOString() },
    { name: 'services', lastmod: new Date().toISOString() },
    { name: 'locations', lastmod: new Date().toISOString() },
    { name: 'blog', lastmod: new Date().toISOString() },
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map(sitemap => `  <sitemap>
    <loc>${baseUrl}/sitemap/${sitemap.name}.xml</loc>
    <lastmod>${sitemap.lastmod}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
