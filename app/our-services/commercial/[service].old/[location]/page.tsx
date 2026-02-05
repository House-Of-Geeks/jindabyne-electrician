import Link from 'next/link'
import Header from '../../../../components/Header'
import Footer from '../../../../components/Footer'
import CTASection from '../../../../components/CTASection'
import { Metadata } from 'next'

// Commercial service data
const serviceData: Record<string, {
  name: string
  shortName: string
  description: string
  icon: string
  benefits: Array<{ title: string; description: string }>
}> = {
  'ski-lodge-accommodation': {
    name: 'Ski Lodge & Accommodation Electrical',
    shortName: 'Ski Lodge Electrical',
    description: 'Commercial electrical services for ski lodges, hotels, and accommodation providers. Complete installations and maintenance.',
    icon: '🏔️',
    benefits: [
      { title: 'Guest Room Fit-Outs', description: 'Power points, lighting, and smart controls for modern guest room standards.' },
      { title: 'Commercial Kitchen Power', description: 'Three-phase power for ovens, fridges, and commercial cooking equipment.' },
      { title: 'Common Area Systems', description: 'Lighting, heating, and electrical systems for lobbies, hallways, and shared spaces.' },
      { title: 'Minimal Guest Disruption', description: 'Work scheduled during low-occupancy periods to minimize impact on operations.' }
    ]
  },
  'retail-hospitality': {
    name: 'Retail & Hospitality Electrical',
    shortName: 'Retail & Hospitality',
    description: 'Commercial electrical for retail shops, cafes, restaurants. Complete fit-outs and maintenance for hospitality businesses.',
    icon: '🏪',
    benefits: [
      { title: 'Shop Fit-Outs', description: 'Complete electrical installations for retail spaces, including lighting and POS systems.' },
      { title: 'Cafe & Restaurant', description: 'Commercial kitchen power, espresso machines, and dining area electrical.' },
      { title: 'Display Lighting', description: 'Feature lighting and LED systems to showcase products and create ambiance.' },
      { title: 'Fast Turnaround', description: 'Quick fit-out completions to meet business opening timelines.' }
    ]
  },
  'commercial-solar': {
    name: 'Commercial Solar Systems',
    shortName: 'Commercial Solar',
    description: 'Large-scale solar installations for businesses. 20kW to 100kW+ systems to reduce operating costs.',
    icon: '☀️',
    benefits: [
      { title: 'Reduce Operating Costs', description: 'Commercial solar can reduce electricity bills by 50-80% with 3-7 year ROI.' },
      { title: 'Commercial Incentives', description: 'STCs and instant asset write-off schemes reduce upfront costs for businesses.' },
      { title: 'Energy Independence', description: 'Reduce exposure to rising electricity prices with on-site generation.' },
      { title: 'Environmental Leadership', description: 'Demonstrate sustainability to environmentally-conscious customers and guests.' }
    ]
  },
  'commercial-switchboards': {
    name: 'Commercial Switchboard Upgrades',
    shortName: 'Commercial Switchboards',
    description: 'Three-phase power and commercial switchboard upgrades. Increased capacity for modern business equipment.',
    icon: '⚙️',
    benefits: [
      { title: 'Three-Phase Power', description: 'Essential for commercial kitchens, HVAC systems, and heavy machinery.' },
      { title: 'Increased Capacity', description: 'Upgrade switchboards to handle modern business electrical loads.' },
      { title: 'Commercial Safety', description: 'Modern circuit breakers and RCD protection for workplace safety compliance.' },
      { title: 'Load Management', description: 'Professional assessment and right-sizing for current and future needs.' }
    ]
  },
  'data-communications': {
    name: 'Data & Communications Cabling',
    shortName: 'Data & Communications',
    description: 'Commercial network cabling, WiFi infrastructure, and structured cabling for business premises.',
    icon: '🌐',
    benefits: [
      { title: 'Cat6 Network Cabling', description: 'Structured Cat6 cabling for reliable gigabit networking throughout premises.' },
      { title: 'WiFi Infrastructure', description: 'Commercial WiFi with multiple access points for complete coverage.' },
      { title: 'IP Security Cameras', description: 'PoE camera cabling for commercial security systems.' },
      { title: 'Phone Systems', description: 'VoIP and traditional phone system cabling for business communications.' }
    ]
  },
  'emergency-exit-lighting': {
    name: 'Emergency & Exit Lighting',
    shortName: 'Emergency Lighting',
    description: 'NSW compliant emergency and exit lighting for commercial buildings. Required for safe evacuation.',
    icon: '🚨',
    benefits: [
      { title: 'NSW Building Code', description: 'All commercial buildings require compliant emergency lighting systems.' },
      { title: 'Exit Sign Installation', description: 'Illuminated exit signs with battery backup for power failures.' },
      { title: 'Testing & Maintenance', description: 'Regular six-monthly testing required by law—we provide ongoing service.' },
      { title: 'Compliance Certification', description: 'Full documentation for council, insurance, and building certification.' }
    ]
  },
  'test-tag': {
    name: 'Test & Tag Services',
    shortName: 'Test & Tag',
    description: 'Electrical appliance safety testing for workplace compliance. Required for commercial premises.',
    icon: '✅',
    benefits: [
      { title: 'WH&S Compliance', description: 'NSW Work Health & Safety legislation requires regular testing of portable appliances.' },
      { title: 'Insurance Requirements', description: 'Many business insurance policies require current test and tag compliance.' },
      { title: 'All Equipment Types', description: 'Testing for office equipment, kitchen appliances, power tools, and machinery.' },
      { title: 'Regular Testing Programs', description: 'We manage your ongoing compliance with scheduled testing programs.' }
    ]
  }
}

// Location data (matching service-areas)
const locationData: Record<string, {
  name: string
  preposition: string
  relevance: string
}> = {
  'jindabyne': { name: 'Jindabyne', preposition: 'in', relevance: 'Jindabyne\'s tourism and accommodation businesses require reliable commercial electrical systems.' },
  'thredbo': { name: 'Thredbo', preposition: 'in', relevance: 'Thredbo\'s ski resort accommodation and hospitality businesses operate in demanding alpine conditions.' },
  'perisher': { name: 'Perisher', preposition: 'in', relevance: 'Perisher resort\'s commercial operations face extreme weather and need robust systems.' },
  'charlotte-pass': { name: 'Charlotte Pass', preposition: 'in', relevance: 'Charlotte Pass ski lodges operate at Australia\'s highest elevation with extreme conditions.' },
  'berridale': { name: 'Berridale', preposition: 'in', relevance: 'Berridale\'s retail shops, cafes, and accommodation businesses serve the Snowy Mountains region.' },
  'cooma': { name: 'Cooma', preposition: 'in', relevance: 'Cooma\'s established commercial district includes shops, offices, and hospitality businesses.' },
  'crackenback': { name: 'Crackenback', preposition: 'in', relevance: 'Crackenback resort and accommodation properties require commercial-grade electrical systems.' },
  'kalkite': { name: 'Kalkite', preposition: 'in', relevance: 'Kalkite\'s small businesses and rural commercial properties need reliable electrical services.' },
  'dalgety': { name: 'Dalgety', preposition: 'in', relevance: 'Dalgety\'s rural businesses and agricultural operations require commercial electrical work.' },
  'adaminaby': { name: 'Adaminaby', preposition: 'in', relevance: 'Adaminaby\'s tourism businesses and rural commercial properties serve the Lake Eucumbene region.' },
  'east-jindabyne': { name: 'East Jindabyne', preposition: 'in', relevance: 'East Jindabyne\'s growing commercial areas include shops and service businesses.' },
  'guthega': { name: 'Guthega', preposition: 'in', relevance: 'Guthega\'s ski club lodges require commercial electrical systems for seasonal operations.' }
}

const commercialServices = [
  'ski-lodge-accommodation', 'retail-hospitality', 'commercial-solar',
  'commercial-switchboards', 'data-communications', 'emergency-exit-lighting', 'test-tag'
]

const allLocations = [
  'jindabyne', 'thredbo', 'perisher', 'charlotte-pass', 'berridale', 'cooma',
  'crackenback', 'kalkite', 'dalgety', 'adaminaby', 'east-jindabyne', 'guthega'
]

// Generate static params for all service+location combinations
export async function generateStaticParams() {
  const params = []
  for (const service of commercialServices) {
    for (const location of allLocations) {
      params.push({ service, location })
    }
  }
  return params
}

// Generate metadata for each page
export async function generateMetadata({ params }: { params: { service: string; location: string } }): Promise<Metadata> {
  const service = serviceData[params.service]
  const location = locationData[params.location]

  if (!service || !location) {
    return {
      title: 'Service Not Found',
      description: 'This service page could not be found.',
    }
  }

  return {
    title: `${service.name} ${location.name} | Commercial Electrician ${location.name}`,
    description: `${service.name} ${location.preposition} ${location.name} and surrounds. ${service.description}`,
    keywords: [
      `commercial electrician ${location.name.toLowerCase()}`,
      `${service.shortName.toLowerCase()} ${location.name.toLowerCase()}`,
      `business electrical ${location.name.toLowerCase()}`
    ],
  }
}

export default function CommercialServiceLocationPage({ params }: { params: { service: string; location: string } }) {
  const service = serviceData[params.service]
  const location = locationData[params.location]

  if (!service || !location) {
    return (
      <>
        <Header />
        <main>
          <section className="hero" style={{ minHeight: '60vh' }}>
            <div className="hero-content">
              <h1>Service Not Found</h1>
              <p className="hero-subtitle">
                The service or location you're looking for doesn't exist.
              </p>
              <div className="hero-ctas">
                <Link href="/our-services/commercial" className="cta-primary">
                  View All Services
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{ minHeight: '60vh' }}>
          <div className="hero-content">
            <span className="hero-badge">{location.name} Commercial</span>
            <h1>{service.name} {location.preposition} {location.name}</h1>
            <p className="hero-subtitle">
              Commercial electrical services for {location.name} businesses. {service.description}
            </p>
            <div className="hero-ctas">
              <Link href="/contact" className="cta-primary">
                Get Commercial Quote
              </Link>
              <Link href={`/our-services/commercial/${params.service}`} className="cta-secondary">
                Learn More →
              </Link>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Commercial Solutions</div>
              <h2>{service.name} for {location.name} Businesses</h2>
              <p className="section-subtitle">
                {location.relevance}
              </p>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="services-grid">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="service-card">
                    <div className="service-icon">{service.icon}</div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="reviews-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Why Choose Us</div>
              <h2>Commercial Electrical Expertise in {location.name}</h2>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
                <div className="service-card">
                  <h3>Fast Commercial Response</h3>
                  <p>
                    We understand business can't afford downtime. Fast response for commercial
                    electrical issues in {location.name} and surrounding areas.
                  </p>
                </div>

                <div className="service-card">
                  <h3>Minimize Business Disruption</h3>
                  <p>
                    Work scheduled to minimize impact on operations. After-hours and weekend
                    work available for {location.name} businesses.
                  </p>
                </div>

                <div className="service-card">
                  <h3>Code Compliant</h3>
                  <p>
                    All commercial work meets NSW standards. Compliance certificates provided
                    for council, insurance, and building certification requirements.
                  </p>
                </div>

                <div className="service-card">
                  <h3>Local Business Understanding</h3>
                  <p>
                    We understand {location.name}'s business environment and the unique needs
                    of Snowy Mountains commercial operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Other Services</div>
              <h2>More Commercial Services in {location.name}</h2>
            </div>

            <div className="areas-grid">
              {commercialServices
                .filter(s => s !== params.service)
                .map((slug) => {
                  const svc = serviceData[slug]
                  return (
                    <Link
                      key={slug}
                      href={`/our-services/commercial/${slug}/${params.location}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <div className="area-tag">
                        {svc.icon} {svc.shortName}
                      </div>
                    </Link>
                  )
                })}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
