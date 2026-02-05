import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import CTASection from '../../../components/CTASection'
import { ServiceSchema, BreadcrumbSchema } from '../../../../components/Schema'

export const metadata = {
  title: 'EV Charger Installation | Tesla Charger | Jindabyne Electrician',
  description: 'Electric vehicle charger installation for Jindabyne & Snowy Mountains homes. Tesla Wall Connector and universal EV chargers.',
  alternates: {
    canonical: '/our-services/residential/ev-charger-installation',
  },
}

export default function EVChargerPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://www.jindabyneelectrician.com.au' },
    { name: 'Services', url: 'https://www.jindabyneelectrician.com.au/our-services' },
    { name: 'Residential', url: 'https://www.jindabyneelectrician.com.au/our-services/residential' },
    { name: 'EV Charger Installation', url: 'https://www.jindabyneelectrician.com.au/our-services/residential/ev-charger-installation' }
  ]

  return (
    <>
      <ServiceSchema
        serviceName="EV Charger Installation"
        serviceDescription="Electric vehicle charger installation for Snowy Mountains homes. Tesla Wall Connector, universal EV chargers, and solar-integrated charging solutions."
        serviceArea="Jindabyne & Snowy Mountains"
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      <main>
        <section className="hero" style={{ minHeight: '60vh' }}>
          <div className="hero-content">
            <span className="hero-badge">Growing Category</span>
            <h1>EV Charger Installation</h1>
            <p className="hero-subtitle">
              Professional electric vehicle charger installation for Snowy Mountains homes.
              Tesla Wall Connector, universal EV chargers, and solar-integrated charging solutions.
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
              <h2>Home EV Charging Solutions</h2>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="services-grid">
                <div className="service-card">
                  <div className="service-icon">🚗</div>
                  <h3>Tesla Wall Connector</h3>
                  <p>Official Tesla home charger installation. Fast charging up to 11kW for all Tesla models.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🔌</div>
                  <h3>Universal EV Chargers</h3>
                  <p>Type 2 chargers compatible with all electric vehicles sold in Australia. Future-proof your home.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">☀️</div>
                  <h3>Solar + EV Charging</h3>
                  <p>Pair EV chargers with solar systems to charge your vehicle with clean, free energy from the sun.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">⚡</div>
                  <h3>Dedicated Circuit</h3>
                  <p>Properly sized dedicated circuit from your switchboard. Safe, code-compliant installations.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🏠</div>
                  <h3>Indoor & Outdoor</h3>
                  <p>Garage, carport, or outdoor installation. Weather-proof chargers for alpine conditions.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">📱</div>
                  <h3>Smart Charging</h3>
                  <p>WiFi-enabled chargers with scheduling, load management, and smartphone app control.</p>
                </div>
              </div>

              <div style={{ marginTop: 'var(--space-3xl)' }}>
                <h3 style={{ marginBottom: 'var(--space-lg)', textAlign: 'center' }}>EV Charger Types</h3>
                <div style={{ display: 'grid', gap: 'var(--space-md)', maxWidth: '700px', margin: '0 auto' }}>
                  <div className="area-tag" style={{ textAlign: 'left', padding: 'var(--space-lg)' }}>
                    <strong>Level 2 Home Charger (7-11kW)</strong>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: '0.5rem 0 0 0' }}>
                      Standard home charging. Full overnight charge for most EVs.
                    </p>
                  </div>

                  <div className="area-tag" style={{ textAlign: 'left', padding: 'var(--space-lg)' }}>
                    <strong>Smart Charger with Load Management</strong>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: '0.5rem 0 0 0' }}>
                      Adjusts charging rate based on available power. Ideal for homes with solar or limited capacity.
                    </p>
                  </div>

                  <div className="area-tag" style={{ textAlign: 'left', padding: 'var(--space-lg)' }}>
                    <strong>Solar-Integrated Charging</strong>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: '0.5rem 0 0 0' }}>
                      Charge from excess solar during the day. Maximize self-consumption and reduce grid usage.
                    </p>
                  </div>
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
