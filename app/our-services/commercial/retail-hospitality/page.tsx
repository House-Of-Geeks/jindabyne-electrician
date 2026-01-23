import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import CTASection from '../../../components/CTASection'

export const metadata = {
  title: 'Retail & Hospitality Electrical | Cafes, Shops | Jindabyne',
  description: 'Commercial electrical for retail shops, cafes, restaurants & hospitality in Jindabyne. Fit-outs, lighting, and commercial kitchen installations.',
}

export default function RetailHospitalityPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{ minHeight: '60vh' }}>
          <div className="hero-content">
            <span className="hero-badge">Commercial Electrical</span>
            <h1>Retail & Hospitality Electrical</h1>
            <p className="hero-subtitle">
              Commercial electrical services for retail shops, cafes, restaurants, and hospitality
              businesses in Jindabyne & Snowy Mountains. Complete fit-outs and maintenance.
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
              <h2>Commercial Electrical Solutions</h2>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="services-grid">
                <div className="service-card">
                  <div className="service-icon">🏪</div>
                  <h3>Shop & Retail Fit-Outs</h3>
                  <p>Complete electrical fit-outs for retail spaces. Display lighting, power points, security, and payment terminal infrastructure.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">☕</div>
                  <h3>Cafe & Restaurant Electrical</h3>
                  <p>Commercial kitchen power, espresso machine installations, refrigeration circuits, and dining area lighting.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">💡</div>
                  <h3>Feature & Display Lighting</h3>
                  <p>Track lighting, spotlights, LED strips, and architectural lighting to showcase your products and create ambiance.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">❄️</div>
                  <h3>Commercial Refrigeration Power</h3>
                  <p>Dedicated circuits for commercial fridges, freezers, and cold rooms. Reliable power for food safety.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">📱</div>
                  <h3>EFTPOS & POS Systems</h3>
                  <p>Power and data points for payment terminals, point-of-sale systems, and back-office IT equipment.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🔐</div>
                  <h3>Security & Surveillance</h3>
                  <p>Power for security cameras, alarm systems, and access control. Protect your business and stock.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🚪</div>
                  <h3>Signage & Shopfront Lighting</h3>
                  <p>Illuminated business signage, window displays, and exterior lighting. Attract customers day and night.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🚨</div>
                  <h3>Emergency & Exit Lighting</h3>
                  <p>Compliant emergency lighting and exit signs for commercial premises. NSW Building Code requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="reviews-section">
          <div className="section-container">
            <div className="section-header">
              <h2>Commercial Electrical Expertise</h2>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
                <div className="service-card">
                  <h3>Fast Turnaround</h3>
                  <p>We understand business timelines. Quick fit-out completions and after-hours work to minimize disruption.</p>
                </div>

                <div className="service-card">
                  <h3>Code Compliant</h3>
                  <p>All commercial electrical work meets NSW standards. Compliance certificates provided for council and insurance.</p>
                </div>

                <div className="service-card">
                  <h3>Ongoing Maintenance</h3>
                  <p>Regular electrical maintenance contracts available. Keep your business running smoothly and safely.</p>
                </div>

                <div className="service-card">
                  <h3>Local Business Understanding</h3>
                  <p>We understand Jindabyne's seasonal business cycle and the unique needs of Snowy Mountains tourism businesses.</p>
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
