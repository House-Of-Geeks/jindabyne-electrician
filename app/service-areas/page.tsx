import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CTASection from '../components/CTASection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Service Areas | Electrician Serving Jindabyne, Thredbo & Snowy Mountains',
  description: 'Licensed electricians serving Jindabyne, Thredbo, Perisher, Cooma, Berridale and all Snowy Mountains locations. Solar, battery storage, Starlink & emergency electrical.',
}

const locations = [
  {
    slug: 'jindabyne',
    name: 'Jindabyne',
    description: 'Central hub of the Snowy Mountains with growing residential and commercial needs.',
    population: '~5,600',
    highlight: 'Main service base'
  },
  {
    slug: 'thredbo',
    name: 'Thredbo',
    description: 'Premier ski resort with lodges, accommodations, and alpine properties.',
    population: '~350',
    highlight: 'Ski lodge specialists'
  },
  {
    slug: 'perisher',
    name: 'Perisher',
    description: 'Australia\'s largest ski resort with extensive commercial electrical needs.',
    population: '~300',
    highlight: 'Resort electrical'
  },
  {
    slug: 'cooma',
    name: 'Cooma',
    description: 'Gateway to the Snowy Mountains with established residential areas.',
    population: '~6,700',
    highlight: 'Heritage homes'
  },
  {
    slug: 'berridale',
    name: 'Berridale',
    description: 'Historic township between Cooma and Jindabyne on the Snowy Mountains Highway.',
    population: '~900',
    highlight: 'Rural properties'
  },
  {
    slug: 'charlotte-pass',
    name: 'Charlotte Pass',
    description: 'Highest ski village in Australia with unique alpine electrical requirements.',
    population: '~30',
    highlight: 'High altitude'
  },
  {
    slug: 'crackenback',
    name: 'Crackenback',
    description: 'Premium resort area between Jindabyne and Thredbo with luxury properties.',
    population: '~200',
    highlight: 'Luxury estates'
  },
  {
    slug: 'east-jindabyne',
    name: 'East Jindabyne',
    description: 'Residential area across Lake Jindabyne with growing holiday home market.',
    population: '~800',
    highlight: 'Holiday homes'
  },
  {
    slug: 'kalkite',
    name: 'Kalkite',
    description: 'Lakeside community on the eastern shores of Lake Jindabyne.',
    population: '~150',
    highlight: 'Waterfront properties'
  },
  {
    slug: 'dalgety',
    name: 'Dalgety',
    description: 'Historic rural township with heritage buildings and farm properties.',
    population: '~200',
    highlight: 'Rural electrical'
  },
  {
    slug: 'adaminaby',
    name: 'Adaminaby',
    description: 'Remote township west of Lake Eucumbene with off-grid properties.',
    population: '~300',
    highlight: 'Off-grid solar'
  },
  {
    slug: 'guthega',
    name: 'Guthega',
    description: 'Small ski village with alpine lodges and backcountry access.',
    population: '~50',
    highlight: 'Alpine access'
  }
]

export default function ServiceAreasPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{ minHeight: '60vh' }}>
          <div className="hero-content">
            <span className="hero-badge">Snowy Mountains Wide</span>
            <h1>Electricians Serving the Snowy Mountains Region</h1>
            <p className="hero-subtitle">
              Licensed electrical services across Jindabyne, Thredbo, Perisher, Cooma, and all
              surrounding Snowy Mountains communities. Local electricians who understand alpine conditions.
            </p>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Our Coverage</div>
              <h2>12 Locations Across the Snowy Mountains</h2>
              <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.125rem', color: '#475569' }}>
                From ski resorts to rural townships, we provide comprehensive electrical services
                throughout the region.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'var(--space-xl)',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {locations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/service-areas/${location.slug}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div className="service-card" style={{
                    height: '100%',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: 'var(--space-sm)'
                    }}>
                      <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>
                        {location.name}
                      </h3>
                      <div style={{
                        fontSize: '0.75rem',
                        color: '#00D9FF',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        background: 'rgba(0, 217, 255, 0.1)',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '4px',
                        whiteSpace: 'nowrap'
                      }}>
                        {location.highlight}
                      </div>
                    </div>

                    <p style={{
                      fontSize: '0.875rem',
                      color: '#64748B',
                      marginBottom: 'var(--space-md)'
                    }}>
                      Population: {location.population}
                    </p>

                    <p style={{
                      color: '#475569',
                      lineHeight: '1.6',
                      marginBottom: 'var(--space-md)'
                    }}>
                      {location.description}
                    </p>

                    <div style={{
                      marginTop: 'auto',
                      color: '#00D9FF',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      View {location.name} Services <span>→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="services-section" style={{ background: 'rgba(14, 165, 233, 0.03)' }}>
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Why Choose Local</div>
              <h2>Snowy Mountains Electrical Specialists</h2>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--space-xl)',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              <div className="service-card">
                <h3>Alpine Experience</h3>
                <p>
                  We understand Snowy Mountains conditions - from snow load requirements to
                  freeze protection and backup power needs.
                </p>
              </div>

              <div className="service-card">
                <h3>Fast Response Times</h3>
                <p>
                  Based in Jindabyne, we reach most Snowy Mountains locations within 30-45 minutes
                  for emergency callouts.
                </p>
              </div>

              <div className="service-card">
                <h3>Holiday Home Specialists</h3>
                <p>
                  Expert in the unique needs of alpine holiday properties - remote monitoring,
                  battery backup, and seasonal maintenance.
                </p>
              </div>

              <div className="service-card">
                <h3>Commercial Expertise</h3>
                <p>
                  Experienced with ski lodges, restaurants, retail, and accommodation businesses
                  throughout the region.
                </p>
              </div>

              <div className="service-card">
                <h3>Solar & Battery Specialists</h3>
                <p>
                  Certified solar and battery storage installers with alpine-specific knowledge
                  of snow loads and optimal tilt angles.
                </p>
              </div>

              <div className="service-card">
                <h3>24/7 Emergency Service</h3>
                <p>
                  Available around the clock for electrical emergencies - critical in winter when
                  power loss can cause property damage.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
