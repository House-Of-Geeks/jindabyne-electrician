import Header from '../components/Header'
import Footer from '../components/Footer'
import CTASection from '../components/CTASection'
import { OrganizationSchema } from '../../components/Schema'

export const metadata = {
  title: 'About Us | Jindabyne Electrician | Licensed Electrical Services',
  description: 'Learn about our experienced team of licensed electricians serving the Snowy Mountains region. 7+ years of alpine electrical expertise.',
}

export default function AboutPage() {
  return (
    <>
      <OrganizationSchema />
      <Header />
      <main>
        <section className="hero" style={{ minHeight: '50vh' }}>
          <div className="hero-content">
            <span className="hero-badge">About Our Team</span>
            <h1>Local Electricians Who Understand Alpine Challenges</h1>
            <p className="hero-subtitle">
              Over 7 years of specialized electrical experience in the Snowy Mountains region.
              We're not just electricians—we're alpine property specialists.
            </p>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <h2 style={{ marginBottom: 'var(--space-xl)' }}>Why Choose Us?</h2>

              <div style={{ display: 'grid', gap: 'var(--space-xl)' }}>
                <div className="service-card">
                  <div className="service-icon">🏔️</div>
                  <h3>Alpine Expertise</h3>
                  <p>
                    We understand the unique electrical challenges of Snowy Mountains properties:
                    extreme weather, remote locations, off-grid systems, and the importance of
                    backup power when storms knock out the grid.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">⚡</div>
                  <h3>Fully Licensed & Insured</h3>
                  <p>
                    All work performed by licensed electricians to NSW standards. We carry full
                    public liability insurance and provide workmanship guarantees on all installations.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🔋</div>
                  <h3>Solar & Battery Specialists</h3>
                  <p>
                    Extensive experience with off-grid solar systems, battery storage installations
                    (Tesla Powerwall, Sonnen, BYD), and hybrid power solutions for alpine properties.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">📡</div>
                  <h3>Technology Forward</h3>
                  <p>
                    From Starlink installations to EV chargers, smart home systems to underfloor
                    heating—we stay current with the latest electrical technologies that matter
                    for alpine living.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🚨</div>
                  <h3>24/7 Emergency Service</h3>
                  <p>
                    Electrical emergencies don't wait for business hours. We provide 24/7 emergency
                    callout service across Jindabyne, Thredbo, Perisher and surrounding areas.
                  </p>
                </div>

                <div className="service-card">
                  <div className="service-icon">🏘️</div>
                  <h3>Local Knowledge</h3>
                  <p>
                    Based in Jindabyne, we serve the entire Snowy Mountains region. We know the
                    Essential Energy network, local building codes, and the specific needs of holiday
                    homes, ski lodges, and year-round residences.
                  </p>
                </div>
              </div>

              <div style={{ marginTop: 'var(--space-3xl)' }}>
                <h2 style={{ marginBottom: 'var(--space-lg)' }}>Our Service Areas</h2>
                <p style={{ color: 'var(--light-slate)', marginBottom: 'var(--space-lg)', fontSize: '1.125rem' }}>
                  We proudly service Jindabyne, Thredbo, Perisher, Charlotte Pass, Berridale,
                  Cooma, Crackenback, Kalkite, Dalgety, Adaminaby, East Jindabyne, and Guthega.
                </p>
              </div>

              <div style={{ marginTop: 'var(--space-3xl)' }}>
                <h2 style={{ marginBottom: 'var(--space-lg)' }}>Commitment to Quality</h2>
                <p style={{ color: 'var(--light-slate)', marginBottom: 'var(--space-md)', fontSize: '1.125rem' }}>
                  Every job we complete—from a simple smoke alarm upgrade to a complete solar and
                  battery installation—receives the same attention to detail and commitment to quality.
                </p>
                <p style={{ color: 'var(--light-slate)', fontSize: '1.125rem' }}>
                  We believe in doing the job right the first time, using quality materials, and
                  ensuring our work stands up to the harsh alpine environment for years to come.
                </p>
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
