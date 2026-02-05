import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import CTASection from '../../../components/CTASection'
import Link from 'next/link'

export const metadata = {
  title: 'General Electrical Services | Electrician Jindabyne | Snowy Mountains',
  description: 'General electrical services for Jindabyne & Snowy Mountains homes. LED lighting, power points, electrical repairs, and maintenance.',
  keywords: ['electrician jindabyne', 'electrical services jindabyne', 'electrical repairs snowy mountains'],
  alternates: {
    canonical: '/our-services/residential/lighting-power',
  },
}

const locations = ['Jindabyne', 'Thredbo', 'Perisher', 'Charlotte Pass', 'Berridale', 'Cooma']

export default function LightingPowerPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{ minHeight: '60vh' }}>
          <div className="hero-content">
            <span className="hero-badge">Essential Electrical Services</span>
            <h1>General Electrical Services</h1>
            <p className="hero-subtitle">
              Professional electrical installations and repairs for Snowy Mountains homes. LED lighting,
              power points, switches, and general electrical work.
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
              <div className="section-label">What We Offer</div>
              <h2>Complete Electrical Solutions</h2>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                <div className="service-card">
                  <div className="service-icon">💡</div>
                  <h3>LED Lighting Installation</h3>
                  <p>
                    Energy-efficient LED downlights, feature lighting, outdoor lighting, and smart lighting
                    systems for alpine homes.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🔌</div>
                  <h3>Power Point Installation</h3>
                  <p>
                    Additional power outlets, USB charging points, outdoor power points, and dedicated
                    circuits for appliances.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🔧</div>
                  <h3>Electrical Repairs</h3>
                  <p>
                    Fault finding, circuit repairs, faulty switches and outlets, flickering lights, and
                    general electrical troubleshooting.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🏠</div>
                  <h3>Home Rewiring</h3>
                  <p>
                    Partial or complete home rewiring, upgrading old wiring to current standards, and
                    renovation electrical work.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🌙</div>
                  <h3>Security & Garden Lighting</h3>
                  <p>
                    Motion sensor lights, pathway lighting, deck and patio lighting, and security
                    lighting for alpine properties.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">⚡</div>
                  <h3>Circuit Upgrades</h3>
                  <p>
                    Additional circuits for high-power appliances, dedicated circuits for home offices,
                    and electrical panel upgrades.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="reviews-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Why Choose Us</div>
              <h2>Reliable Electrical Service</h2>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
                <div className="service-card">
                  <h3>Quick Response</h3>
                  <p>
                    Fast response for electrical repairs and installations throughout Jindabyne and
                    the Snowy Mountains. Same-day service often available.
                  </p>
                </div>

                <div className="service-card">
                  <h3>Quality Materials</h3>
                  <p>
                    We use high-quality switches, outlets, and lighting fixtures that withstand alpine
                    conditions and provide long-lasting performance.
                  </p>
                </div>

                <div className="service-card">
                  <h3>Tidy Workmanship</h3>
                  <p>
                    Clean installations with minimal disruption. We protect your property and leave
                    work areas clean and tidy.
                  </p>
                </div>

                <div className="service-card">
                  <h3>Licensed & Insured</h3>
                  <p>
                    All work performed by NSW licensed electricians with full public liability insurance
                    and workmanship guarantees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="areas-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Service Areas</div>
              <h2>General Electrical Services Across Snowy Mountains</h2>
            </div>

            <div className="areas-grid">
              {locations.map((location, idx) => (
                <Link
                  key={idx}
                  href={`/service-areas/${location.toLowerCase().replace(' ', '-')}/lighting-power`}
                  style={{ textDecoration: 'none' }}
                >
                  <div className="area-tag">
                    Electrician {location}
                  </div>
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
