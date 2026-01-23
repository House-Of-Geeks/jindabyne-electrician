import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import CTASection from '../../../components/CTASection'
import Link from 'next/link'

export const metadata = {
  title: 'Switchboard Upgrades | Electrical Panel Replacement | Jindabyne',
  description: 'Switchboard upgrades and electrical panel replacements for Jindabyne & Snowy Mountains homes. Safety switches, circuit breakers, and modern switchboards.',
  keywords: ['switchboard upgrade jindabyne', 'electrical panel upgrade', 'fuse box replacement'],
}

const locations = ['Jindabyne', 'Thredbo', 'Perisher', 'Charlotte Pass', 'Berridale', 'Cooma']

export default function SwitchboardUpgradesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{ minHeight: '60vh' }}>
          <div className="hero-content">
            <span className="hero-badge">Safety Critical Service</span>
            <h1>Switchboard Upgrades for Alpine Homes</h1>
            <p className="hero-subtitle">
              Upgrade old fuse boxes to modern switchboards with safety switches and circuit breakers.
              Essential for alpine property safety and compliance.
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
              <div className="section-label">Why Upgrade?</div>
              <h2>Why Your Alpine Home Needs a Modern Switchboard</h2>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                <div className="service-card">
                  <div className="service-icon">⚡</div>
                  <h3>Old Fuse Boxes Unsafe</h3>
                  <p>
                    Ceramic fuse boxes lack modern safety features like RCDs (safety switches) and don't
                    provide adequate protection for today's electrical loads.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🏔️</div>
                  <h3>Alpine Conditions</h3>
                  <p>
                    Snowy Mountains properties experience harsh weather. Modern switchboards provide
                    better protection against electrical faults during storms.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🏠</div>
                  <h3>Increased Power Needs</h3>
                  <p>
                    Modern homes use more electricity (heating, EV chargers, solar). Old switchboards
                    can't safely handle increased loads.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">✅</div>
                  <h3>Compliance Required</h3>
                  <p>
                    When renovating or selling, you may be required to upgrade to a compliant switchboard
                    with safety switches on all circuits.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">💰</div>
                  <h3>Insurance Requirements</h3>
                  <p>
                    Some insurers require modern switchboards for coverage. Upgrades can reduce insurance
                    premiums and improve property value.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🔋</div>
                  <h3>Solar & Battery Ready</h3>
                  <p>
                    Planning solar or battery storage? You'll need a modern switchboard with adequate
                    capacity and solar-compatible circuit breakers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="reviews-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">What's Included</div>
              <h2>Complete Switchboard Upgrade Service</h2>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
                {[
                  { title: 'Safety Inspection', desc: 'Full electrical assessment of your current switchboard and wiring condition.' },
                  { title: 'Modern Switchboard', desc: 'New switchboard with RCDs (safety switches) on all required circuits per AS/NZS 3000.' },
                  { title: 'Circuit Breakers', desc: 'Quality circuit breakers for reliable protection and easy fault identification.' },
                  { title: 'Surge Protection', desc: 'Optional surge protection to safeguard appliances from voltage spikes and lightning.' },
                  { title: 'Labeling & Documentation', desc: 'All circuits clearly labeled with compliance certificate and test results.' },
                  { title: 'Essential Energy Notification', desc: 'We handle all paperwork and notifications with Essential Energy.' }
                ].map((item, idx) => (
                  <div key={idx} className="service-card">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Pricing</div>
              <h2>Switchboard Upgrade Costs</h2>
            </div>

            <div style={{ maxWidth: '700px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gap: 'var(--space-md)' }}>
                <div className="area-tag" style={{ textAlign: 'left', padding: 'var(--space-lg)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <strong>Basic Switchboard Upgrade</strong>
                    <span style={{ color: 'var(--electric-blue)' }}>$2,000-3,000</span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>
                    Standard home, replace old fuse box with modern switchboard
                  </p>
                </div>

                <div className="area-tag" style={{ textAlign: 'left', padding: 'var(--space-lg)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <strong>Larger Home Upgrade</strong>
                    <span style={{ color: 'var(--electric-blue)' }}>$3,000-4,500</span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>
                    Larger properties with multiple sub-boards or complex wiring
                  </p>
                </div>

                <div className="area-tag" style={{ textAlign: 'left', padding: 'var(--space-lg)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <strong>Upgrade + Additional Circuits</strong>
                    <span style={{ color: 'var(--electric-blue)' }}>$4,000-6,000+</span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>
                    Switchboard upgrade plus new circuits for solar, EV charger, etc.
                  </p>
                </div>
              </div>

              <p style={{ color: 'var(--text-secondary)', marginTop: 'var(--space-lg)', textAlign: 'center' }}>
                Prices include materials, installation, testing, and certification. Free quote provided after inspection.
              </p>
            </div>
          </div>
        </section>

        <section className="areas-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Service Areas</div>
              <h2>Switchboard Upgrades Across Snowy Mountains</h2>
            </div>

            <div className="areas-grid">
              {locations.map((location, idx) => (
                <Link
                  key={idx}
                  href={`/our-services/residential/switchboard-upgrades/${location.toLowerCase().replace(' ', '-')}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div className="area-tag">
                    Switchboard Upgrades {location}
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
