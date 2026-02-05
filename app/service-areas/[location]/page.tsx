import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CTASection from '../../components/CTASection'
import PageMetadata from '../../components/PageMetadata'
import { LocationBusinessSchema, BreadcrumbSchema } from '../../../components/Schema'
import { Metadata } from 'next'
import locationsData from '../../../data/locations.json'

// Location data for all service areas
const locationData: Record<string, {
  name: string
  description: string
  characteristics: Array<{ title: string; description: string }>
  nearbyAreas: string[]
}> = {
  'jindabyne': {
    name: 'Jindabyne',
    description: 'Local licensed electricians serving Jindabyne, East Jindabyne, and surrounding Snowy Mountains properties. Specialists in solar, battery storage, and alpine electrical systems.',
    characteristics: [
      {
        title: 'Cold Alpine Climate',
        description: 'Jindabyne\'s alpine climate means properties require robust electrical heating solutions—underfloor heating, heat pumps, and reverse cycle AC are common.'
      },
      {
        title: 'Storm-Prone Area',
        description: 'Power outages from storms, wind, and snow are common. Battery storage systems provide critical backup power to prevent pipes freezing and maintain heating.'
      },
      {
        title: 'Holiday Home Market',
        description: 'Large proportion of holiday homes and short-term rentals. Owners need reliable electrical systems and often want solar to offset running costs when vacant.'
      },
      {
        title: 'Limited NBN Coverage',
        description: 'Many properties have poor internet connectivity. Starlink installation is in high demand for reliable high-speed internet access.'
      },
      {
        title: 'High Electricity Costs',
        description: 'Essential Energy\'s regional NSW pricing makes Jindabyne properties ideal candidates for solar installation with faster payback periods.'
      },
      {
        title: 'Tourism Season Demands',
        description: 'Ski season brings peak electrical demand. Commercial properties and accommodation need reliable systems that can handle high winter loads.'
      }
    ],
    nearbyAreas: ['East Jindabyne', 'Kalkite', 'Crackenback', 'Berridale', 'Dalgety', 'Cooma']
  },
  'thredbo': {
    name: 'Thredbo',
    description: 'Licensed electricians servicing Thredbo Village and alpine properties. Specialists in ski lodge electrical systems, solar, and high-altitude installations.',
    characteristics: [
      {
        title: 'High Alpine Environment',
        description: 'Thredbo\'s high elevation (1,380m) requires electrical systems designed for extreme cold, snow load, and harsh alpine conditions.'
      },
      {
        title: 'Ski Lodge Accommodation',
        description: 'Predominantly accommodation and tourism businesses. Commercial electrical systems for lodges, restaurants, and retail outlets.'
      },
      {
        title: 'Winter Power Demands',
        description: 'Peak electrical loads during ski season. Heating, hot water, and guest facilities require robust electrical infrastructure.'
      },
      {
        title: 'Limited Vehicle Access',
        description: 'Vehicle restrictions in village require careful planning for electrical work logistics and equipment access.'
      },
      {
        title: 'Snow and Ice Management',
        description: 'Outdoor electrical installations must withstand heavy snow loads and ice. Heated cable systems often required.'
      },
      {
        title: 'NBN Availability',
        description: 'Limited NBN coverage. Starlink becoming popular for reliable high-speed internet in alpine accommodation.'
      }
    ],
    nearbyAreas: ['Jindabyne', 'Crackenback', 'Perisher', 'Charlotte Pass']
  },
  'perisher': {
    name: 'Perisher',
    description: 'Electrical services for Perisher Valley ski resort properties. Specialists in alpine accommodation electrical systems and high-altitude installations.',
    characteristics: [
      {
        title: 'Australia\'s Largest Ski Resort',
        description: 'Perisher\'s resort properties require commercial-grade electrical systems for accommodation, lifts, and facilities.'
      },
      {
        title: 'Extreme Weather Conditions',
        description: 'Highest elevation properties face extreme cold, wind, and snow. Electrical systems must be rated for harsh alpine conditions.'
      },
      {
        title: 'Seasonal Operations',
        description: 'Many properties operate seasonally. Electrical systems need proper winterization and summer maintenance.'
      },
      {
        title: 'Remote Location Challenges',
        description: 'Limited access and remote location requires well-planned electrical work and reliable systems to minimize service calls.'
      },
      {
        title: 'Snow-Covered Roofs',
        description: 'Solar panel installations require careful design to handle snow load and minimize snow accumulation on panels.'
      },
      {
        title: 'Backup Power Critical',
        description: 'Power outages during ski season are costly. Battery backup systems essential for maintaining operations.'
      }
    ],
    nearbyAreas: ['Charlotte Pass', 'Thredbo', 'Jindabyne', 'Crackenback']
  },
  'charlotte-pass': {
    name: 'Charlotte Pass',
    description: 'Electrical services for Charlotte Pass alpine village. Australia\'s highest permanent settlement requires specialist alpine electrical expertise.',
    characteristics: [
      {
        title: 'Highest Settlement in Australia',
        description: 'At 1,760m elevation, Charlotte Pass faces the most extreme weather. Electrical systems must withstand harsh alpine conditions year-round.'
      },
      {
        title: 'Snow Access Only (Winter)',
        description: 'Winter access by over-snow transport only. Electrical work requires special planning and often must wait for summer access.'
      },
      {
        title: 'Limited Essential Energy Infrastructure',
        description: 'Remote location means power supply challenges. Backup systems and renewable energy critical for reliability.'
      },
      {
        title: 'Small Seasonal Community',
        description: 'Close-knit seasonal community. Electrical work must minimize disruption to limited accommodation options.'
      },
      {
        title: 'Extreme Cold Requirements',
        description: 'Properties require maximum insulation and heating capacity. Electrical systems sized for significant winter loads.'
      },
      {
        title: 'Off-Grid Considerations',
        description: 'Some properties benefit from solar + battery systems to reduce grid dependence and manage high electricity costs.'
      }
    ],
    nearbyAreas: ['Perisher', 'Thredbo', 'Jindabyne', 'Crackenback']
  },
  'berridale': {
    name: 'Berridale',
    description: 'Licensed electricians servicing Berridale and surrounds. Local electrical services for residential, rural, and commercial properties.',
    characteristics: [
      {
        title: 'Rural Service Town',
        description: 'Berridale services surrounding rural properties. Mix of residential, agricultural, and small commercial electrical needs.'
      },
      {
        title: 'Gateway to Snowy Mountains',
        description: 'Tourism businesses require reliable electrical systems. Accommodation and hospitality electrical installations common.'
      },
      {
        title: 'Rural Properties',
        description: 'Many larger rural blocks. Solar installations popular for reducing electricity costs on properties with high energy use.'
      },
      {
        title: 'Moderate Climate',
        description: 'Lower elevation than alpine resorts means less extreme conditions, but still cold winters requiring good heating systems.'
      },
      {
        title: 'NBN and Internet',
        description: 'Variable internet quality. Starlink increasingly popular for rural properties outside NBN fixed-line coverage.'
      },
      {
        title: 'Storm Resilience',
        description: 'Exposed to wind and storms. Battery backup systems valuable for rural properties during Essential Energy outages.'
      }
    ],
    nearbyAreas: ['Jindabyne', 'Dalgety', 'Cooma', 'Crackenback']
  },
  'cooma': {
    name: 'Cooma',
    description: 'Electrical services for Cooma and the Monaro region. Residential, commercial, and rural electrical solutions.',
    characteristics: [
      {
        title: 'Regional Hub',
        description: 'Cooma is the major regional centre. Full range of residential, commercial, and industrial electrical services available.'
      },
      {
        title: 'Commercial District',
        description: 'Established commercial district with shops, cafes, and businesses. Commercial fit-outs and electrical maintenance common.'
      },
      {
        title: 'Cold Winters',
        description: 'Monaro region known for cold winters. Properties require effective electrical heating and good insulation.'
      },
      {
        title: 'Solar Ideal',
        description: 'High solar exposure and clear days make Cooma ideal for solar installations. Strong ROI on residential and commercial solar.'
      },
      {
        title: 'Growing Town',
        description: 'Cooma is growing with new residential developments. New homes, renovations, and electrical upgrades in demand.'
      },
      {
        title: 'Rural Surrounds',
        description: 'Surrounding rural properties need electrical services. Farm installations, rural solar, and off-grid systems common.'
      }
    ],
    nearbyAreas: ['Berridale', 'Jindabyne', 'Dalgety', 'Adaminaby']
  },
  'crackenback': {
    name: 'Crackenback',
    description: 'Electrical services for Crackenback and the Alpine Way. Servicing residential properties, ski lodges, and holiday accommodations.',
    characteristics: [
      {
        title: 'Alpine Way Location',
        description: 'Properties along the Alpine Way between Jindabyne and Thredbo. Mix of holiday homes and permanent residences.'
      },
      {
        title: 'Crackenback Resort',
        description: 'Proximity to major resort means commercial accommodation electrical requirements. Lodges and chalets need reliable systems.'
      },
      {
        title: 'Holiday Property Hub',
        description: 'High concentration of holiday homes and short-term rentals. Owners want low-maintenance electrical systems and solar to offset costs.'
      },
      {
        title: 'Alpine Climate',
        description: 'Cold winters and occasional snow. Electrical heating systems essential, with underfloor heating popular in newer properties.'
      },
      {
        title: 'Scenic Rural Properties',
        description: 'Larger blocks with mountain views. Many properties suited to solar installations with good northern exposure.'
      },
      {
        title: 'Starlink Demand',
        description: 'Variable NBN coverage. Starlink popular for reliable internet in holiday homes and rural properties.'
      }
    ],
    nearbyAreas: ['Jindabyne', 'Thredbo', 'Perisher', 'East Jindabyne']
  },
  'kalkite': {
    name: 'Kalkite',
    description: 'Licensed electricians servicing Kalkite and surrounds. Local electrical services for rural and residential properties.',
    characteristics: [
      {
        title: 'Rural Residential',
        description: 'Kalkite is a small rural community. Properties typically on larger blocks with a mix of permanent residents and holiday homes.'
      },
      {
        title: 'Jindabyne Proximity',
        description: 'Close to Jindabyne for services but maintains rural character. Properties need reliable electrical systems with rural considerations.'
      },
      {
        title: 'Holiday Home Market',
        description: 'Many properties used as holiday homes or Airbnb. Reliable electrical systems important for property management.'
      },
      {
        title: 'Solar Suitability',
        description: 'Rural properties with good sun exposure ideal for solar. Battery storage popular for backup during Essential Energy outages.'
      },
      {
        title: 'Moderate Climate',
        description: 'Lower elevation than alpine resorts but still experiences cold winters. Electric heating and good insulation required.'
      },
      {
        title: 'NBN Gaps',
        description: 'Some properties outside fixed-line NBN coverage. Starlink installations increasingly common for reliable internet.'
      }
    ],
    nearbyAreas: ['Jindabyne', 'East Jindabyne', 'Crackenback', 'Berridale']
  },
  'dalgety': {
    name: 'Dalgety',
    description: 'Electrical services for Dalgety and the Snowy River region. Rural electrical services, solar installations, and farm electrical work.',
    characteristics: [
      {
        title: 'Historic Rural Town',
        description: 'Small historic town on the Snowy River. Rural electrical services including farm installations and homestead upgrades.'
      },
      {
        title: 'Agricultural Properties',
        description: 'Surrounding farms and rural properties. Irrigation pumps, sheds, stock water systems, and farm infrastructure electrical work.'
      },
      {
        title: 'Off-Grid Interest',
        description: 'Remote rural properties sometimes benefit from off-grid solar systems or solar with battery backup for reliability.'
      },
      {
        title: 'Essential Energy Network',
        description: 'Rural single-wire earth return (SWER) lines common. Properties often benefit from power quality improvements and surge protection.'
      },
      {
        title: 'Snowy River Corridor',
        description: 'Properties along Snowy River popular for holiday homes and rural retreats. Electrical systems must be reliable for property owners.'
      },
      {
        title: 'Limited Services',
        description: 'Small community means property owners value reliable tradespeople. Long-term relationships and quality work essential.'
      }
    ],
    nearbyAreas: ['Berridale', 'Jindabyne', 'Cooma', 'Adaminaby']
  },
  'adaminaby': {
    name: 'Adaminaby',
    description: 'Licensed electricians servicing Adaminaby and Lake Eucumbene region. Electrical services for rural properties, holiday homes, and fishing shacks.',
    characteristics: [
      {
        title: 'Lake Eucumbene Gateway',
        description: 'Adaminaby serves properties around Lake Eucumbene. Fishing shacks, holiday homes, and rural properties need electrical services.'
      },
      {
        title: 'Rural Town',
        description: 'Small rural service town. Mix of permanent residents and holiday property owners requiring electrical work.'
      },
      {
        title: 'Cold Climate',
        description: 'High elevation means cold winters. Properties require good electrical heating systems and insulation.'
      },
      {
        title: 'Solar Potential',
        description: 'Rural properties ideal for solar. High electricity costs make solar installations economically attractive.'
      },
      {
        title: 'Holiday Properties',
        description: 'Many fishing shacks and holiday homes around Lake Eucumbene. Reliable electrical systems important for property owners.'
      },
      {
        title: 'Remote Location',
        description: 'Some properties quite remote. Off-grid solar systems and Starlink installations suited to remote lakeside properties.'
      }
    ],
    nearbyAreas: ['Cooma', 'Berridale', 'Jindabyne', 'Dalgety']
  },
  'east-jindabyne': {
    name: 'East Jindabyne',
    description: 'Electrical services for East Jindabyne. Local electricians for residential properties, renovations, and new builds.',
    characteristics: [
      {
        title: 'Residential Suburb',
        description: 'East Jindabyne is primarily residential. Family homes, townhouses, and newer developments require electrical services.'
      },
      {
        title: 'Growing Area',
        description: 'Newer residential development compared to original Jindabyne. New builds, extensions, and renovations common.'
      },
      {
        title: 'Family Homes',
        description: 'Mix of permanent residents and holiday homes. Properties require reliable electrical systems for family living.'
      },
      {
        title: 'Modern Standards',
        description: 'Newer properties often have good electrical systems but may want upgrades: LED lighting, solar, EV chargers.'
      },
      {
        title: 'Solar Interest',
        description: 'Residential properties ideal for solar. Homeowners interested in reducing electricity bills with solar and battery systems.'
      },
      {
        title: 'Close to Town',
        description: 'Easy access to Jindabyne services. Fast response times for electrical emergencies and service calls.'
      }
    ],
    nearbyAreas: ['Jindabyne', 'Kalkite', 'Crackenback', 'Berridale']
  },
  'guthega': {
    name: 'Guthega',
    description: 'Electrical services for Guthega and surrounding alpine properties. Specialist high-altitude electrical installations and ski lodge systems.',
    characteristics: [
      {
        title: 'High Alpine Location',
        description: 'Guthega is a small alpine village at high elevation. Electrical systems must withstand extreme cold and harsh conditions.'
      },
      {
        title: 'Ski Club Lodges',
        description: 'Predominantly ski club lodges and accommodation. Commercial electrical systems for seasonal accommodation operations.'
      },
      {
        title: 'Seasonal Access',
        description: 'Winter access can be challenging. Electrical work often scheduled for summer when access easier.'
      },
      {
        title: 'Remote Infrastructure',
        description: 'Remote location means electrical reliability critical. Backup systems important for lodge operations.'
      },
      {
        title: 'Snow Load Considerations',
        description: 'Any outdoor electrical installations must handle heavy snow loads and potential ice damage.'
      },
      {
        title: 'Limited Grid Infrastructure',
        description: 'Power supply infrastructure limited. Some properties may benefit from solar and battery backup systems.'
      }
    ],
    nearbyAreas: ['Perisher', 'Thredbo', 'Jindabyne', 'Crackenback']
  }
}

const services = [
  {
    name: 'Solar Installation',
    slug: 'solar-battery',
    icon: 'solar',
    description: 'Complete solar installations with battery storage options'
  },
  {
    name: 'Battery Storage',
    slug: 'battery-storage',
    icon: 'battery',
    description: 'Tesla Powerwall, Sonnen & BYD battery systems for backup power'
  },
  {
    name: 'Starlink Installation',
    slug: 'starlink-installation',
    icon: 'signal',
    description: 'Professional Starlink setup for reliable high-speed internet'
  },
  {
    name: 'Underfloor Heating',
    slug: 'underfloor-heating',
    icon: 'heating',
    description: 'Electric underfloor heating for alpine comfort'
  },
  {
    name: 'EV Charger Installation',
    slug: 'ev-charger-installation',
    icon: 'charging',
    description: 'Tesla and universal EV charger installation'
  },
  {
    name: 'Switchboard Upgrades',
    slug: 'switchboard-upgrades',
    icon: 'power',
    description: 'Modern switchboards with safety switches and circuit breakers'
  },
  {
    name: 'Smoke Alarm Installation',
    slug: 'smoke-alarm-installation',
    icon: 'alarm',
    description: 'NSW compliant smoke detector installations and upgrades'
  },
  {
    name: 'Emergency Electrical',
    slug: 'emergency-electrical',
    icon: 'emergency',
    description: '24/7 emergency electrical service for urgent issues'
  },
  {
    name: 'General Electrical Services',
    slug: 'lighting-power',
    icon: 'bulb',
    description: 'LED lighting, power points, repairs, and maintenance'
  },
]

// Generate static params for all locations
export async function generateStaticParams() {
  return Object.keys(locationData).map((location) => ({
    location,
  }))
}

// Generate metadata for each location
export async function generateMetadata({ params }: { params: { location: string } }): Promise<Metadata> {
  const location = locationData[params.location]

  if (!location) {
    return {
      title: 'Service Area Not Found',
      description: 'This service area page could not be found.',
    }
  }

  return {
    title: `Electrician ${location.name} | Local Electrical Services | Solar, Battery, Starlink`,
    description: location.description,
    keywords: [`electrician ${location.name.toLowerCase()}`, `solar installation ${location.name.toLowerCase()}`, `battery storage ${location.name.toLowerCase()}`, `starlink ${location.name.toLowerCase()}`],
  }
}

export default function ServiceAreaPage({ params }: { params: { location: string } }) {
  const location = locationData[params.location]

  if (!location) {
    return (
      <>
        <Header />
        <main>
          <section className="hero" style={{ minHeight: '60vh' }}>
            <div className="hero-content">
              <h1>Service Area Not Found</h1>
              <p className="hero-subtitle">
                The service area you're looking for doesn't exist.
              </p>
              <div className="hero-ctas">
                <Link href="/service-areas/jindabyne" className="cta-primary">
                  View Jindabyne
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  }

  // Get location data from JSON
  const locationSlug = params.location
  const locationInfo = locationsData[locationSlug as keyof typeof locationsData]

  // Create breadcrumbs
  const breadcrumbs = [
    { name: 'Home', url: 'https://jindabyneelectrician.com.au' },
    { name: 'Service Areas', url: 'https://jindabyneelectrician.com.au/service-areas' },
    { name: location.name, url: `https://jindabyneelectrician.com.au/service-areas/${locationSlug}` }
  ]

  return (
    <>
      <LocationBusinessSchema
        locationName={location.name}
        description={location.description}
        postalCode={locationInfo && typeof locationInfo === 'object' && 'postcode' in locationInfo ? locationInfo.postcode : '2627'}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      <main>
        <section className="hero" style={{ minHeight: '60vh' }}>
          <div className="hero-content">
            <span className="hero-badge">Service Area: {location.name}</span>
            <h1>Electrician in {location.name} & Surrounding Areas</h1>
            <p className="hero-subtitle">
              {location.description}
            </p>
            <div className="hero-ctas">
              <Link href="/contact" className="cta-primary">
                Get Free Quote
              </Link>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Local Knowledge</div>
              <h2>Why Choose a {location.name}-Based Electrician?</h2>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                <div className="service-card">
                  <div className="service-icon">📍</div>
                  <h3>Fast Response Times</h3>
                  <p>
                    Local to {location.name}, we can respond quickly to electrical emergencies and service
                    calls throughout the area.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🏔️</div>
                  <h3>Alpine Property Experience</h3>
                  <p>
                    Deep understanding of {location.name}'s property mix and the electrical challenges
                    of Snowy Mountains locations.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">⚡</div>
                  <h3>Essential Energy Network</h3>
                  <p>
                    Extensive experience with Essential Energy's local network, including connection
                    requirements and common issues in {location.name}.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🏘️</div>
                  <h3>Local Building Knowledge</h3>
                  <p>
                    Familiar with local building codes, Snowy Monaro Regional Council requirements,
                    and {location.name} construction standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="reviews-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Services Available</div>
              <h2>Electrical Services in {location.name}</h2>
              <p className="section-subtitle">
                All electrical services available in the {location.name} area
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/service-areas/${params.location}/${service.slug}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  className="service-card-link"
                >
                  <div className="service-card">
                    <div className="service-icon">{service.icon}</div>
                    <h3>{service.name}</h3>
                    <p style={{
                      color: 'var(--light-slate)',
                      fontSize: '0.9rem',
                      marginTop: 'var(--space-sm)',
                      marginBottom: 'var(--space-md)'
                    }}>
                      {service.description}
                    </p>
                    <div style={{
                      marginTop: 'auto',
                      color: 'var(--electric-blue)',
                      fontSize: '0.875rem',
                      fontWeight: 600
                    }}>
                      View Details →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">About {location.name}</div>
              <h2>Electrical Considerations for {location.name} Properties</h2>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
                {location.characteristics.map((char, idx) => (
                  <div key={idx} className="service-card">
                    <h3>{char.title}</h3>
                    <p>{char.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="areas-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Coverage Area</div>
              <h2>Nearby Areas We Service</h2>
            </div>

            <div className="areas-grid">
              {location.nearbyAreas.map((area) => (
                <Link
                  key={area}
                  href={`/service-areas/${area.toLowerCase().replace(' ', '-')}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div className="area-tag">{area}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <PageMetadata
                lastUpdated={locationsData._metadata.last_updated}
                dataSources={[
                  {
                    name: 'Bureau of Meteorology',
                    url: locationsData._metadata.data_sources.bom,
                    description: 'Climate and weather data'
                  },
                  {
                    name: 'Australian Bureau of Statistics',
                    url: locationsData._metadata.data_sources.abs,
                    description: 'Census and population data'
                  },
                  {
                    name: 'Australian Energy Regulator',
                    url: locationsData._metadata.data_sources.aer,
                    description: 'Electricity pricing data'
                  },
                  {
                    name: 'Essential Energy',
                    url: locationsData._metadata.data_sources.essential_energy,
                    description: 'Network reliability data'
                  }
                ]}
              />
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
