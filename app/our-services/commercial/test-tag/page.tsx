import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import CTASection from '../../../components/CTASection'
import { ServiceSchema, BreadcrumbSchema } from '../../../../components/Schema'

export const metadata = {
  title: 'Test & Tag Services | Electrical Safety Testing | Jindabyne',
  description: 'Test and tag services for Jindabyne businesses. Electrical appliance safety testing for workplace compliance and safety.',
}

export default function TestTagPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://jindabyneelectrician.com.au' },
    { name: 'Services', url: 'https://jindabyneelectrician.com.au/our-services' },
    { name: 'Commercial', url: 'https://jindabyneelectrician.com.au/our-services/commercial' },
    { name: 'Test & Tag', url: 'https://jindabyneelectrician.com.au/our-services/commercial/test-tag' }
  ]

  return (
    <>
      <ServiceSchema
        serviceName="Test & Tag Services"
        serviceDescription="Professional test and tag services for Jindabyne businesses. Electrical appliance safety testing for workplace compliance and insurance requirements. Testing for construction sites, accommodation facilities, and commercial equipment."
        serviceArea="Jindabyne & Snowy Mountains"
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      <main>
        <section className="hero" style={{ minHeight: '60vh' }}>
          <div className="hero-content">
            <span className="hero-badge">Workplace Safety</span>
            <h1>Test & Tag Services</h1>
            <p className="hero-subtitle">
              Professional test and tag services for Jindabyne businesses. Electrical appliance
              safety testing for workplace compliance and insurance requirements.
            </p>
            <div className="hero-ctas">
              <Link href="/contact" className="cta-primary">
                Get Testing Quote
              </Link>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div className="section-header">
              <h2>Test & Tag Services</h2>
              <p className="section-subtitle">
                Electrical safety testing for portable appliances and equipment
              </p>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="services-grid">
                <div className="service-card">
                  <div className="service-icon">🔌</div>
                  <h3>Portable Appliance Testing</h3>
                  <p>Visual inspection and electrical testing of all portable equipment. Ensures appliances are safe to use in the workplace.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🏢</div>
                  <h3>Commercial & Office Equipment</h3>
                  <p>Computers, printers, monitors, kettles, microwaves, and all office appliances tested and tagged.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🍽️</div>
                  <h3>Hospitality & Kitchen Equipment</h3>
                  <p>Commercial kitchen appliances, coffee machines, fridges, and catering equipment testing.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🏨</div>
                  <h3>Accommodation Facilities</h3>
                  <p>Testing for ski lodges and hotels. Guest room appliances, common area equipment, and staff facilities.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🔧</div>
                  <h3>Power Tools & Equipment</h3>
                  <p>Construction tools, maintenance equipment, and portable machinery testing for tradespeople and contractors.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🏗️</div>
                  <h3>Construction Sites</h3>
                  <p>All portable equipment on construction sites requires regular testing. Essential for site safety and compliance.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">📋</div>
                  <h3>Compliance Records</h3>
                  <p>Full testing records provided with color-coded tags. Documentation for WH&S audits and insurance.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🔁</div>
                  <h3>Scheduled Testing Programs</h3>
                  <p>Regular testing schedules based on equipment type and environment. We manage your ongoing compliance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="reviews-section">
          <div className="section-container">
            <div className="section-header">
              <h2>Why Test & Tag is Required</h2>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
                <div className="service-card">
                  <h3>WH&S Legal Requirements</h3>
                  <p>NSW Work Health & Safety legislation requires employers to ensure electrical equipment is safe. Regular testing demonstrates compliance.</p>
                </div>

                <div className="service-card">
                  <h3>Insurance Requirements</h3>
                  <p>Many business insurance policies require current test and tag compliance. Protect your business from liability.</p>
                </div>

                <div className="service-card">
                  <h3>Workplace Safety</h3>
                  <p>Faulty electrical equipment causes workplace injuries and fires. Testing identifies hazards before accidents occur.</p>
                </div>

                <div className="service-card">
                  <h3>Construction & Trade Requirements</h3>
                  <p>All construction sites require test and tag compliance. Head contractors enforce strict testing requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div style={{ maxWidth: '700px', margin: '0 auto' }}>
              <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>Testing Intervals</h2>

              <div style={{ display: 'grid', gap: 'var(--space-md)' }}>
                <div className="service-card">
                  <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Construction Sites & Hostile Environments</strong>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>
                    3 months - Equipment subject to flexing, moisture, or harsh conditions
                  </p>
                </div>

                <div className="service-card">
                  <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Commercial & Industrial</strong>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>
                    12 months - General commercial and industrial equipment
                  </p>
                </div>

                <div className="service-card">
                  <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Office & Low-Risk Environments</strong>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>
                    5 years - Office equipment in low-risk environments (computers, printers)
                  </p>
                </div>

                <div className="service-card">
                  <strong style={{ display: 'block', marginBottom: '0.5rem' }}>New Equipment</strong>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>
                    Test and tag before first use, then follow regular intervals based on environment
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
