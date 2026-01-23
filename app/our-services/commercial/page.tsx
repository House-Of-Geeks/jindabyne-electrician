import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CTASection from '../../components/CTASection'

export const metadata = {
  title: 'Commercial Electrical Services | Ski Lodges, Retail & Hospitality | Jindabyne',
  description: 'Commercial electrical services for Snowy Mountains businesses. Ski lodges, restaurants, retail, hotels—expert service for alpine commercial properties.',
}

const commercialServices = [
  {
    slug: 'retail-hospitality',
    icon: '🏪',
    title: 'Retail & Hospitality Electrical',
    description: 'Complete electrical solutions for restaurants, cafes, retail shops, and hospitality venues in the Snowy Mountains.',
    tag: 'Full Service'
  },
  {
    slug: 'ski-lodge-accommodation',
    icon: '🏔️',
    title: 'Ski Lodge & Accommodation',
    description: 'Specialized electrical services for ski lodges, hotels, and holiday accommodation properties. We understand alpine hospitality needs.',
    tag: 'Specialist'
  },
  {
    slug: 'commercial-switchboards',
    icon: '⚙️',
    title: 'Commercial Switchboards',
    description: '3-phase power installations, commercial switchboard upgrades, and industrial electrical solutions for businesses.',
    tag: 'Heavy Duty'
  },
  {
    slug: 'data-communications',
    icon: '🔌',
    title: 'Data & Communications',
    description: 'Structured cabling, network installations, data points, and communication systems for commercial properties.',
    tag: 'Technology'
  },
  {
    slug: 'emergency-exit-lighting',
    icon: '🚨',
    title: 'Emergency & Exit Lighting',
    description: 'AS2293 compliant emergency and exit lighting installation, testing, and maintenance for commercial buildings.',
    tag: 'Compliance'
  },
  {
    slug: 'test-tag',
    icon: '✅',
    title: 'Test & Tag',
    description: 'Electrical testing and tagging services for commercial equipment and appliances. Meet your workplace safety obligations.',
    tag: 'Required'
  },
  {
    slug: 'commercial-solar',
    icon: '☀️',
    title: 'Commercial Solar',
    description: 'Commercial-scale solar installations with battery backup for lodges, accommodation, and businesses.',
    tag: 'High Value',
    subServices: ['Solar for Lodges & Accommodation', 'Commercial Battery Backup']
  }
]

export default function CommercialServicesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{ minHeight: '50vh' }}>
          <div className="hero-content">
            <span className="hero-badge">Commercial Services</span>
            <h1>Electrical Services for Snowy Mountains Businesses</h1>
            <p className="hero-subtitle">
              Specialized commercial electrical solutions for ski lodges, retail, hospitality,
              and alpine business properties.
            </p>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">What We Offer</div>
              <h2>Complete Commercial Electrical Solutions</h2>
              <p className="section-subtitle">
                From routine maintenance to major installations—we keep your business running
              </p>
            </div>

            <div className="services-grid">
              {commercialServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/our-services/commercial/${service.slug}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="service-card">
                    <div className="service-icon">{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    {service.subServices && (
                      <ul style={{
                        color: 'var(--light-slate)',
                        marginBottom: 'var(--space-md)',
                        paddingLeft: '1.25rem',
                        fontSize: '0.875rem'
                      }}>
                        {service.subServices.map((sub, idx) => (
                          <li key={idx}>{sub}</li>
                        ))}
                      </ul>
                    )}
                    <span className="service-tag">{service.tag}</span>
                  </div>
                </Link>
              ))}
            </div>

            <div style={{ marginTop: 'var(--space-3xl)', maxWidth: '900px', margin: 'var(--space-3xl) auto 0' }}>
              <h2 style={{ marginBottom: 'var(--space-lg)', textAlign: 'center' }}>Industries We Serve</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-md)' }}>
                <div className="area-tag">Ski Lodges</div>
                <div className="area-tag">Hotels & Motels</div>
                <div className="area-tag">Restaurants & Cafes</div>
                <div className="area-tag">Retail Stores</div>
                <div className="area-tag">Holiday Rentals</div>
                <div className="area-tag">Office Buildings</div>
                <div className="area-tag">Medical Centers</div>
                <div className="area-tag">Commercial Property</div>
              </div>
            </div>

            <div style={{ marginTop: 'var(--space-3xl)', textAlign: 'center' }}>
              <h2 style={{ marginBottom: 'var(--space-lg)' }}>Why Businesses Choose Us</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-lg)', maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: 'var(--space-sm)' }}>⚡</div>
                  <h3 style={{ marginBottom: 'var(--space-xs)' }}>Minimal Downtime</h3>
                  <p style={{ color: 'var(--light-slate)' }}>We work around your business hours to minimize disruption</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: 'var(--space-sm)' }}>📋</div>
                  <h3 style={{ marginBottom: 'var(--space-xs)' }}>Compliance Focused</h3>
                  <p style={{ color: 'var(--light-slate)' }}>All work meets commercial building codes and safety standards</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: 'var(--space-sm)' }}>🏔️</div>
                  <h3 style={{ marginBottom: 'var(--space-xs)' }}>Alpine Specialists</h3>
                  <p style={{ color: 'var(--light-slate)' }}>Deep understanding of ski season demands and alpine conditions</p>
                </div>
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
