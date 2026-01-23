import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import CTASection from '../../../components/CTASection'
import Link from 'next/link'

export const metadata = {
  title: 'Solar Panel Installation | Off-Grid Solar Systems | Jindabyne & Snowy Mountains',
  description: 'Solar installation for alpine properties. Grid-tied and off-grid solar systems designed for Snowy Mountains homes and holiday properties.',
  keywords: ['solar installation jindabyne', 'off-grid solar snowy mountains', 'solar panels thredbo', 'alpine solar systems'],
}

const solarTypes = [
  {
    title: 'Rooftop Solar (Grid-Tied)',
    description: 'Connect to the Essential Energy grid. Feed excess power back and reduce your electricity bills.',
    bestFor: 'Year-round homes wanting to offset energy costs'
  },
  {
    title: 'Off-Grid Solar',
    description: 'Complete independence from the grid. Perfect for remote alpine properties without grid connection.',
    bestFor: 'Remote cabins, holiday homes, properties beyond grid reach'
  },
  {
    title: 'Solar + Battery Packages',
    description: 'Combined solar and battery storage for maximum energy independence and backup power.',
    bestFor: 'Properties wanting both cost savings and blackout protection'
  },
  {
    title: 'Solar + EV Charger',
    description: 'Solar system paired with electric vehicle charging for sustainable transport.',
    bestFor: 'EV owners wanting to charge from clean energy'
  }
]

const locations = ['Jindabyne', 'Thredbo', 'Perisher', 'Charlotte Pass', 'Berridale', 'Cooma']

export default function SolarBatteryPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{ minHeight: '60vh' }}>
          <div className="hero-content">
            <span className="hero-badge">$8-15K+ Investment</span>
            <h1>Solar Installation for Snowy Mountains Properties</h1>
            <p className="hero-subtitle">
              Grid-tied and off-grid solar systems designed for alpine conditions. High-performance solar for holiday homes and remote properties.
            </p>
            <div className="hero-ctas">
              <Link href="/contact" className="cta-primary">
                Get Free Solar Quote
              </Link>
              <Link href="#types" className="cta-secondary">
                Explore Solar Options →
              </Link>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Why Solar in the Snowy Mountains?</div>
              <h2>Perfect Conditions for Solar Energy</h2>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                <div className="service-card">
                  <div className="service-icon">💰</div>
                  <h3>High Electricity Costs</h3>
                  <p>
                    Essential Energy network prices are significantly higher than metro Sydney.
                    Solar provides faster payback in regional NSW.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">☀️</div>
                  <h3>Excellent Solar Resource</h3>
                  <p>
                    High altitude and clear alpine air means excellent solar generation—even in winter.
                    Cold temps improve panel efficiency.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🏠</div>
                  <h3>Holiday Home Demand</h3>
                  <p>
                    Growing demand for off-grid and grid-tied solar on holiday homes. Reduce ongoing
                    electricity costs when property is vacant.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🏔️</div>
                  <h3>Remote Properties</h3>
                  <p>
                    Many properties are beyond viable grid connection. Off-grid solar provides
                    reliable power where the grid can't reach.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🌱</div>
                  <h3>Sustainability Focus</h3>
                  <p>
                    Snowy Mountains property owners value environmental sustainability. Solar reduces
                    carbon footprint while saving money.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🔋</div>
                  <h3>Pairs with Batteries</h3>
                  <p>
                    Solar + battery storage provides energy independence and protection from grid
                    outages during alpine storms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="types" className="reviews-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Solar System Types</div>
              <h2>Which Solar System is Right for You?</h2>
            </div>

            <div className="services-grid">
              {solarTypes.map((type, idx) => (
                <div key={idx} className="service-card">
                  <div className="service-icon">☀️</div>
                  <h3>{type.title}</h3>
                  <p style={{ marginBottom: 'var(--space-md)' }}>{type.description}</p>
                  <div style={{
                    color: 'var(--amber-glow)',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    background: 'rgba(245, 158, 11, 0.1)',
                    padding: 'var(--space-sm)',
                    borderRadius: '8px'
                  }}>
                    <strong>Best for:</strong> {type.bestFor}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Our Expertise</div>
              <h2>Alpine Solar Specialists</h2>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
                <div className="service-card">
                  <h3>Snow Load Engineering</h3>
                  <p>
                    Solar panels in the Snowy Mountains must withstand significant snow loads.
                    We design mounting systems specifically for alpine conditions.
                  </p>
                </div>

                <div className="service-card">
                  <h3>Cold Weather Performance</h3>
                  <p>
                    Contrary to popular belief, solar panels work excellently in cold alpine
                    temperatures—often better than in hot climates.
                  </p>
                </div>

                <div className="service-card">
                  <h3>Seasonal Optimization</h3>
                  <p>
                    We optimize panel angle and placement for year-round generation, accounting
                    for winter sun angles and summer peak demand.
                  </p>
                </div>

                <div className="service-card">
                  <h3>Off-Grid Expertise</h3>
                  <p>
                    Extensive experience sizing off-grid systems with battery banks and backup
                    generators for complete energy independence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="areas-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Service Areas</div>
              <h2>Solar Installation Across Snowy Mountains</h2>
            </div>

            <div className="areas-grid">
              {locations.map((location, idx) => (
                <Link
                  key={idx}
                  href={`/our-services/residential/solar-battery/${location.toLowerCase().replace(' ', '-')}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div className="area-tag">
                    Solar Installation {location}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="reviews-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Pricing</div>
              <h2>Solar System Investment</h2>
            </div>

            <div style={{ maxWidth: '700px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gap: 'var(--space-md)' }}>
                <div className="area-tag" style={{ textAlign: 'left', padding: 'var(--space-lg)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <strong>5kW Grid-Tied System</strong>
                    <span style={{ color: 'var(--electric-blue)' }}>$8,000-10,000</span>
                  </div>
                  <p style={{ color: 'var(--light-slate)', fontSize: '0.875rem', margin: 0 }}>
                    Standard residential system with grid connection
                  </p>
                </div>

                <div className="area-tag" style={{ textAlign: 'left', padding: 'var(--space-lg)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <strong>8kW Grid-Tied System</strong>
                    <span style={{ color: 'var(--electric-blue)' }}>$12,000-15,000</span>
                  </div>
                  <p style={{ color: 'var(--light-slate)', fontSize: '0.875rem', margin: 0 }}>
                    Larger homes or properties with higher energy use
                  </p>
                </div>

                <div className="area-tag" style={{ textAlign: 'left', padding: 'var(--space-lg)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <strong>Off-Grid Solar + Battery</strong>
                    <span style={{ color: 'var(--electric-blue)' }}>$20,000-35,000+</span>
                  </div>
                  <p style={{ color: 'var(--light-slate)', fontSize: '0.875rem', margin: 0 }}>
                    Complete off-grid system with battery bank and backup generator
                  </p>
                </div>

                <div className="area-tag" style={{ textAlign: 'left', padding: 'var(--space-lg)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <strong>Solar + Powerwall 3</strong>
                    <span style={{ color: 'var(--electric-blue)' }}>$20,000-25,000</span>
                  </div>
                  <p style={{ color: 'var(--light-slate)', fontSize: '0.875rem', margin: 0 }}>
                    Grid-tied solar with Tesla battery backup
                  </p>
                </div>
              </div>

              <p style={{ color: 'var(--light-slate)', marginTop: 'var(--space-lg)', textAlign: 'center' }}>
                All prices include design, equipment, installation, and commissioning. Government rebates may apply.
              </p>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
