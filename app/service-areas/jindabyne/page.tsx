import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CTASection from '../../components/CTASection'

export const metadata = {
  title: 'Electrician Jindabyne | Local Electrical Services | Solar, Battery, Starlink',
  description: 'Licensed electrician servicing Jindabyne and surrounds. Solar installation, battery storage, Starlink, emergency electrical. Local alpine electrical specialists.',
  keywords: ['electrician jindabyne', 'solar installation jindabyne', 'battery storage jindabyne', 'starlink jindabyne'],
}

const services = [
  { name: 'Solar Installation', slug: 'solar-battery', icon: '☀️' },
  { name: 'Battery Storage', slug: 'battery-storage', icon: '🔋' },
  { name: 'Starlink Installation', slug: 'starlink-installation', icon: '📡' },
  { name: 'Underfloor Heating', slug: 'underfloor-heating', icon: '🔥' },
  { name: 'EV Charger Installation', slug: 'ev-charger-installation', icon: '🚗' },
  { name: 'Switchboard Upgrades', slug: 'switchboard-upgrades', icon: '⚙️' },
  { name: 'Smoke Alarm Installation', slug: 'smoke-alarm-installation', icon: '🔔' },
  { name: 'Emergency Electrical', slug: 'emergency-electrical', icon: '🚨' },
  { name: 'Lighting & Power', slug: 'lighting-power', icon: '💡' },
]

export default function JindabynePage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{ minHeight: '60vh' }}>
          <div className="hero-content">
            <span className="hero-badge">Service Area: Jindabyne</span>
            <h1>Electrician in Jindabyne & Surrounding Areas</h1>
            <p className="hero-subtitle">
              Local licensed electricians serving Jindabyne, East Jindabyne, and surrounding Snowy
              Mountains properties. Specialists in solar, battery storage, and alpine electrical systems.
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
              <h2>Why Choose a Jindabyne-Based Electrician?</h2>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                <div className="service-card">
                  <div className="service-icon">📍</div>
                  <h3>Fast Response Times</h3>
                  <p>
                    Based in Jindabyne, we can respond quickly to electrical emergencies and service
                    calls throughout the local area.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🏔️</div>
                  <h3>Alpine Property Experience</h3>
                  <p>
                    Deep understanding of Jindabyne's mix of year-round homes, holiday properties,
                    and rental accommodations.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">⚡</div>
                  <h3>Essential Energy Network</h3>
                  <p>
                    Extensive experience with Essential Energy's local network, including connection
                    requirements and common issues.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🏘️</div>
                  <h3>Local Building Knowledge</h3>
                  <p>
                    Familiar with local building codes, Snowy Monaro Regional Council requirements,
                    and alpine construction standards.
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
              <h2>Electrical Services in Jindabyne</h2>
              <p className="section-subtitle">
                Click any service to learn more about that specific service in the Jindabyne area
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/our-services/residential/${service.slug}/jindabyne`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="service-card">
                    <div className="service-icon">{service.icon}</div>
                    <h3>{service.name} Jindabyne</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">About Jindabyne</div>
              <h2>Electrical Considerations for Jindabyne Properties</h2>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
                <div className="service-card">
                  <h3>Cold Alpine Climate</h3>
                  <p>
                    Jindabyne's alpine climate means properties require robust electrical heating
                    solutions—underfloor heating, heat pumps, and reverse cycle AC are common.
                  </p>
                </div>

                <div className="service-card">
                  <h3>Storm-Prone Area</h3>
                  <p>
                    Power outages from storms, wind, and snow are common. Battery storage systems
                    provide critical backup power to prevent pipes freezing and maintain heating.
                  </p>
                </div>

                <div className="service-card">
                  <h3>Holiday Home Market</h3>
                  <p>
                    Large proportion of holiday homes and short-term rentals. Owners need reliable
                    electrical systems and often want solar to offset running costs when vacant.
                  </p>
                </div>

                <div className="service-card">
                  <h3>Limited NBN Coverage</h3>
                  <p>
                    Many properties have poor internet connectivity. Starlink installation is in high
                    demand for reliable high-speed internet access.
                  </p>
                </div>

                <div className="service-card">
                  <h3>High Electricity Costs</h3>
                  <p>
                    Essential Energy's regional NSW pricing makes Jindabyne properties ideal candidates
                    for solar installation with faster payback periods.
                  </p>
                </div>

                <div className="service-card">
                  <h3>Tourism Season Demands</h3>
                  <p>
                    Ski season brings peak electrical demand. Commercial properties and accommodation
                    need reliable systems that can handle high winter loads.
                  </p>
                </div>
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
              {['East Jindabyne', 'Kalkite', 'Crackenback', 'Berridale', 'Dalgety', 'Cooma'].map((area) => (
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

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
