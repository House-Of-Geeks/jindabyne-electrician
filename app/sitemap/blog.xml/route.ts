// Blog sitemap - all blog posts
import { blogPosts } from '../../../data/blog'

const baseUrl = 'https://www.jindabyneelectrician.com.au'

export async function GET() {
  const blogUrls = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastmod: new Date(post.date).toISOString(),
    priority: 0.6,
  }))

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${blogUrls.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>monthly</changefreq>
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
