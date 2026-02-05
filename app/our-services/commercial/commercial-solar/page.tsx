import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import CTASection from '../../../components/CTASection'
import { ServiceSchema, BreadcrumbSchema } from '../../../../components/Schema'

export const metadata = {
  title: 'Commercial Solar Systems | Business Solar | Jindabyne Electrician',
  description: 'Commercial solar installations for Jindabyne businesses. Reduce operating costs with solar power for retail, hospitality, and accommodation.',
  alternates: {
    canonical: '/our-services/commercial/commercial-solar',
  },
}

export default function CommercialSolarPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://www.jindabyneelectrician.com.au' },
    { name: 'Services', url: 'https://www.jindabyneelectrician.com.au/our-services' },
    { name: 'Commercial', url: 'https://www.jindabyneelectrician.com.au/our-services/commercial' },
    { name: 'Commercial Solar', url: 'https://www.jindabyneelectrician.com.au/our-services/commercial/commercial-solar' }
  ]

  return (
    <>
      <ServiceSchema
        serviceName="Commercial Solar Systems"
        serviceDescription="Commercial solar installations for Jindabyne and Snowy Mountains businesses. Reduce operating costs with solar power for retail, hospitality, and accommodation. 20kW to 100kW+ systems with commercial battery storage options."
        serviceArea="Jindabyne & Snowy Mountains"
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      <main>
        <section className="hero" style={{ minHeight: '60vh' }}>
          <div className="hero-content">
            <span className="hero-badge">Commercial Solar</span>
            <h1>Commercial Solar Systems</h1>
            <p className="hero-subtitle">
              Commercial solar installations for Jindabyne & Snowy Mountains businesses.
              Reduce operating costs and future-proof your business with clean energy.
            </p>
            <div className="hero-ctas">
              <Link href="/contact" className="cta-primary">
                Get Solar Quote
              </Link>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div className="section-header">
              <h2>Business Solar Solutions</h2>
              <p className="section-subtitle">
                Reduce electricity costs and increase property value with commercial solar
              </p>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="services-grid">
                <div className="service-card">
                  <div className="service-icon">🏢</div>
                  <h3>Commercial Rooftop Solar</h3>
                  <p>Large-scale solar installations for commercial buildings. 20kW to 100kW+ systems for maximum savings.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🏨</div>
                  <h3>Accommodation Solar</h3>
                  <p>Solar systems for ski lodges, hotels, and accommodation providers. Offset high energy costs from heating and hot water.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🍽️</div>
                  <h3>Hospitality & Retail Solar</h3>
                  <p>Solar for cafes, restaurants, and shops. Reduce operating costs and demonstrate environmental commitment.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🔋</div>
                  <h3>Solar + Battery Storage</h3>
                  <p>Commercial battery systems for energy independence. Store solar power for peak demand periods and backup.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">⚡</div>
                  <h3>Three-Phase Solar</h3>
                  <p>Commercial three-phase solar installations. Proper sizing and configuration for business electrical systems.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">📊</div>
                  <h3>Energy Monitoring</h3>
                  <p>Commercial solar monitoring systems. Track generation, consumption, and savings in real-time.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="reviews-section">
          <div className="section-container">
            <div className="section-header">
              <h2>Why Businesses Choose Solar</h2>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
                <div className="service-card">
                  <h3>Reduce Operating Costs</h3>
                  <p>Solar can reduce commercial electricity bills by 50-80%. ROI typically 3-7 years with significant long-term savings.</p>
                </div>

                <div className="service-card">
                  <h3>Commercial Incentives</h3>
                  <p>Small-scale Technology Certificates (STCs) and instant asset write-off schemes reduce upfront costs for businesses.</p>
                </div>

                <div className="service-card">
                  <h3>Energy Independence</h3>
                  <p>Reduce exposure to rising electricity prices. Solar + battery provides backup power during outages.</p>
                </div>

                <div className="service-card">
                  <h3>Environmental Leadership</h3>
                  <p>Demonstrate sustainability to customers and guests. Solar is increasingly expected by environmentally-conscious tourists.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ marginBottom: 'var(--space-lg)' }}>System Sizes & Costs</h2>

              <div style={{ display: 'grid', gap: 'var(--space-md)', textAlign: 'left' }}>
                <div className="service-card">
                  <h3>20-30kW System</h3>
                  <p style={{ color: 'var(--text-secondary)', margin: '0.5rem 0' }}>
                    Small commercial or large accommodation. $25,000-$40,000 installed.
                  </p>
                </div>

                <div className="service-card">
                  <h3>50-75kW System</h3>
                  <p style={{ color: 'var(--text-secondary)', margin: '0.5rem 0' }}>
                    Medium commercial buildings. $60,000-$95,000 installed.
                  </p>
                </div>

                <div className="service-card">
                  <h3>100kW+ System</h3>
                  <p style={{ color: 'var(--text-secondary)', margin: '0.5rem 0' }}>
                    Large commercial or industrial. Custom quotes based on consumption and roof space.
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
