// Locations sitemap - service area pages and location+service combo pages
import locationsData from '../../../data/locations.json'

const baseUrl = 'https://www.jindabyneelectrician.com.au'

const locationServices = [
  'solar-battery',
  'battery-storage',
  'starlink-installation',
  'underfloor-heating',
  'ev-charger-installation',
  'switchboard-upgrades',
  'smoke-alarm-installation',
  'emergency-electrical',
  'lighting-power',
  'ski-lodge-accommodation',
  'retail-hospitality',
  'commercial-solar',
  'commercial-switchboards',
  'data-communications',
  'emergency-exit-lighting',
  'test-tag',
]

export async function GET() {
  const lastmod = new Date().toISOString()
  const locations = Object.keys(locationsData).filter(key => key !== '_metadata')

  // Location landing pages
  const locationUrls = locations.map(location => ({
    url: `${baseUrl}/service-areas/${location}`,
    priority: 0.7,
  }))

  // Location + Service combo pages
  const locationServiceUrls: { url: string; priority: number }[] = []
  locations.forEach(location => {
    locationServices.forEach(service => {
      locationServiceUrls.push({
        url: `${baseUrl}/service-areas/${location}/${service}`,
        priority: 0.6,
      })
    })
  })

  const allUrls = [...locationUrls, ...locationServiceUrls]

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
