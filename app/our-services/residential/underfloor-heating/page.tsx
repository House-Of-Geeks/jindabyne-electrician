import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import CTASection from '../../../components/CTASection'

export const metadata = {
  title: 'Underfloor Heating Installation | Electric Floor Heating | Jindabyne',
  description: 'Electric underfloor heating installation for alpine homes. Premium comfort for Jindabyne winters with energy-efficient heated floors.',
}

export default function UnderfloorHeatingPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{ minHeight: '60vh' }}>
          <div className="hero-content">
            <span className="hero-badge">Alpine Specialist</span>
            <h1>Underfloor Heating for Alpine Homes</h1>
            <p className="hero-subtitle">
              Electric underfloor heating installation for Snowy Mountains properties.
              Luxurious warmth for cold Jindabyne winters with energy-efficient electric heating systems.
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
              <h2>Why Underfloor Heating in the Snowy Mountains?</h2>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="services-grid">
                <div className="service-card">
                  <div className="service-icon">🔥</div>
                  <h3>Perfect for Alpine Winters</h3>
                  <p>Underfloor heating provides consistent, even warmth throughout alpine homes—ideal for cold Jindabyne temperatures.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">💎</div>
                  <h3>Luxury Comfort</h3>
                  <p>Warm tiles and floors are a premium feature for ski lodges, holiday homes, and year-round residences.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">⚡</div>
                  <h3>Energy Efficient</h3>
                  <p>Modern electric underfloor heating systems are efficient and can be zoned for different areas of your home.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">❄️</div>
                  <h3>No Cold Floors</h3>
                  <p>Step onto warm tiles instead of cold floors. Essential comfort for alpine properties in winter.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🏠</div>
                  <h3>Space Saving</h3>
                  <p>No radiators or wall heaters required. Underfloor heating frees up wall space and provides invisible comfort.</p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🎛️</div>
                  <h3>Smart Thermostats</h3>
                  <p>Zone control with programmable thermostats. Heat only the rooms you're using when you need it.</p>
                </div>
              </div>

              <div style={{ marginTop: 'var(--space-3xl)', textAlign: 'center' }}>
                <h3 style={{ marginBottom: 'var(--space-lg)' }}>Perfect For:</h3>
                <div className="areas-grid">
                  <div className="area-tag">Bathrooms</div>
                  <div className="area-tag">Kitchens</div>
                  <div className="area-tag">Living Areas</div>
                  <div className="area-tag">Bedrooms</div>
                  <div className="area-tag">Entries & Hallways</div>
                  <div className="area-tag">Whole Home</div>
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
