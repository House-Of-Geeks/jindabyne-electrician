/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Consistent trailing slash handling (no trailing slashes)
  trailingSlash: false,
  // Redirect rules for SEO
  async redirects() {
    return [
      // Redirect any trailing slash URLs to non-trailing slash
      {
        source: '/:path+/',
        destination: '/:path+',
        permanent: true,
      },
      // Common misspellings or old URLs (add as needed)
      {
        source: '/services',
        destination: '/our-services',
        permanent: true,
      },
      {
        source: '/services/:path*',
        destination: '/our-services/:path*',
        permanent: true,
      },
      {
        source: '/locations',
        destination: '/service-areas',
        permanent: true,
      },
      {
        source: '/locations/:path*',
        destination: '/service-areas/:path*',
        permanent: true,
      },
    ]
  },
  // Headers for better caching and crawlability
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600',
          },
        ],
      },
      {
        source: '/sitemap/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
