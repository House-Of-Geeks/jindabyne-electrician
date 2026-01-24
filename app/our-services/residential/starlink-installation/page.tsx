import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import CTASection from '../../../components/CTASection'
import Link from 'next/link'
import { ServiceSchema, BreadcrumbSchema } from '../../../../components/Schema'

export const metadata = {
  title: 'Starlink Installation | Professional Setup | Jindabyne, Thredbo & Snowy Mountains',
  description: 'Professional Starlink installation for rural Snowy Mountains properties. Reliable high-speed internet where NBN can\'t reach.',
  keywords: ['starlink installation jindabyne', 'starlink installer snowy mountains', 'starlink thredbo', 'rural internet snowy mountains'],
}

const locations = ['Jindabyne', 'Thredbo', 'Perisher', 'Charlotte Pass', 'Berridale', 'Cooma']

export default function StarlinkInstallationPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://jindabyneelectrician.com.au' },
    { name: 'Services', url: 'https://jindabyneelectrician.com.au/our-services' },
    { name: 'Residential', url: 'https://jindabyneelectrician.com.au/our-services/residential' },
    { name: 'Starlink Installation', url: 'https://jindabyneelectrician.com.au/our-services/residential/starlink-installation' }
  ]

  return (
    <>
      <ServiceSchema
        serviceName="Starlink Installation"
        serviceDescription="Professional Starlink installation for rural Snowy Mountains properties. Reliable high-speed internet where NBN can't reach."
        serviceArea="Jindabyne & Snowy Mountains"
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      <main>
        <section className="hero" style={{ minHeight: '60vh' }}>
          <div className="hero-content">
            <span className="hero-badge">High Demand Service</span>
            <h1>Professional Starlink Installation for Rural Properties</h1>
            <p className="hero-subtitle">
              High-speed satellite internet for Snowy Mountains properties. Professional Starlink setup
              where NBN can't reach—reliable connectivity for remote alpine homes.
            </p>
            <div className="hero-ctas">
              <Link href="/contact" className="cta-primary">
                Book Starlink Installation
              </Link>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Why Starlink?</div>
              <h2>The Internet Solution for Rural Snowy Mountains</h2>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                <div className="service-card">
                  <div className="service-icon">📡</div>
                  <h3>No NBN Coverage</h3>
                  <p>
                    Many Snowy Mountains properties have no NBN access or only slow ADSL.
                    Starlink provides high-speed internet anywhere with clear sky view.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">⚡</div>
                  <h3>Fast Speeds</h3>
                  <p>
                    50-150+ Mbps download speeds—fast enough for streaming, video calls,
                    remote work, and multiple devices simultaneously.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🏔️</div>
                  <h3>Works in Alpine Conditions</h3>
                  <p>
                    Starlink performs well in cold temperatures and can even melt snow on the dish.
                    Perfect for year-round alpine use.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🏠</div>
                  <h3>Holiday Home Essential</h3>
                  <p>
                    Critical for Airbnb hosts and holiday rentals. Guests expect reliable
                    high-speed internet—even in remote locations.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">💼</div>
                  <h3>Remote Work Enabled</h3>
                  <p>
                    Work from your Snowy Mountains property with reliable connectivity for
                    video conferencing and file transfers.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🎯</div>
                  <h3>Simple Installation</h3>
                  <p>
                    Professional mounting, cable routing, and setup. We handle the technical
                    details—you just enjoy the internet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="reviews-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Our Service</div>
              <h2>Professional Starlink Installation</h2>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
                <div className="service-card">
                  <h3>Site Assessment</h3>
                  <p>
                    We assess your property to find the optimal mounting location with clear
                    sky view to the north. Critical for best performance.
                  </p>
                </div>

                <div className="service-card">
                  <h3>Professional Mounting</h3>
                  <p>
                    Secure roof, pole, or ground mounting designed to withstand alpine winds
                    and snow loads. All installations engineered for Snowy Mountains conditions.
                  </p>
                </div>

                <div className="service-card">
                  <h3>Cable Routing & Weatherproofing</h3>
                  <p>
                    Clean cable runs with proper weatherproofing and entry points. All exterior
                    connections sealed against moisture and alpine weather.
                  </p>
                </div>

                <div className="service-card">
                  <h3>Network Integration</h3>
                  <p>
                    Connect Starlink to your existing network or set up new WiFi coverage.
                    We can integrate mesh systems for whole-property coverage.
                  </p>
                </div>

                <div className="service-card">
                  <h3>Testing & Training</h3>
                  <p>
                    Full speed testing and handover. We show you how to use the Starlink app
                    and troubleshoot common issues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Installation Types</div>
              <h2>Mounting Options for Alpine Properties</h2>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="services-grid">
                <div className="service-card">
                  <div className="service-icon">🏠</div>
                  <h3>Roof Mount</h3>
                  <p>
                    Most common installation. Dish mounted to roof with penetrations properly
                    flashed and sealed. Ideal for clear north-facing roof access.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">📍</div>
                  <h3>Pole Mount</h3>
                  <p>
                    Freestanding pole installation for properties where roof mounting isn't ideal.
                    Pole set in concrete for stability in high winds.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🏔️</div>
                  <h3>Ground Mount</h3>
                  <p>
                    Ground-level installation with weighted or fixed base. Good for renters
                    or temporary setups. Must be positioned away from snow accumulation.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🏗️</div>
                  <h3>Eave/Wall Mount</h3>
                  <p>
                    Side of building installation when roof access is difficult or snow
                    accumulation is a concern. Custom brackets for alpine conditions.
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
              <h2>Starlink Installation Across Snowy Mountains</h2>
            </div>

            <div className="areas-grid">
              {locations.map((location, idx) => (
                <Link
                  key={idx}
                  href={`/our-services/residential/starlink-installation/${location.toLowerCase().replace(' ', '-')}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div className="area-tag">
                    Starlink Installation {location}
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
              <h2>Installation Costs</h2>
            </div>

            <div style={{ maxWidth: '700px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gap: 'var(--space-md)' }}>
                <div className="area-tag" style={{ textAlign: 'left', padding: 'var(--space-lg)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <strong>Standard Roof Installation</strong>
                    <span style={{ color: 'var(--electric-blue)' }}>$800-1,200</span>
                  </div>
                  <p style={{ color: 'var(--light-slate)', fontSize: '0.875rem', margin: 0 }}>
                    Roof mount with cable run up to 30m
                  </p>
                </div>

                <div className="area-tag" style={{ textAlign: 'left', padding: 'var(--space-lg)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <strong>Pole Mount Installation</strong>
                    <span style={{ color: 'var(--electric-blue)' }}>$1,200-1,800</span>
                  </div>
                  <p style={{ color: 'var(--light-slate)', fontSize: '0.875rem', margin: 0 }}>
                    Includes pole, concrete base, and mounting
                  </p>
                </div>

                <div className="area-tag" style={{ textAlign: 'left', padding: 'var(--space-lg)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <strong>Complex Installations</strong>
                    <span style={{ color: 'var(--electric-blue)' }}>$1,500-2,500+</span>
                  </div>
                  <p style={{ color: 'var(--light-slate)', fontSize: '0.875rem', margin: 0 }}>
                    Long cable runs, difficult access, or custom mounting solutions
                  </p>
                </div>
              </div>

              <p style={{ color: 'var(--light-slate)', marginTop: 'var(--space-lg)', textAlign: 'center' }}>
                Installation cost separate from Starlink hardware. Free site assessment and quote.
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
