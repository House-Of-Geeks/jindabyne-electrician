import { MetadataRoute } from 'next'
import { blogPosts } from '../data/blog'
import locationsData from '../data/locations.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jindabyneelectrician.com.au'

  // Get location keys from the data
  const locations = Object.keys(locationsData).filter(key => key !== '_metadata')

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/privacy',
    '/our-services',
    '/our-services/residential',
    '/our-services/commercial',
    '/service-areas',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Residential service pages
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
  ].map((service) => ({
    url: `${baseUrl}/our-services/residential/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Commercial service pages
  const commercialServices = [
    'ski-lodge-accommodation',
    'retail-hospitality',
    'commercial-solar',
    'commercial-switchboards',
    'data-communications',
    'test-tag',
    'emergency-exit-lighting',
  ].map((service) => ({
    url: `${baseUrl}/our-services/commercial/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Location pages
  const locationPages = locations.map((location) => ({
    url: `${baseUrl}/service-areas/${location}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Location + Service pages (dynamic routes)
  const locationServicePages: MetadataRoute.Sitemap = []
  const services = [
    'solar-installation',
    'battery-storage',
    'starlink-installation',
    'ev-charger-installation',
    'underfloor-heating',
    'emergency-electrical',
    'switchboard-upgrades',
  ]

  locations.forEach((location) => {
    services.forEach((service) => {
      locationServicePages.push({
        url: `${baseUrl}/service-areas/${location}/${service}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      })
    })
  })

  // Blog posts
  const blogPostPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    ...staticPages,
    ...residentialServices,
    ...commercialServices,
    ...locationPages,
    ...locationServicePages,
    ...blogPostPages,
  ]
}
