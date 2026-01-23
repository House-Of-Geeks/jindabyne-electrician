import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import CTASection from '../../../components/CTASection'
import Link from 'next/link'

export const metadata = {
  title: 'Battery Storage Installation | Tesla Powerwall | Jindabyne & Snowy Mountains',
  description: 'Home battery storage systems for Snowy Mountains properties. Tesla Powerwall, Sonnen, BYD. Protect against power outages and reduce electricity costs.',
  keywords: ['battery storage jindabyne', 'tesla powerwall installer', 'home battery snowy mountains', 'backup power jindabyne', 'blackout protection'],
}

const batteryBrands = [
  {
    name: 'Tesla Powerwall',
    description: 'Premium 13.5kWh battery with industry-leading warranty and smart home integration.',
    capacity: '13.5kWh',
    backup: 'Whole home or partial'
  },
  {
    name: 'Sonnen Battery',
    description: 'German-engineered battery systems with long warranty and modular expansion.',
    capacity: '5-20kWh',
    backup: 'Configurable'
  },
  {
    name: 'BYD / Alpha ESS',
    description: 'Cost-effective battery storage with reliable performance and scalability.',
    capacity: '5-30kWh',
    backup: 'Modular design'
  }
]

const locations = ['Jindabyne', 'Thredbo', 'Perisher', 'Charlotte Pass', 'Berridale', 'Cooma']

export default function BatteryStoragePage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{ minHeight: '60vh' }}>
          <div className="hero-content">
            <span className="hero-badge">$10-20K+ Investment</span>
            <h1>Battery Storage Systems for Snowy Mountains Homes</h1>
            <p className="hero-subtitle">
              Never lose power again. Tesla Powerwall, Sonnen & BYD battery installations
              with backup power protection for storm-prone alpine properties.
            </p>
            <div className="hero-ctas">
              <Link href="/contact" className="cta-primary">
                Get Free Battery Quote
              </Link>
              <Link href="#systems" className="cta-secondary">
                Compare Systems →
              </Link>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Why Battery Storage?</div>
              <h2>Critical for Snowy Mountains Properties</h2>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                <div className="service-card">
                  <div className="service-icon">⚡</div>
                  <h3>Power Outages from Storms</h3>
                  <p>
                    Snow, wind, and ice regularly knock out power in alpine areas. Properties in
                    the Essential Energy network experience frequent storm-related outages.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🏔️</div>
                  <h3>Remote Properties</h3>
                  <p>
                    Many homes are at the end of long power lines, making them more vulnerable to
                    outages and slower to restore when the grid goes down.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🏠</div>
                  <h3>Holiday Home Protection</h3>
                  <p>
                    Owners want peace of mind their property won't freeze if power goes out while
                    they're away. Battery backup keeps heating and pipes protected.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">💰</div>
                  <h3>Reduce Electricity Costs</h3>
                  <p>
                    Regional NSW has high electricity rates. Load shifting with batteries reduces
                    peak usage costs and maximizes solar savings.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">☀️</div>
                  <h3>Pairs with Solar</h3>
                  <p>
                    Batteries work brilliantly with solar systems—but also sell standalone to
                    homes that want backup power without solar panels.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🏨</div>
                  <h3>Critical for Businesses</h3>
                  <p>
                    Ski lodges, accommodations, and restaurants can't afford downtime during peak
                    season. Battery backup ensures continuous operation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="systems" className="reviews-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Battery Systems</div>
              <h2>Which Battery System is Right for You?</h2>
            </div>

            <div className="services-grid">
              {batteryBrands.map((battery, idx) => (
                <div key={idx} className="service-card">
                  <h3>{battery.name}</h3>
                  <p style={{ marginBottom: 'var(--space-md)' }}>{battery.description}</p>
                  <div style={{ color: 'var(--light-slate)', fontSize: '0.875rem' }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <strong>Capacity:</strong> {battery.capacity}
                    </div>
                    <div>
                      <strong>Backup:</strong> {battery.backup}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 'var(--space-2xl)', maxWidth: '800px', margin: 'var(--space-2xl) auto 0' }}>
              <h3 style={{ marginBottom: 'var(--space-md)' }}>Battery Storage Options</h3>
              <div style={{ display: 'grid', gap: 'var(--space-md)' }}>
                <div className="area-tag" style={{ textAlign: 'left', padding: 'var(--space-lg)' }}>
                  <strong>Whole-Home Backup:</strong> Power your entire property during outages
                </div>
                <div className="area-tag" style={{ textAlign: 'left', padding: 'var(--space-lg)' }}>
                  <strong>Partial Backup (Essential Circuits):</strong> Critical systems only (heating, fridge, lights)
                </div>
                <div className="area-tag" style={{ textAlign: 'left', padding: 'var(--space-lg)' }}>
                  <strong>Off-Grid Battery Banks:</strong> Complete independence from the grid
                </div>
                <div className="area-tag" style={{ textAlign: 'left', padding: 'var(--space-lg)' }}>
                  <strong>Battery + Existing Solar:</strong> Retrofit batteries to your current solar system
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="areas-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Service Areas</div>
              <h2>Battery Storage Installation Across Snowy Mountains</h2>
            </div>

            <div className="areas-grid">
              {locations.map((location, idx) => (
                <Link
                  key={idx}
                  href={`/our-services/residential/battery-storage/${location.toLowerCase().replace(' ', '-')}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div className="area-tag">
                    Battery Storage {location}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="reviews-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">The Process</div>
              <h2>How Battery Storage Installation Works</h2>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
                {[
                  { step: '1', title: 'Free Site Assessment', desc: 'We visit your property to assess energy needs, existing solar (if any), and backup requirements.' },
                  { step: '2', title: 'System Design & Quote', desc: 'Customized battery system design with transparent pricing. No hidden costs.' },
                  { step: '3', title: 'Professional Installation', desc: 'Licensed electricians install your battery system with minimal disruption.' },
                  { step: '4', title: 'Commissioning & Handover', desc: 'System testing, app setup, and training on how to use your new battery.' },
                  { step: '5', title: 'Ongoing Support', desc: 'Warranty support and maintenance for the life of your system.' }
                ].map((item) => (
                  <div key={item.step} className="service-card" style={{ display: 'flex', gap: 'var(--space-md)' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      background: 'linear-gradient(135deg, var(--electric-blue), var(--accent-cyan))',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      flexShrink: 0
                    }}>
                      {item.step}
                    </div>
                    <div>
                      <h3 style={{ marginBottom: 'var(--space-xs)' }}>{item.title}</h3>
                      <p style={{ marginBottom: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
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
