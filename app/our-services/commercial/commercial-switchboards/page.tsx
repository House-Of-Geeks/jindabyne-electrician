import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import CTASection from '../../../components/CTASection'

export const metadata = {
  title: 'Commercial Switchboard Upgrades | Three-Phase Power | Jindabyne',
  description: 'Commercial switchboard upgrades and three-phase power installations for Jindabyne businesses. Increased capacity for modern equipment.',
}

export default function CommercialSwitchboardsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{ minHeight: '60vh' }}>
          <div className="hero-content">
            <span className="hero-badge">Commercial Electrical</span>
            <h1>Commercial Switchboards</h1>
            <p className="hero-subtitle">
              Commercial switchboard upgrades and three-phase power installations for Jindabyne
              businesses. Handle increased loads from modern commercial equipment.
            </p>
            <div className="hero-ctas">
              <Link href="/contact" className="cta-primary">
                Get Commercial Quote
              </Link>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div className="section-header">
              <h2>Commercial Switchboard Services</h2>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="services-grid">
                <div className="service-card">
                  <div className="service-icon">⚡</div>
                  <h3>Three-Phase Installations</h3>
                  <p>Three-phase power for commercial kitchens, HVAC systems, and heavy machinery. Essential for most commercial operations.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🔧</div>
                  <h3>Switchboard Upgrades</h3>
                  <p>Upgrade old fuse boards to modern circuit breakers and RCDs. Increased capacity and improved safety.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">📊</div>
                  <h3>Load Assessment</h3>
                  <p>Professional assessment of your business electrical needs. Right-sized switchboards for current and future loads.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🏢</div>
                  <h3>Commercial Metering</h3>
                  <p>Sub-metering for tenancies, solar monitoring, and energy management. Track consumption by area or tenant.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🔌</div>
                  <h3>Distribution Boards</h3>
                  <p>Sub-distribution boards for large commercial buildings. Organized circuits for different areas and equipment types.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🚨</div>
                  <h3>Safety Compliance</h3>
                  <p>RCD protection, overcurrent protection, and proper earthing. Meet all NSW commercial electrical standards.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="reviews-section">
          <div className="section-container">
            <div className="section-header">
              <h2>Signs You Need a Switchboard Upgrade</h2>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
                <div className="service-card">
                  <h3>Tripping Circuit Breakers</h3>
                  <p>Breakers constantly tripping indicate overloaded circuits. Your business has outgrown the existing switchboard.</p>
                </div>

                <div className="service-card">
                  <h3>Adding Heavy Equipment</h3>
                  <p>New commercial kitchen equipment, HVAC, or machinery requires increased electrical capacity.</p>
                </div>

                <div className="service-card">
                  <h3>Old Ceramic Fuses</h3>
                  <p>Old-style fuse boards don't have modern safety features. Upgrade to circuit breakers and RCD protection.</p>
                </div>

                <div className="service-card">
                  <h3>Business Expansion</h3>
                  <p>Renovations, additional tenancies, or expanding operations need more circuits and capacity.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div style={{ maxWidth: '700px', margin: '0 auto' }}>
              <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>Commercial Switchboard Process</h2>

              <div style={{ display: 'grid', gap: 'var(--space-md)' }}>
                <div className="service-card">
                  <strong style={{ display: 'block', marginBottom: '0.5rem' }}>1. Site Assessment</strong>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>
                    Assess current switchboard, loads, and future needs. Determine required capacity.
                  </p>
                </div>

                <div className="service-card">
                  <strong style={{ display: 'block', marginBottom: '0.5rem' }}>2. Essential Energy Coordination</strong>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>
                    Coordinate service upgrade with Essential Energy if required. Arrange supply isolation.
                  </p>
                </div>

                <div className="service-card">
                  <strong style={{ display: 'block', marginBottom: '0.5rem' }}>3. Installation</strong>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>
                    Install new commercial switchboard. Minimize business disruption with scheduled after-hours work.
                  </p>
                </div>

                <div className="service-card">
                  <strong style={{ display: 'block', marginBottom: '0.5rem' }}>4. Testing & Certification</strong>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>
                    Full testing, compliance certification, and documentation provided.
                  </p>
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
