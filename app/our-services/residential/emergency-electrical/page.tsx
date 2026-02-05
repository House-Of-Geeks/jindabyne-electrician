import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import CTASection from '../../../components/CTASection'

export const metadata = {
  title: '24/7 Emergency Electrician | Jindabyne & Snowy Mountains',
  description: 'Emergency electrical services available 24/7 for Jindabyne, Thredbo & Snowy Mountains. Fast response for power outages, electrical faults, and urgent repairs.',
}

export default function EmergencyElectricalPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{ minHeight: '60vh' }}>
          <div className="hero-content">
            <span className="hero-badge">24/7 Available</span>
            <h1>Emergency Electrical Services</h1>
            <p className="hero-subtitle">
              24/7 emergency electrician for Jindabyne & Snowy Mountains. Fast response for
              power outages, electrical faults, safety hazards, and urgent repairs.
            </p>
            <div className="hero-ctas">
              <Link href="/contact" className="cta-primary">
                Get Emergency Service
              </Link>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div className="section-header">
              <h2>Emergency Electrical Situations</h2>
              <p className="section-subtitle">
                Call us immediately if you experience any of these electrical emergencies
              </p>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="services-grid">
                <div className="service-card">
                  <div className="service-icon">⚡</div>
                  <h3>Complete Power Loss</h3>
                  <p>Total loss of power to your property (not affecting neighbors). Could indicate main switch or meter box failure.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🔥</div>
                  <h3>Burning Smell or Sparks</h3>
                  <p>Burning electrical smell, sparks from outlets, or smoke. Turn off power at main switch and call immediately.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">💥</div>
                  <h3>Tripping Circuit Breakers</h3>
                  <p>Breakers constantly tripping, won't stay on, or main safety switch keeps tripping. Indicates serious fault.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">💡</div>
                  <h3>Flickering Lights</h3>
                  <p>Widespread flickering or dimming lights throughout property. Could indicate loose connections or overloaded circuits.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">💧</div>
                  <h3>Water & Electrical Contact</h3>
                  <p>Water in contact with electrical outlets, appliances, or switchboard. High risk of electrocution—call immediately.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🔌</div>
                  <h3>Damaged Power Lines</h3>
                  <p>Overhead lines down on property from storms. Stay clear and call Essential Energy + emergency electrician.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">❄️</div>
                  <h3>Winter Heating Failure</h3>
                  <p>Electrical heating systems failing during alpine winter. Urgent repair needed to prevent pipes freezing.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🏠</div>
                  <h3>Holiday Home Issues</h3>
                  <p>Power issues at remote holiday properties requiring immediate attention to prevent damage.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="reviews-section">
          <div className="section-container">
            <div className="section-header">
              <h2>Our Emergency Response</h2>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
                <div className="service-card">
                  <h3>24/7 Availability</h3>
                  <p>We provide emergency electrical services around the clock—nights, weekends, and public holidays.</p>
                </div>

                <div className="service-card">
                  <h3>Fast Response</h3>
                  <p>Quick response times throughout Jindabyne, Thredbo, Perisher and surrounding Snowy Mountains areas.</p>
                </div>

                <div className="service-card">
                  <h3>Fully Equipped</h3>
                  <p>Emergency service vehicles stocked with common parts and diagnostic equipment for immediate repairs.</p>
                </div>

                <div className="service-card">
                  <h3>Safety First</h3>
                  <p>We prioritize immediate safety hazards, then work to restore power and diagnose underlying issues.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ marginBottom: 'var(--space-lg)' }}>When to Call Emergency vs Standard Service</h2>

              <div style={{ display: 'grid', gap: 'var(--space-lg)', textAlign: 'left' }}>
                <div className="service-card" style={{ background: 'rgba(239, 68, 68, 0.05)', borderColor: '#EF4444' }}>
                  <h3 style={{ color: '#EF4444' }}>⚠️ Call Emergency Service:</h3>
                  <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', margin: '0.5rem 0 0 0' }}>
                    <li>Safety hazard (sparks, burning smell, exposed wires)</li>
                    <li>Complete power loss (not caused by Essential Energy outage)</li>
                    <li>Constantly tripping safety switches</li>
                    <li>Storm damage affecting electrical systems</li>
                    <li>Heating failure in freezing conditions</li>
                  </ul>
                </div>

                <div className="service-card" style={{ background: 'rgba(14, 165, 233, 0.05)', borderColor: 'var(--electric-blue)' }}>
                  <h3 style={{ color: 'var(--electric-blue)' }}>📅 Schedule Standard Service:</h3>
                  <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', margin: '0.5rem 0 0 0' }}>
                    <li>New power point or light installation</li>
                    <li>Switchboard upgrades</li>
                    <li>Planned electrical work for renovations</li>
                    <li>Solar or EV charger installation</li>
                    <li>Non-urgent repairs and maintenance</li>
                  </ul>
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
