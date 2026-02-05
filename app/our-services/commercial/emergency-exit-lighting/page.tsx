import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import CTASection from '../../../components/CTASection'
import { BreadcrumbSchema } from '../../../../components/Schema'

export const metadata = {
  title: 'Emergency & Exit Lighting | Compliance | Jindabyne Electrician',
  description: 'Emergency and exit lighting installation for commercial buildings in Jindabyne. NSW Building Code compliant emergency lighting systems.',
  alternates: {
    canonical: '/our-services/commercial/emergency-exit-lighting',
  },
}

const breadcrumbs = [
  { name: 'Home', url: 'https://www.jindabyneelectrician.com.au' },
  { name: 'Services', url: 'https://www.jindabyneelectrician.com.au/our-services' },
  { name: 'Commercial', url: 'https://www.jindabyneelectrician.com.au/our-services/commercial' },
  { name: 'Emergency & Exit Lighting', url: 'https://www.jindabyneelectrician.com.au/our-services/commercial/emergency-exit-lighting' }
]

export default function EmergencyExitLightingPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      <main>
        <section className="hero" style={{ minHeight: '60vh' }}>
          <div className="hero-content">
            <span className="hero-badge">Compliance Required</span>
            <h1>Emergency & Exit Lighting</h1>
            <p className="hero-subtitle">
              Emergency and exit lighting installation for commercial buildings in Jindabyne.
              NSW Building Code compliant systems for safe evacuation during power outages.
            </p>
            <div className="hero-ctas">
              <Link href="/contact" className="cta-primary">
                Get Compliance Quote
              </Link>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div className="section-header">
              <h2>Emergency Lighting Requirements</h2>
              <p className="section-subtitle">
                NSW Building Code requires emergency lighting in all commercial buildings
              </p>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="services-grid">
                <div className="service-card">
                  <div className="service-icon">🚨</div>
                  <h3>Exit Sign Installation</h3>
                  <p>Illuminated exit signs showing evacuation routes. LED exit signs with 3-hour battery backup for power failures.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">💡</div>
                  <h3>Emergency Lighting</h3>
                  <p>Emergency lights for stairwells, corridors, and exits. Automatic activation during power outages.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🔋</div>
                  <h3>Battery Backup Systems</h3>
                  <p>Self-contained battery emergency lights and centralized battery systems. Minimum 90-minute operation required.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🏢</div>
                  <h3>Commercial Building Compliance</h3>
                  <p>Full emergency lighting for retail, offices, accommodation, and hospitality. Meet NSW Building Code requirements.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">✅</div>
                  <h3>Testing & Maintenance</h3>
                  <p>Regular six-monthly testing and maintenance required by law. We provide ongoing compliance testing services.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">📋</div>
                  <h3>Compliance Certification</h3>
                  <p>Full documentation and compliance certificates for council, insurance, and building certification.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="reviews-section">
          <div className="section-container">
            <div className="section-header">
              <h2>Who Needs Emergency Lighting?</h2>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
                <div className="service-card">
                  <h3>Ski Lodges & Accommodation</h3>
                  <p>All commercial accommodation requires emergency lighting. Exit paths, stairwells, and common areas must be lit during evacuations.</p>
                </div>

                <div className="service-card">
                  <h3>Retail Shops & Cafes</h3>
                  <p>Commercial retail and hospitality premises need exit signs and emergency lighting for customer and staff safety.</p>
                </div>

                <div className="service-card">
                  <h3>Office Buildings</h3>
                  <p>Multi-tenancy offices and commercial buildings require emergency lighting throughout corridors, stairwells, and exits.</p>
                </div>

                <div className="service-card">
                  <h3>Public Buildings</h3>
                  <p>Any building open to the public needs emergency lighting for safe evacuation during power failures or fires.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div style={{ maxWidth: '700px', margin: '0 auto' }}>
              <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>Emergency Lighting Compliance</h2>

              <div style={{ display: 'grid', gap: 'var(--space-md)' }}>
                <div className="service-card">
                  <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Installation Standards</strong>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>
                    Must comply with AS/NZS 2293 (Emergency evacuation lighting). Proper placement, illumination levels, and signage.
                  </p>
                </div>

                <div className="service-card">
                  <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Testing Requirements</strong>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>
                    Six-monthly testing required. Test battery operation, illumination levels, and sign visibility.
                  </p>
                </div>

                <div className="service-card">
                  <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Documentation</strong>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>
                    Test records must be maintained. Required for insurance, council inspections, and building certification.
                  </p>
                </div>

                <div className="service-card">
                  <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Penalties for Non-Compliance</strong>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>
                    Fines and liability issues for non-compliant emergency lighting. Essential for business operation and insurance.
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
