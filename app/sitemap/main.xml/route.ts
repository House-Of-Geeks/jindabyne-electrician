// Main sitemap - static pages
const baseUrl = 'https://www.jindabyneelectrician.com.au'

const staticPages = [
  { url: '', priority: 1.0, changefreq: 'weekly' },
  { url: '/about', priority: 0.8, changefreq: 'monthly' },
  { url: '/contact', priority: 0.9, changefreq: 'monthly' },
  { url: '/privacy', priority: 0.3, changefreq: 'yearly' },
  { url: '/our-services', priority: 0.9, changefreq: 'monthly' },
  { url: '/our-services/residential', priority: 0.8, changefreq: 'monthly' },
  { url: '/our-services/commercial', priority: 0.8, changefreq: 'monthly' },
  { url: '/service-areas', priority: 0.8, changefreq: 'monthly' },
  { url: '/blog', priority: 0.7, changefreq: 'weekly' },
]

export async function GET() {
  const lastmod = new Date().toISOString()

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
