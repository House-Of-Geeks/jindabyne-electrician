import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import CTASection from '../../../components/CTASection'
import { BreadcrumbSchema } from '../../../../components/Schema'

export const metadata = {
  title: 'Data & Communications Cabling | Network Installation | Jindabyne',
  description: 'Commercial data and communications cabling for Jindabyne businesses. Cat6 networking, WiFi infrastructure, and phone systems.',
  alternates: {
    canonical: '/our-services/commercial/data-communications',
  },
}

const breadcrumbs = [
  { name: 'Home', url: 'https://www.jindabyneelectrician.com.au' },
  { name: 'Services', url: 'https://www.jindabyneelectrician.com.au/our-services' },
  { name: 'Commercial', url: 'https://www.jindabyneelectrician.com.au/our-services/commercial' },
  { name: 'Data & Communications', url: 'https://www.jindabyneelectrician.com.au/our-services/commercial/data-communications' }
]

export default function DataCommunicationsPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      <main>
        <section className="hero" style={{ minHeight: '60vh' }}>
          <div className="hero-content">
            <span className="hero-badge">Commercial IT</span>
            <h1>Data & Communications</h1>
            <p className="hero-subtitle">
              Commercial data cabling and communications infrastructure for Jindabyne businesses.
              Cat6 networking, WiFi access points, phone systems, and structured cabling.
            </p>
            <div className="hero-ctas">
              <Link href="/contact" className="cta-primary">
                Get Quote
              </Link>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div className="section-header">
              <h2>Communications Infrastructure</h2>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="services-grid">
                <div className="service-card">
                  <div className="service-icon">🌐</div>
                  <h3>Cat6 Network Cabling</h3>
                  <p>Structured Cat6/Cat6a cabling for commercial networks. Gigabit speeds throughout your business premises.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">📡</div>
                  <h3>WiFi Infrastructure</h3>
                  <p>Commercial WiFi installations with multiple access points. Power and data for ceiling-mounted or wall-mounted APs.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">☎️</div>
                  <h3>Phone System Cabling</h3>
                  <p>VoIP phone systems and traditional phone cabling. Network infrastructure for modern business communications.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">📹</div>
                  <h3>Security Camera Systems</h3>
                  <p>IP camera cabling and PoE (Power over Ethernet) installations. Data and power through single Cat6 cable.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🔌</div>
                  <h3>PoE Network Switches</h3>
                  <p>Power and data points for PoE switches and patch panels. Central network equipment installations.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">📊</div>
                  <h3>Server & Comms Rooms</h3>
                  <p>Dedicated power for server racks, UPS systems, and network equipment. Proper cooling and circuit protection.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🏨</div>
                  <h3>Guest WiFi for Accommodation</h3>
                  <p>Commercial-grade WiFi systems for ski lodges and hotels. Coverage throughout guest rooms and common areas.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">📱</div>
                  <h3>EFTPOS & POS Systems</h3>
                  <p>Network cabling for retail POS systems and payment terminals. Reliable connections for business operations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="reviews-section">
          <div className="section-container">
            <div className="section-header">
              <h2>Why Professional Data Cabling Matters</h2>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
                <div className="service-card">
                  <h3>Reliable Network Performance</h3>
                  <p>Properly installed Cat6 cabling ensures consistent gigabit speeds. No dropouts or intermittent connections.</p>
                </div>

                <div className="service-card">
                  <h3>Future-Proof Infrastructure</h3>
                  <p>Cat6 and Cat6a support current and future networking needs. Investment that lasts 15+ years.</p>
                </div>

                <div className="service-card">
                  <h3>Clean Professional Installation</h3>
                  <p>Concealed cabling, proper cable management, and neat patch panels. Professional appearance for your business.</p>
                </div>

                <div className="service-card">
                  <h3>Licensed Electrical Work</h3>
                  <p>As licensed electricians, we handle both data cabling and electrical power requirements in one service.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ marginBottom: 'var(--space-lg)' }}>Common Business Cabling Projects</h2>

              <div style={{ display: 'grid', gap: 'var(--space-md)', textAlign: 'left' }}>
                <div className="service-card">
                  <h3>Office Fit-Outs</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: '0.5rem 0 0 0' }}>
                    Network points at each desk, WiFi APs, phone system cabling, and server room setup.
                  </p>
                </div>

                <div className="service-card">
                  <h3>Retail & Hospitality</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: '0.5rem 0 0 0' }}>
                    POS terminals, back-office networking, security cameras, and customer WiFi infrastructure.
                  </p>
                </div>

                <div className="service-card">
                  <h3>Accommodation Facilities</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: '0.5rem 0 0 0' }}>
                    WiFi throughout guest rooms and common areas, security systems, and VoIP phone systems.
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
