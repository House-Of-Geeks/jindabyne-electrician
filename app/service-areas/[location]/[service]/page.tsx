import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import CTASection from '../../../components/CTASection'
import { ServiceSchema, BreadcrumbSchema } from '../../../../components/Schema'
import { ServiceIcon } from '../../../components/AlpineGraphics'
import { Metadata } from 'next'
import { generateLocationServiceIntro, generateWhyLocal } from '../../../../lib/contentGenerators'
import locationDataImport from '../../../../data/locations.json'

// Type-safe location data
const locationDataRaw = locationDataImport as Record<string, any>

// All service data (residential + commercial)
const serviceData: Record<string, {
  name: string
  shortName: string
  category: 'residential' | 'commercial'
  description: string
  icon: string
  benefits: Array<{ title: string; description: string }>
}> = {
  // Residential Services
  'solar-battery': {
    name: 'Solar Installation',
    shortName: 'Solar',
    category: 'residential',
    description: 'Complete solar panel installations for alpine homes. Grid-tied and off-grid systems with high-efficiency panels.',
    icon: 'solar',
    benefits: [
      { title: 'Reduce Energy Bills', description: 'Solar systems can reduce electricity bills by 50-80%. Ideal for alpine properties with high heating costs.' },
      { title: 'Storm Power Backup', description: 'Combined with battery storage, solar provides backup during common Snowy Mountains storm outages.' },
      { title: 'Government Incentives', description: 'STCs and rebates significantly reduce upfront solar installation costs.' },
      { title: 'Increase Property Value', description: 'Solar-equipped properties are more attractive to buyers and renters in the alpine market.' }
    ]
  },
  'battery-storage': {
    name: 'Battery Storage Systems',
    shortName: 'Battery Storage',
    category: 'residential',
    description: 'Tesla Powerwall, Sonnen, and BYD battery systems. Backup power and energy independence for alpine properties.',
    icon: 'battery',
    benefits: [
      { title: 'Power Outage Protection', description: 'Battery backup keeps heating, lights, and essential appliances running during storm-related outages.' },
      { title: 'Energy Independence', description: 'Store solar energy for use at night or during peak pricing periods.' },
      { title: 'Prevent Pipe Freezing', description: 'Critical for alpine properties—backup power prevents pipes freezing during winter outages.' },
      { title: 'Time-of-Use Savings', description: 'Use stored energy during expensive peak periods to reduce electricity costs.' }
    ]
  },
  'starlink-installation': {
    name: 'Starlink Installation',
    shortName: 'Starlink',
    category: 'residential',
    description: 'Professional Starlink satellite internet installation. High-speed internet where NBN coverage is poor.',
    icon: 'signal',
    benefits: [
      { title: 'High-Speed Internet', description: 'Starlink provides 50-200Mbps download speeds—ideal for remote alpine properties.' },
      { title: 'No NBN Required', description: 'Perfect for areas with poor NBN coverage or unreliable fixed wireless.' },
      { title: 'Ideal for Holiday Homes', description: 'Reliable internet for Airbnb guests and remote property management.' },
      { title: 'Professional Installation', description: 'Proper mounting, weatherproofing, and optimal placement for alpine conditions.' }
    ]
  },
  'underfloor-heating': {
    name: 'Underfloor Heating Installation',
    shortName: 'Underfloor Heating',
    category: 'residential',
    description: 'Electric underfloor heating for alpine homes. Premium comfort for cold Snowy Mountains winters.',
    icon: 'heating',
    benefits: [
      { title: 'Alpine Comfort', description: 'Warm floors are essential for Snowy Mountains properties. Step onto heated tiles instead of cold floors.' },
      { title: 'Energy Efficient', description: 'Modern electric underfloor heating is efficient and can be zoned for different areas.' },
      { title: 'Luxury Feature', description: 'Premium addition to ski lodges and holiday homes—guests love heated floors.' },
      { title: 'Space Saving', description: 'No radiators or wall heaters required. Invisible heating solution.' }
    ]
  },
  'ev-charger-installation': {
    name: 'EV Charger Installation',
    shortName: 'EV Chargers',
    category: 'residential',
    description: 'Tesla Wall Connector and universal EV chargers. Home charging solutions for electric vehicles.',
    icon: 'charging',
    benefits: [
      { title: 'Home Charging Convenience', description: 'Charge overnight at home—no need to find public chargers on alpine roads.' },
      { title: 'Solar Integration', description: 'Charge your EV with free solar energy during the day.' },
      { title: 'Faster Charging', description: 'Level 2 home chargers provide full overnight charge for most EVs.' },
      { title: 'Property Value', description: 'EV chargers are becoming expected in premium alpine properties.' }
    ]
  },
  'switchboard-upgrades': {
    name: 'Switchboard Upgrades',
    shortName: 'Switchboard Upgrades',
    category: 'residential',
    description: 'Modern switchboard upgrades with safety switches and circuit breakers. Essential for older alpine properties.',
    icon: 'power',
    benefits: [
      { title: 'Safety Critical', description: 'Old fuse boards lack modern safety features. RCD protection prevents electrocution.' },
      { title: 'Handle Modern Loads', description: 'Older switchboards can\'t handle electric heating, solar, and EV chargers.' },
      { title: 'Insurance Compliance', description: 'Many insurers require modern switchboards for alpine property coverage.' },
      { title: 'Prevent Outages', description: 'Modern circuit breakers prevent electrical faults and reduce fire risk.' }
    ]
  },
  'smoke-alarm-installation': {
    name: 'Smoke Alarm Installation',
    shortName: 'Smoke Alarms',
    category: 'residential',
    description: 'NSW compliant photoelectric smoke alarms. Interconnected systems for residential and rental properties.',
    icon: 'alarm',
    benefits: [
      { title: 'NSW Legal Requirement', description: 'All NSW properties must have working photoelectric smoke alarms.' },
      { title: 'Rental Property Compliance', description: 'Holiday homes and short-term rentals must meet strict smoke alarm standards.' },
      { title: 'Interconnected Protection', description: 'When one alarm sounds, they all sound—critical for larger alpine properties.' },
      { title: 'Insurance Requirement', description: 'Compliant smoke alarms required for property insurance coverage.' }
    ]
  },
  'emergency-electrical': {
    name: '24/7 Emergency Electrical',
    shortName: 'Emergency Electrical',
    category: 'residential',
    description: 'Emergency electrician available 24/7. Fast response for power outages, electrical faults, and safety hazards.',
    icon: 'emergency',
    benefits: [
      { title: '24/7 Availability', description: 'Electrical emergencies don\'t wait. Available nights, weekends, and public holidays.' },
      { title: 'Fast Response', description: 'Quick response times throughout the Snowy Mountains region.' },
      { title: 'Winter Critical', description: 'Power loss in alpine winter can lead to frozen pipes and property damage.' },
      { title: 'Safety Priority', description: 'Immediate response to electrical hazards like sparks, burning smells, or exposed wiring.' }
    ]
  },
  'lighting-power': {
    name: 'General Electrical Services',
    shortName: 'General Electrical',
    category: 'residential',
    description: 'LED lighting, power points, electrical repairs, and general electrical work for alpine homes.',
    icon: 'bulb',
    benefits: [
      { title: 'LED Lighting', description: 'Energy-efficient LED downlights and feature lighting for alpine homes.' },
      { title: 'Power Points', description: 'Additional outlets, USB charging points, and outdoor power points.' },
      { title: 'Electrical Repairs', description: 'Fault finding, circuit repairs, and troubleshooting for alpine properties.' },
      { title: 'Renovation Work', description: 'Complete electrical installations for alpine home renovations and extensions.' }
    ]
  },
  // Commercial Services
  'ski-lodge-accommodation': {
    name: 'Ski Lodge & Accommodation Electrical',
    shortName: 'Ski Lodge Electrical',
    category: 'commercial',
    description: 'Commercial electrical services for ski lodges, hotels, and accommodation providers. Complete installations and maintenance.',
    icon: 'building',
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
    category: 'commercial',
    description: 'Commercial electrical for retail shops, cafes, restaurants. Complete fit-outs and maintenance for hospitality businesses.',
    icon: 'shop',
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
    category: 'commercial',
    description: 'Large-scale solar installations for businesses. 20kW to 100kW+ systems to reduce operating costs.',
    icon: 'solar',
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
    category: 'commercial',
    description: 'Three-phase power and commercial switchboard upgrades. Increased capacity for modern business equipment.',
    icon: 'power',
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
    category: 'commercial',
    description: 'Commercial network cabling, WiFi infrastructure, and structured cabling for business premises.',
    icon: 'network',
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
    category: 'commercial',
    description: 'NSW compliant emergency and exit lighting for commercial buildings. Required for safe evacuation.',
    icon: 'emergency',
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
    category: 'commercial',
    description: 'Electrical appliance safety testing for workplace compliance. Required for commercial premises.',
    icon: 'check',
    benefits: [
      { title: 'WH&S Compliance', description: 'NSW Work Health & Safety legislation requires regular testing of portable appliances.' },
      { title: 'Insurance Requirements', description: 'Many business insurance policies require current test and tag compliance.' },
      { title: 'All Equipment Types', description: 'Testing for office equipment, kitchen appliances, power tools, and machinery.' },
      { title: 'Regular Testing Programs', description: 'We manage your ongoing compliance with scheduled testing programs.' }
    ]
  }
}

// Location data
const locationData: Record<string, {
  name: string
  preposition: string
}> = {
  'jindabyne': { name: 'Jindabyne', preposition: 'in' },
  'thredbo': { name: 'Thredbo', preposition: 'in' },
  'perisher': { name: 'Perisher', preposition: 'in' },
  'charlotte-pass': { name: 'Charlotte Pass', preposition: 'in' },
  'berridale': { name: 'Berridale', preposition: 'in' },
  'cooma': { name: 'Cooma', preposition: 'in' },
  'crackenback': { name: 'Crackenback', preposition: 'in' },
  'kalkite': { name: 'Kalkite', preposition: 'in' },
  'dalgety': { name: 'Dalgety', preposition: 'in' },
  'adaminaby': { name: 'Adaminaby', preposition: 'in' },
  'east-jindabyne': { name: 'East Jindabyne', preposition: 'in' },
  'guthega': { name: 'Guthega', preposition: 'in' }
}

const allServices = [
  'solar-battery', 'battery-storage', 'starlink-installation', 'underfloor-heating',
  'ev-charger-installation', 'switchboard-upgrades', 'smoke-alarm-installation',
  'emergency-electrical', 'lighting-power',
  'ski-lodge-accommodation', 'retail-hospitality', 'commercial-solar',
  'commercial-switchboards', 'data-communications', 'emergency-exit-lighting', 'test-tag'
]

const allLocations = [
  'jindabyne', 'thredbo', 'perisher', 'charlotte-pass', 'berridale', 'cooma',
  'crackenback', 'kalkite', 'dalgety', 'adaminaby', 'east-jindabyne', 'guthega'
]

// Generate static params for all location+service combinations
export async function generateStaticParams() {
  const params = []
  for (const location of allLocations) {
    for (const service of allServices) {
      params.push({ location, service })
    }
  }
  return params
}

// Generate metadata for each page
export async function generateMetadata({ params }: { params: { location: string; service: string } }): Promise<Metadata> {
  const service = serviceData[params.service]
  const location = locationData[params.location]

  if (!service || !location) {
    return {
      title: 'Service Not Found',
      description: 'This service page could not be found.',
    }
  }

  return {
    title: `${service.name} ${location.name} | ${service.shortName} ${location.name} | Snowy Mountains`,
    description: `${service.name} ${location.preposition} ${location.name}. ${service.description} Local licensed electricians serving ${location.name} and the Snowy Mountains.`,
    keywords: [
      `${service.shortName.toLowerCase()} ${location.name.toLowerCase()}`,
      `electrician ${location.name.toLowerCase()}`,
      `${service.shortName.toLowerCase()} snowy mountains`
    ],
    alternates: {
      canonical: `/service-areas/${params.location}/${params.service}`,
    },
  }
}

export default function ServiceLocationPage({ params }: { params: { location: string; service: string } }) {
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
                <Link href="/service-areas/jindabyne" className="cta-primary">
                  View Jindabyne Services
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  }

  const categoryLabel = service.category === 'commercial' ? 'Commercial' : 'Residential'
  const dataIntro = generateLocationServiceIntro(params.service, params.location)
  const whyLocalPoints = generateWhyLocal(params.location)

  // Breadcrumb data
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Service Areas', url: `/service-areas/${params.location}` },
    { name: location.name, url: `/service-areas/${params.location}` },
    { name: service.shortName, url: `/service-areas/${params.location}/${params.service}` }
  ]

  return (
    <>
      <Header />
      <ServiceSchema
        serviceName={service.name}
        serviceDescription={service.description}
        serviceArea={location.name}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <main>
        <section className="hero" style={{ minHeight: '60vh' }}>
          <div className="hero-content">
            <span className="hero-badge">{location.name} {categoryLabel}</span>
            <h1>{service.name} {location.preposition} {location.name}</h1>
            <p className="hero-subtitle">
              Professional {service.name.toLowerCase()} {location.preposition} {location.name} and the surrounding
              Snowy Mountains region. {service.description}
            </p>
            <div className="hero-ctas">
              <Link href="/contact" className="cta-primary">
                Get Free Quote
              </Link>
              <Link href={`/our-services/${service.category}/${params.service}`} className="cta-secondary">
                About {service.shortName} →
              </Link>
            </div>
          </div>
        </section>

        {dataIntro && (
          <section className="services-section" style={{ background: 'rgba(14, 165, 233, 0.03)' }}>
            <div className="section-container">
              <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <div className="service-card" style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>
                  <div className="section-label">Local Data</div>
                  <h2 style={{ marginBottom: 'var(--space-md)' }}>{service.shortName} in {location.name}</h2>
                  <p>{dataIntro}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="services-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">What You Get</div>
              <h2>Why {location.name} Property Owners Choose {service.shortName}</h2>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="services-grid">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="service-card">
                    <ServiceIcon icon={service.icon} />
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
              <div className="section-label">Local Expertise</div>
              <h2>Why Choose Local {location.name} Electricians?</h2>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
                {whyLocalPoints.map((point, idx) => (
                  <div key={idx} className="service-card">
                    <h3>{point.title}</h3>
                    <p>{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">More Services in {location.name}</div>
              <h2>Other Electrical Services We Provide</h2>
            </div>

            <div className="areas-grid">
              {allServices
                .filter(s => s !== params.service)
                .slice(0, 11)
                .map((slug) => {
                  const svc = serviceData[slug]
                  return (
                    <Link
                      key={slug}
                      href={`/service-areas/${params.location}/${slug}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <div className="area-tag">
                        {svc.shortName}
                      </div>
                    </Link>
                  )
                })}
              <Link
                href={`/service-areas/${params.location}`}
                style={{ textDecoration: 'none' }}
              >
                <div className="area-tag" style={{ fontWeight: 600 }}>
                  View All {location.name} Services →
                </div>
              </Link>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
