import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import CTASection from '../../../components/CTASection'
import { BreadcrumbSchema } from '../../../../components/Schema'

export const metadata = {
  title: 'Smoke Alarm Installation | NSW Compliance | Jindabyne Electrician',
  description: 'Smoke alarm installation and upgrades for NSW compliance. Photoelectric smoke detectors for Jindabyne & Snowy Mountains properties.',
  alternates: {
    canonical: '/our-services/residential/smoke-alarm-installation',
  },
}

const breadcrumbs = [
  { name: 'Home', url: 'https://www.jindabyneelectrician.com.au' },
  { name: 'Services', url: 'https://www.jindabyneelectrician.com.au/our-services' },
  { name: 'Residential', url: 'https://www.jindabyneelectrician.com.au/our-services/residential' },
  { name: 'Smoke Alarms', url: 'https://www.jindabyneelectrician.com.au/our-services/residential/smoke-alarm-installation' }
]

export default function SmokeAlarmPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      <main>
        <section className="hero" style={{ minHeight: '60vh' }}>
          <div className="hero-content">
            <span className="hero-badge">Compliance Required</span>
            <h1>Smoke Alarm Installation & Upgrades</h1>
            <p className="hero-subtitle">
              NSW compliant smoke detector installation for Jindabyne & Snowy Mountains properties.
              Photoelectric alarms, interconnected systems, and compliance upgrades.
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
              <h2>NSW Smoke Alarm Requirements</h2>
              <p className="section-subtitle">
                All NSW homes must have working smoke alarms. We ensure your property meets all requirements.
              </p>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="services-grid">
                <div className="service-card">
                  <div className="service-icon">🔔</div>
                  <h3>Photoelectric Alarms Required</h3>
                  <p>NSW requires photoelectric smoke alarms (not ionization). We install compliant detectors throughout your property.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🔗</div>
                  <h3>Interconnected Systems</h3>
                  <p>All alarms must be interconnected so when one sounds, they all sound. Hardwired or wireless options available.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">📍</div>
                  <h3>Correct Placement</h3>
                  <p>Alarms in every bedroom, hallways, and each storey. We ensure compliant placement for maximum protection.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">⚡</div>
                  <h3>Hardwired Installation</h3>
                  <p>We install mains-powered alarms with battery backup for reliability during power outages—critical for alpine homes.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🏠</div>
                  <h3>Holiday Home Compliance</h3>
                  <p>Rental properties and holiday homes must meet strict smoke alarm requirements. We handle full compliance upgrades.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">✅</div>
                  <h3>Compliance Certificate</h3>
                  <p>Full documentation and compliance certificate provided for property sales, rentals, and insurance.</p>
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
