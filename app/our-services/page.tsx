import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CTASection from '../components/CTASection'

export const metadata = {
  title: 'Our Services | Residential & Commercial Electrical | Jindabyne Electrician',
  description: 'Complete electrical services for Snowy Mountains properties. Residential and commercial solutions including solar, battery storage, and emergency electrical.',
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{ minHeight: '50vh' }}>
          <div className="hero-content">
            <span className="hero-badge">Our Services</span>
            <h1>Electrical Services for the Snowy Mountains</h1>
            <p className="hero-subtitle">
              Complete residential and commercial electrical solutions designed for alpine properties.
              From everyday electrical needs to specialist solar and battery installations.
            </p>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 'var(--space-2xl)', maxWidth: '1200px', margin: '0 auto' }}>

              {/* Residential Services */}
              <Link href="/our-services/residential" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="service-card" style={{ height: '100%', cursor: 'pointer' }}>
                  <div className="service-icon" style={{ fontSize: '3rem', marginBottom: 'var(--space-lg)' }}>🏠</div>
                  <h2 style={{ fontSize: '2rem', marginBottom: 'var(--space-md)' }}>Residential Services</h2>
                  <p style={{ fontSize: '1.125rem', marginBottom: 'var(--space-lg)', color: 'var(--text-secondary)' }}>
                    Electrical services for homes and holiday properties in the Snowy Mountains.
                  </p>

                  <div style={{ marginBottom: 'var(--space-lg)' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: 'var(--space-sm)', color: 'var(--electric-blue)' }}>
                      High-Value Services:
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                      <li>☀️ Solar Installation ($8-15K+)</li>
                      <li>🔋 Battery Storage ($10-20K+)</li>
                      <li>📡 Starlink Installation</li>
                      <li>🔥 Underfloor Heating</li>
                      <li>🚗 EV Charger Installation</li>
                    </ul>
                  </div>

                  <div style={{ marginBottom: 'var(--space-lg)' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: 'var(--space-sm)', color: 'var(--electric-blue)' }}>
                      Essential Services:
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                      <li>💡 Lighting & Power Points</li>
                      <li>⚙️ Switchboard Upgrades</li>
                      <li>🔔 Smoke Alarm Installation</li>
                      <li>🚨 Emergency Electrical (24/7)</li>
                    </ul>
                  </div>

                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--electric-blue)',
                    fontWeight: '600',
                    marginTop: 'auto'
                  }}>
                    View Residential Services →
                  </div>
                </div>
              </Link>

              {/* Commercial Services */}
              <Link href="/our-services/commercial" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="service-card" style={{ height: '100%', cursor: 'pointer' }}>
                  <div className="service-icon" style={{ fontSize: '3rem', marginBottom: 'var(--space-lg)' }}>🏢</div>
                  <h2 style={{ fontSize: '2rem', marginBottom: 'var(--space-md)' }}>Commercial Services</h2>
                  <p style={{ fontSize: '1.125rem', marginBottom: 'var(--space-lg)', color: 'var(--text-secondary)' }}>
                    Electrical services for businesses, ski lodges, retail, and hospitality properties.
                  </p>

                  <div style={{ marginBottom: 'var(--space-lg)' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: 'var(--space-sm)', color: 'var(--electric-blue)' }}>
                      Specialist Services:
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                      <li>🏔️ Ski Lodge & Accommodation</li>
                      <li>🏪 Retail & Hospitality</li>
                      <li>☀️ Commercial Solar</li>
                      <li>⚙️ 3-Phase Power & Switchboards</li>
                    </ul>
                  </div>

                  <div style={{ marginBottom: 'var(--space-lg)' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: 'var(--space-sm)', color: 'var(--electric-blue)' }}>
                      Compliance Services:
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                      <li>🚨 Emergency & Exit Lighting</li>
                      <li>✅ Test & Tag</li>
                      <li>🔌 Data & Communications</li>
                    </ul>
                  </div>

                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--electric-blue)',
                    fontWeight: '600',
                    marginTop: 'auto'
                  }}>
                    View Commercial Services →
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </section>

        <section className="reviews-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Why Choose Us</div>
              <h2>Expert Electrical Services for Alpine Properties</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-lg)', maxWidth: '1200px', margin: '0 auto' }}>
              <div className="service-card">
                <div className="service-icon">🏔️</div>
                <h3>Alpine Expertise</h3>
                <p>
                  7+ years specialized experience with Snowy Mountains electrical challenges. We understand alpine conditions, remote properties, and off-grid systems.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon">⚡</div>
                <h3>Fully Licensed & Insured</h3>
                <p>
                  NSW licensed electricians with full public liability insurance. All work meets Australian Standards and local council requirements.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon">🚨</div>
                <h3>24/7 Emergency Service</h3>
                <p>
                  Electrical emergencies don't wait for business hours. We provide 24/7 emergency callout across Jindabyne, Thredbo, Perisher and surrounding areas.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon">🔋</div>
                <h3>Solar & Battery Specialists</h3>
                <p>
                  Extensive experience with off-grid solar, battery storage (Tesla, Sonnen, BYD), and hybrid power solutions for alpine properties.
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
