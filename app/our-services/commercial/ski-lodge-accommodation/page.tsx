import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import CTASection from '../../../components/CTASection'

export const metadata = {
  title: 'Ski Lodge & Accommodation Electrical | Jindabyne Electrician',
  description: 'Commercial electrical services for ski lodges, hotels, and accommodation providers in Jindabyne & Snowy Mountains. Compliance, maintenance, and installations.',
}

export default function SkiLodgePage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{ minHeight: '60vh' }}>
          <div className="hero-content">
            <span className="hero-badge">Commercial Specialist</span>
            <h1>Ski Lodge & Accommodation Electrical</h1>
            <p className="hero-subtitle">
              Specialized electrical services for ski lodges, hotels, and accommodation providers
              in the Snowy Mountains. From guest room fit-outs to commercial kitchen installations.
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
              <h2>Accommodation Electrical Services</h2>
              <p className="section-subtitle">
                Expert electrical solutions for lodges, hotels, and holiday accommodation
              </p>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="services-grid">
                <div className="service-card">
                  <div className="service-icon">🛏️</div>
                  <h3>Guest Room Fit-Outs</h3>
                  <p>Power points, USB charging, bedside lighting, and smart room controls. Modern amenities for guest comfort.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🍳</div>
                  <h3>Commercial Kitchen Electrical</h3>
                  <p>Three-phase power for ovens, fridges, and kitchen equipment. Compliant installations for commercial cooking facilities.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🔥</div>
                  <h3>Underfloor Heating Systems</h3>
                  <p>Electric underfloor heating for lobbies, bathrooms, and common areas. Essential comfort for alpine properties.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">💡</div>
                  <h3>Common Area Lighting</h3>
                  <p>Energy-efficient LED lighting for lobbies, hallways, stairwells, and outdoor areas. Automated and emergency lighting.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🔌</div>
                  <h3>EV Charging Stations</h3>
                  <p>Guest EV charging facilities. Multiple charge points for accommodation guests with electric vehicles.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">📡</div>
                  <h3>Internet & WiFi Infrastructure</h3>
                  <p>Data cabling and power for WiFi access points. Reliable internet throughout your accommodation facility.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">⚡</div>
                  <h3>Switchboard Upgrades</h3>
                  <p>Commercial switchboard upgrades and three-phase power installations. Handle increased loads from modern facilities.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🚨</div>
                  <h3>Fire Safety & Compliance</h3>
                  <p>Emergency lighting, exit signs, smoke alarms, and fire panel connections. Full NSW compliance for accommodation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="reviews-section">
          <div className="section-container">
            <div className="section-header">
              <h2>Why Accommodation Providers Choose Us</h2>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
                <div className="service-card">
                  <h3>Minimal Guest Disruption</h3>
                  <p>We schedule work during low-occupancy periods and work efficiently to minimize impact on your guests.</p>
                </div>

                <div className="service-card">
                  <h3>Fast Emergency Response</h3>
                  <p>24/7 emergency electrical services for lodges and hotels. We understand accommodation can't afford downtime.</p>
                </div>

                <div className="service-card">
                  <h3>Local Alpine Experience</h3>
                  <p>Extensive experience with Snowy Mountains lodges, hotels, and accommodation facilities. We understand alpine building challenges.</p>
                </div>

                <div className="service-card">
                  <h3>Compliance & Documentation</h3>
                  <p>Full compliance certificates, safety inspections, and documentation for insurance and council requirements.</p>
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
