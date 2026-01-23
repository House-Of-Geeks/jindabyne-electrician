import Link from 'next/link'
import Header from '../../../../components/Header'
import Footer from '../../../../components/Footer'
import CTASection from '../../../../components/CTASection'
import { Metadata } from 'next'

// Service data
const serviceData: Record<string, {
  name: string
  shortName: string
  description: string
  icon: string
  benefits: Array<{ title: string; description: string }>
}> = {
  'solar-battery': {
    name: 'Solar Installation',
    shortName: 'Solar',
    description: 'Complete solar panel installations for alpine homes. Grid-tied and off-grid systems with high-efficiency panels.',
    icon: '☀️',
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
    description: 'Tesla Powerwall, Sonnen, and BYD battery systems. Backup power and energy independence for alpine properties.',
    icon: '🔋',
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
    description: 'Professional Starlink satellite internet installation. High-speed internet where NBN coverage is poor.',
    icon: '📡',
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
    description: 'Electric underfloor heating for alpine homes. Premium comfort for cold Snowy Mountains winters.',
    icon: '🔥',
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
    description: 'Tesla Wall Connector and universal EV chargers. Home charging solutions for electric vehicles.',
    icon: '🚗',
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
    description: 'Modern switchboard upgrades with safety switches and circuit breakers. Essential for older alpine properties.',
    icon: '⚙️',
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
    description: 'NSW compliant photoelectric smoke alarms. Interconnected systems for residential and rental properties.',
    icon: '🔔',
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
    description: 'Emergency electrician available 24/7. Fast response for power outages, electrical faults, and safety hazards.',
    icon: '🚨',
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
    description: 'LED lighting, power points, electrical repairs, and general electrical work for alpine homes.',
    icon: '💡',
    benefits: [
      { title: 'LED Lighting', description: 'Energy-efficient LED downlights and feature lighting for alpine homes.' },
      { title: 'Power Points', description: 'Additional outlets, USB charging points, and outdoor power points.' },
      { title: 'Electrical Repairs', description: 'Fault finding, circuit repairs, and troubleshooting for alpine properties.' },
      { title: 'Renovation Work', description: 'Complete electrical installations for alpine home renovations and extensions.' }
    ]
  }
}

// Location data (matching service-areas)
const locationData: Record<string, {
  name: string
  preposition: string
  relevance: string
}> = {
  'jindabyne': { name: 'Jindabyne', preposition: 'in', relevance: 'Jindabyne\'s mix of year-round homes and holiday properties makes this service particularly valuable.' },
  'thredbo': { name: 'Thredbo', preposition: 'in', relevance: 'Thredbo\'s high-altitude ski lodges and accommodation properties require reliable systems.' },
  'perisher': { name: 'Perisher', preposition: 'in', relevance: 'Perisher resort properties face extreme alpine conditions and need robust installations.' },
  'charlotte-pass': { name: 'Charlotte Pass', preposition: 'in', relevance: 'Charlotte Pass is Australia\'s highest settlement—systems must handle harsh alpine conditions.' },
  'berridale': { name: 'Berridale', preposition: 'in', relevance: 'Berridale properties include rural homes, accommodation, and tourism businesses.' },
  'cooma': { name: 'Cooma', preposition: 'in', relevance: 'Cooma is the regional hub with residential, commercial, and rural properties.' },
  'crackenback': { name: 'Crackenback', preposition: 'in', relevance: 'Crackenback\'s alpine holiday homes and resort properties require quality installations.' },
  'kalkite': { name: 'Kalkite', preposition: 'in', relevance: 'Kalkite\'s rural residential properties benefit from reliable electrical systems.' },
  'dalgety': { name: 'Dalgety', preposition: 'in', relevance: 'Dalgety and Snowy River region properties include farms and rural retreats.' },
  'adaminaby': { name: 'Adaminaby', preposition: 'in', relevance: 'Adaminaby serves Lake Eucumbene properties including fishing shacks and holiday homes.' },
  'east-jindabyne': { name: 'East Jindabyne', preposition: 'in', relevance: 'East Jindabyne\'s growing residential area includes family homes and newer developments.' },
  'guthega': { name: 'Guthega', preposition: 'in', relevance: 'Guthega\'s ski lodges and alpine properties operate in extreme high-altitude conditions.' }
}

const residentialServices = [
  'solar-battery', 'battery-storage', 'starlink-installation', 'underfloor-heating',
  'ev-charger-installation', 'switchboard-upgrades', 'smoke-alarm-installation',
  'emergency-electrical', 'lighting-power'
]

const allLocations = [
  'jindabyne', 'thredbo', 'perisher', 'charlotte-pass', 'berridale', 'cooma',
  'crackenback', 'kalkite', 'dalgety', 'adaminaby', 'east-jindabyne', 'guthega'
]

// Generate static params for all service+location combinations
export async function generateStaticParams() {
  const params = []
  for (const service of residentialServices) {
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
    title: `${service.name} ${location.name} | ${service.shortName} Installation ${location.name}`,
    description: `${service.name} ${location.preposition} ${location.name} and surrounds. ${service.description}`,
    keywords: [
      `${service.shortName.toLowerCase()} ${location.name.toLowerCase()}`,
      `${service.shortName.toLowerCase()} installation ${location.name.toLowerCase()}`,
      `electrician ${location.name.toLowerCase()}`
    ],
  }
}

export default function ServiceLocationPage({ params }: { params: { service: string; location: string } }) {
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
                <Link href="/our-services/residential" className="cta-primary">
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
            <span className="hero-badge">{location.name} Service Area</span>
            <h1>{service.name} {location.preposition} {location.name}</h1>
            <p className="hero-subtitle">
              Local licensed electricians providing {service.name.toLowerCase()} {location.preposition} {location.name}
              and the surrounding Snowy Mountains region. {service.description}
            </p>
            <div className="hero-ctas">
              <Link href="/contact" className="cta-primary">
                Get Free Quote
              </Link>
              <Link href={`/our-services/residential/${params.service}`} className="cta-secondary">
                Learn More About {service.shortName} →
              </Link>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Why This Service Matters</div>
              <h2>{service.name} for {location.name} Properties</h2>
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
              <div className="section-label">Local Expertise</div>
              <h2>Why Choose Local {location.name} Electricians?</h2>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
                <div className="service-card">
                  <h3>Fast Local Response</h3>
                  <p>
                    Based near {location.name}, we provide fast response times for installations,
                    repairs, and emergency electrical work throughout the area.
                  </p>
                </div>

                <div className="service-card">
                  <h3>Alpine Property Experience</h3>
                  <p>
                    We understand {location.name} properties and the unique electrical challenges
                    of Snowy Mountains homes, holiday properties, and commercial buildings.
                  </p>
                </div>

                <div className="service-card">
                  <h3>Quality Installations</h3>
                  <p>
                    All {service.name.toLowerCase()} work meets Australian Standards and is completed
                    by NSW licensed electricians with full insurance and compliance certification.
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
              <h2>More Electrical Services in {location.name}</h2>
            </div>

            <div className="areas-grid">
              {residentialServices
                .filter(s => s !== params.service)
                .slice(0, 8)
                .map((slug) => {
                  const svc = serviceData[slug]
                  return (
                    <Link
                      key={slug}
                      href={`/our-services/residential/${slug}/${params.location}`}
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
