import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Privacy Policy | Jindabyne Electrician',
  description: 'Privacy policy for Jindabyne Electrician. How we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  const lastUpdated = 'January 2026'

  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{ minHeight: '40vh' }}>
          <div className="hero-content">
            <h1>Privacy Policy</h1>
            <p className="hero-subtitle">
              How we collect, use, and protect your personal information
            </p>
            <p style={{ color: 'var(--light-slate)', marginTop: 'var(--space-md)' }}>
              Last updated: {lastUpdated}
            </p>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>

              <div className="service-card">
                <h2>Introduction</h2>
                <p>
                  Jindabyne Electrician ("we", "us", or "our") is committed to protecting your privacy.
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your
                  information when you visit our website or use our services.
                </p>
                <p style={{ marginTop: 'var(--space-md)' }}>
                  We comply with the Australian Privacy Principles contained in the Privacy Act 1988 (Cth)
                  and are committed to protecting your personal information.
                </p>
              </div>

              <div className="service-card">
                <h2>Information We Collect</h2>
                <h3 style={{ fontSize: '1.125rem', marginTop: 'var(--space-lg)' }}>Personal Information</h3>
                <p>
                  When you contact us or request services, we may collect:
                </p>
                <ul style={{ paddingLeft: '1.25rem', marginTop: 'var(--space-sm)' }}>
                  <li>Name and contact details (email address, phone number)</li>
                  <li>Property address and service location</li>
                  <li>Details about your electrical service requirements</li>
                  <li>Payment and billing information</li>
                  <li>Any other information you choose to provide</li>
                </ul>

                <h3 style={{ fontSize: '1.125rem', marginTop: 'var(--space-lg)' }}>Automatically Collected Information</h3>
                <p>
                  When you visit our website, we may automatically collect:
                </p>
                <ul style={{ paddingLeft: '1.25rem', marginTop: 'var(--space-sm)' }}>
                  <li>IP address and browser type</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website or search terms</li>
                  <li>Device information and operating system</li>
                </ul>
              </div>

              <div className="service-card">
                <h2>How We Use Your Information</h2>
                <p>
                  We use the information we collect to:
                </p>
                <ul style={{ paddingLeft: '1.25rem', marginTop: 'var(--space-sm)' }}>
                  <li>Provide electrical services and respond to your inquiries</li>
                  <li>Process bookings and service requests</li>
                  <li>Send quotes, invoices, and service-related communications</li>
                  <li>Improve our website and service offerings</li>
                  <li>Comply with legal obligations and safety requirements</li>
                  <li>Maintain records for warranty and compliance purposes</li>
                  <li>Send occasional updates about our services (you may opt out at any time)</li>
                </ul>
              </div>

              <div className="service-card">
                <h2>How We Share Your Information</h2>
                <p>
                  We do not sell, trade, or rent your personal information to third parties.
                  We may share your information only in the following circumstances:
                </p>
                <ul style={{ paddingLeft: '1.25rem', marginTop: 'var(--space-sm)' }}>
                  <li><strong>Service Providers:</strong> With trusted contractors or suppliers who assist in delivering our services</li>
                  <li><strong>Compliance Bodies:</strong> With Essential Energy, NSW Fair Trading, or other regulatory authorities when required for electrical compliance</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                  <li><strong>Business Transfers:</strong> In connection with any merger, sale, or transfer of our business</li>
                </ul>
              </div>

              <div className="service-card">
                <h2>Cookies and Tracking Technologies</h2>
                <p>
                  Our website may use cookies and similar tracking technologies to improve your
                  browsing experience. Cookies are small data files stored on your device.
                </p>
                <h3 style={{ fontSize: '1.125rem', marginTop: 'var(--space-lg)' }}>Types of Cookies We Use:</h3>
                <ul style={{ paddingLeft: '1.25rem', marginTop: 'var(--space-sm)' }}>
                  <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                </ul>
                <p style={{ marginTop: 'var(--space-md)' }}>
                  You can control cookies through your browser settings. However, disabling cookies
                  may affect some website functionality.
                </p>
              </div>

              <div className="service-card">
                <h2>Data Security</h2>
                <p>
                  We implement appropriate technical and organizational security measures to protect
                  your personal information from unauthorized access, disclosure, alteration, or destruction.
                </p>
                <p style={{ marginTop: 'var(--space-md)' }}>
                  These measures include:
                </p>
                <ul style={{ paddingLeft: '1.25rem', marginTop: 'var(--space-sm)' }}>
                  <li>Secure SSL/TLS encryption for data transmission</li>
                  <li>Secure storage of customer records</li>
                  <li>Limited access to personal information (employees only)</li>
                  <li>Regular security assessments and updates</li>
                </ul>
                <p style={{ marginTop: 'var(--space-md)' }}>
                  While we strive to protect your information, no internet transmission is 100% secure.
                  We cannot guarantee absolute security of information transmitted through our website.
                </p>
              </div>

              <div className="service-card">
                <h2>Data Retention</h2>
                <p>
                  We retain your personal information only for as long as necessary to fulfill the
                  purposes outlined in this Privacy Policy, unless a longer retention period is
                  required by law.
                </p>
                <p style={{ marginTop: 'var(--space-md)' }}>
                  For electrical work records, we maintain documentation for at least 7 years to
                  comply with warranty obligations and NSW electrical licensing requirements.
                </p>
              </div>

              <div className="service-card">
                <h2>Your Privacy Rights</h2>
                <p>
                  Under Australian privacy law, you have the right to:
                </p>
                <ul style={{ paddingLeft: '1.25rem', marginTop: 'var(--space-sm)' }}>
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                  <li><strong>Complaints:</strong> Lodge a complaint about how we handle your personal information</li>
                </ul>
                <p style={{ marginTop: 'var(--space-md)' }}>
                  To exercise these rights, please contact us using the details below.
                </p>
              </div>

              <div className="service-card">
                <h2>Third-Party Websites</h2>
                <p>
                  Our website may contain links to third-party websites (such as Essential Energy,
                  solar panel manufacturers, or industry associations). We are not responsible for
                  the privacy practices or content of these external sites.
                </p>
                <p style={{ marginTop: 'var(--space-md)' }}>
                  We encourage you to review the privacy policies of any third-party websites you visit.
                </p>
              </div>

              <div className="service-card">
                <h2>Children's Privacy</h2>
                <p>
                  Our services are not directed to individuals under the age of 18. We do not
                  knowingly collect personal information from children. If you believe we have
                  inadvertently collected information from a child, please contact us immediately.
                </p>
              </div>

              <div className="service-card">
                <h2>Email Communications</h2>
                <p>
                  If you provide your email address, we may send you:
                </p>
                <ul style={{ paddingLeft: '1.25rem', marginTop: 'var(--space-sm)' }}>
                  <li>Service-related communications (quotes, invoices, appointment confirmations)</li>
                  <li>Occasional updates about our services or special offers</li>
                  <li>Important safety or compliance information</li>
                </ul>
                <p style={{ marginTop: 'var(--space-md)' }}>
                  You can unsubscribe from marketing emails at any time by clicking the "unsubscribe"
                  link at the bottom of our emails or by contacting us directly.
                </p>
              </div>

              <div className="service-card">
                <h2>Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our
                  practices or legal requirements. We will notify you of any material changes by
                  posting the updated policy on this page with a new "Last Updated" date.
                </p>
                <p style={{ marginTop: 'var(--space-md)' }}>
                  We encourage you to review this Privacy Policy periodically to stay informed
                  about how we protect your information.
                </p>
              </div>

              <div className="service-card">
                <h2>Contact Us</h2>
                <p>
                  If you have questions, concerns, or requests regarding this Privacy Policy or
                  how we handle your personal information, please contact us:
                </p>
                <div style={{ marginTop: 'var(--space-md)', paddingLeft: 'var(--space-md)', borderLeft: '3px solid var(--electric-blue)' }}>
                  <p style={{ marginBottom: 'var(--space-sm)' }}>
                    <strong>Jindabyne Electrician</strong>
                  </p>
                  <p style={{ marginBottom: 'var(--space-sm)' }}>
                    Email: <a href="mailto:info@jindabyneelectrician.com.au" style={{ color: 'var(--electric-blue)' }}>info@jindabyneelectrician.com.au</a>
                  </p>
                  <p>
                    Serving Jindabyne, Thredbo, Perisher, and the Snowy Mountains region
                  </p>
                </div>
              </div>

              <div className="service-card">
                <h2>Complaints</h2>
                <p>
                  If you believe we have breached the Australian Privacy Principles, you can lodge
                  a complaint with us. We will investigate and respond to your complaint within a
                  reasonable timeframe.
                </p>
                <p style={{ marginTop: 'var(--space-md)' }}>
                  If you are not satisfied with our response, you may lodge a complaint with the
                  Office of the Australian Information Commissioner (OAIC):
                </p>
                <div style={{ marginTop: 'var(--space-md)', paddingLeft: 'var(--space-md)', borderLeft: '3px solid var(--electric-blue)' }}>
                  <p style={{ marginBottom: 'var(--space-sm)' }}>
                    <strong>Office of the Australian Information Commissioner</strong>
                  </p>
                  <p style={{ marginBottom: 'var(--space-sm)' }}>
                    Phone: 1300 363 992
                  </p>
                  <p style={{ marginBottom: 'var(--space-sm)' }}>
                    Email: enquiries@oaic.gov.au
                  </p>
                  <p>
                    Website: <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--electric-blue)' }}>www.oaic.gov.au</a>
                  </p>
                </div>
              </div>

              <div style={{ marginTop: 'var(--space-2xl)', textAlign: 'center' }}>
                <Link href="/contact" className="cta-primary">
                  Contact Us
                </Link>
                <Link href="/" style={{ marginLeft: 'var(--space-md)', color: 'var(--electric-blue)', textDecoration: 'none' }}>
                  ← Back to Home
                </Link>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
