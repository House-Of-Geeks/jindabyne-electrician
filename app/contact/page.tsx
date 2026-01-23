import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

export const metadata = {
  title: 'Contact Us | Get Free Quote | Jindabyne Electrician',
  description: 'Contact Jindabyne Electrician for a free quote. Call now for electrical services, solar installation, battery storage, and emergency electrical.',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{ minHeight: '50vh' }}>
          <div className="hero-content">
            <span className="hero-badge">Get In Touch</span>
            <h1>Request a Free Quote</h1>
            <p className="hero-subtitle">
              Fill out the form below and we'll get back to you within 24 hours with a free quote for your electrical project.
            </p>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-2xl)' }}>
              {/* Contact Form */}
              <div>
                <h2 style={{ marginBottom: 'var(--space-lg)' }}>Request a Quote</h2>
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div>
                <h2 style={{ marginBottom: 'var(--space-lg)' }}>Contact Information</h2>

                <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
                  <div className="service-card">
                    <div className="service-icon">📧</div>
                    <h3>Email</h3>
                    <p style={{ marginBottom: 0 }}>
                      <a href="mailto:info@jindabyneelectrician.com.au" style={{ color: 'var(--electric-blue)', textDecoration: 'none' }}>
                        info@jindabyneelectrician.com.au
                      </a>
                    </p>
                  </div>

                  <div className="service-card">
                    <div className="service-icon">📍</div>
                    <h3>Service Areas</h3>
                    <p style={{ marginBottom: 0 }}>
                      Jindabyne, Thredbo, Perisher, Charlotte Pass, Berridale, Cooma & surrounding Snowy Mountains region
                    </p>
                  </div>

                  <div className="service-card">
                    <div className="service-icon">⏰</div>
                    <h3>Hours</h3>
                    <p style={{ marginBottom: '0.5rem' }}>
                      <strong>Standard Hours:</strong><br />
                      Monday - Friday: 7:00 AM - 5:00 PM<br />
                      Saturday: 8:00 AM - 2:00 PM
                    </p>
                    <p style={{ marginBottom: 0, color: 'var(--amber-glow)' }}>
                      <strong>24/7 Emergency Service Available</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 'var(--space-3xl)', textAlign: 'center' }}>
              <h2 style={{ marginBottom: 'var(--space-lg)' }}>What to Expect</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-lg)', maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: 'var(--space-sm)' }}>1️⃣</div>
                  <h3 style={{ marginBottom: 'var(--space-xs)' }}>Contact Us</h3>
                  <p style={{ color: 'var(--light-slate)' }}>Call or submit the form with your project details</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: 'var(--space-sm)' }}>2️⃣</div>
                  <h3 style={{ marginBottom: 'var(--space-xs)' }}>Free Assessment</h3>
                  <p style={{ color: 'var(--light-slate)' }}>We assess your needs and provide transparent pricing</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: 'var(--space-sm)' }}>3️⃣</div>
                  <h3 style={{ marginBottom: 'var(--space-xs)' }}>Quality Work</h3>
                  <p style={{ color: 'var(--light-slate)' }}>Licensed electricians complete your job to the highest standard</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
