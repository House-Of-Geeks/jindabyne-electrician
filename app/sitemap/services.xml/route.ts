// Services sitemap - all residential and commercial service pages
const baseUrl = 'https://www.jindabyneelectrician.com.au'

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
]

const commercialServices = [
  'ski-lodge-accommodation',
  'retail-hospitality',
  'commercial-solar',
  'commercial-switchboards',
  'data-communications',
  'test-tag',
  'emergency-exit-lighting',
]

export async function GET() {
  const lastmod = new Date().toISOString()

  const residentialUrls = residentialServices.map(service => ({
    url: `${baseUrl}/our-services/residential/${service}`,
    priority: 0.7,
  }))

  const commercialUrls = commercialServices.map(service => ({
    url: `${baseUrl}/our-services/commercial/${service}`,
    priority: 0.7,
  }))

  const allUrls = [...residentialUrls, ...commercialUrls]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${lastmod}</lastmod>
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
