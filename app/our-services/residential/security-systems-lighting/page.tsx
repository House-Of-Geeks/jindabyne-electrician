import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import CTASection from '../../../components/CTASection'

export const metadata = {
  title: 'Security Cameras & Lighting Installation | Jindabyne Electrician',
  description: 'Security camera and lighting installation for Snowy Mountains properties. Remote monitoring, motion-activated lighting, and visual deterrents for holiday homes.',
  alternates: {
    canonical: '/our-services/residential/security-systems-lighting',
  },
}

export default function SecuritySystemsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{ minHeight: '60vh' }}>
          <div className="hero-content">
            <span className="hero-badge">Property Security</span>
            <h1>Security Cameras & Lighting Installation</h1>
            <p className="hero-subtitle">
              Professional security camera and lighting systems for Jindabyne & Snowy Mountains properties.
              Monitor your holiday home remotely and deter break-ins with smart security solutions.
            </p>
            <div className="hero-ctas">
              <Link href="/contact" className="cta-primary">
                Get Security Quote
              </Link>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Why Security Matters in Alpine Areas</div>
              <h2>Protect Your Snowy Mountains Property</h2>
            </div>

            <div className="services-grid">
              <div className="service-card">
                <h3>Holiday Home Protection</h3>
                <p>
                  With many Snowy Mountains properties vacant for months, security systems provide
                  peace of mind. Monitor your investment remotely and receive instant alerts.
                </p>
              </div>

              <div className="service-card">
                <h3>Visual Deterrent</h3>
                <p>
                  Visible cameras and motion-activated lighting deter potential break-ins. Properties
                  with security systems are significantly less likely to be targeted.
                </p>
              </div>

              <div className="service-card">
                <h3>Remote Monitoring</h3>
                <p>
                  View live camera feeds from anywhere using your smartphone. Check on your property
                  during snow storms, verify maintenance visits, or monitor guests.
                </p>
              </div>

              <div className="service-card">
                <h3>Insurance Benefits</h3>
                <p>
                  Many insurance providers offer premium discounts for properties with security
                  systems. Can offset installation costs over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section" style={{ background: 'rgba(14, 165, 233, 0.03)' }}>
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Security Camera Systems</div>
              <h2>Complete Camera Installation</h2>
            </div>

            <div className="services-grid">
              <div className="service-card">
                <h3>IP Security Cameras</h3>
                <p>
                  <strong>High-definition network cameras:</strong>
                </p>
                <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
                  <li>1080p or 4K resolution</li>
                  <li>Night vision (up to 30m)</li>
                  <li>Weatherproof (IP66 rated)</li>
                  <li>Wide-angle lenses (90-120°)</li>
                  <li>Motion detection alerts</li>
                  <li>Two-way audio on select models</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Network Video Recorder (NVR)</h3>
                <p>
                  <strong>Local storage and remote access:</strong>
                </p>
                <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
                  <li>4, 8, or 16 channel systems</li>
                  <li>1-4TB hard drive storage</li>
                  <li>Continuous or motion recording</li>
                  <li>Remote viewing via smartphone app</li>
                  <li>Playback and export footage</li>
                  <li>Cloud backup options</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Power Over Ethernet (PoE)</h3>
                <p>
                  <strong>Single cable solution:</strong>
                </p>
                <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
                  <li>Cat6 data cabling to each camera</li>
                  <li>Power and data on one cable</li>
                  <li>Reliable in alpine conditions</li>
                  <li>No need for separate power points</li>
                  <li>Professional cable concealment</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Strategic Camera Placement</h3>
                <p>
                  <strong>Cover all entry points:</strong>
                </p>
                <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
                  <li>Front door and driveway</li>
                  <li>Rear entry and deck access</li>
                  <li>Side gates and pathways</li>
                  <li>Garage and storage areas</li>
                  <li>Overlapping coverage for blind spots</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Security Lighting</div>
              <h2>Motion-Activated & Deterrent Lighting</h2>
            </div>

            <div className="services-grid">
              <div className="service-card">
                <h3>LED Security Floodlights</h3>
                <p>
                  <strong>Motion-activated illumination:</strong>
                </p>
                <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
                  <li>20W-50W LED floodlights</li>
                  <li>Adjustable PIR motion sensors</li>
                  <li>Weatherproof (IP65 rated)</li>
                  <li>3000K-6000K color temperature</li>
                  <li>Timer and daylight sensor options</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Solar Security Lights</h3>
                <p>
                  <strong>Off-grid lighting solution:</strong>
                </p>
                <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
                  <li>Solar panel and battery powered</li>
                  <li>Perfect for remote areas</li>
                  <li>Motion-activated operation</li>
                  <li>No electrical cabling required</li>
                  <li>Works during power outages</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Pathway & Perimeter Lighting</h3>
                <p>
                  <strong>Continuous or motion-activated:</strong>
                </p>
                <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
                  <li>LED bollard lights along paths</li>
                  <li>Wall-mounted downlights</li>
                  <li>Under-eave lighting strips</li>
                  <li>Dusk-to-dawn sensors</li>
                  <li>Smart lighting control options</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Smart Lighting Integration</h3>
                <p>
                  <strong>Connected lighting control:</strong>
                </p>
                <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
                  <li>Control lights via smartphone</li>
                  <li>Schedule lights while away</li>
                  <li>Integrate with security cameras</li>
                  <li>Automated "home simulation"</li>
                  <li>Link with alarm systems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section" style={{ background: 'rgba(14, 165, 233, 0.03)' }}>
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">System Packages</div>
              <h2>Recommended Security Setups</h2>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="services-grid">
                <div className="service-card">
                  <h3>Basic Package</h3>
                  <p style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: 'var(--space-md)' }}>
                    <strong>Ideal for apartments or small properties</strong>
                  </p>
                  <ul style={{ paddingLeft: '1.25rem' }}>
                    <li>2x IP security cameras (front & rear)</li>
                    <li>4-channel NVR with 1TB storage</li>
                    <li>Cat6 cabling and PoE injector</li>
                    <li>Smartphone app setup</li>
                    <li>2x LED security floodlights</li>
                  </ul>
                  <p style={{ marginTop: 'var(--space-md)', fontWeight: 600 }}>
                    From $2,500 installed
                  </p>
                </div>

                <div className="service-card">
                  <h3>Standard Package</h3>
                  <p style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: 'var(--space-md)' }}>
                    <strong>Most popular for family homes</strong>
                  </p>
                  <ul style={{ paddingLeft: '1.25rem' }}>
                    <li>4x IP security cameras (comprehensive coverage)</li>
                    <li>8-channel NVR with 2TB storage</li>
                    <li>Professional cable concealment</li>
                    <li>Cloud backup subscription (1 year)</li>
                    <li>4x motion-activated LED floodlights</li>
                    <li>Pathway lighting (6 lights)</li>
                  </ul>
                  <p style={{ marginTop: 'var(--space-md)', fontWeight: 600 }}>
                    From $4,500 installed
                  </p>
                </div>

                <div className="service-card">
                  <h3>Premium Package</h3>
                  <p style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: 'var(--space-md)' }}>
                    <strong>Maximum protection for holiday homes</strong>
                  </p>
                  <ul style={{ paddingLeft: '1.25rem' }}>
                    <li>6-8x 4K IP security cameras</li>
                    <li>16-channel NVR with 4TB storage</li>
                    <li>Outdoor-rated PoE network switch</li>
                    <li>Battery backup (UPS) for NVR</li>
                    <li>6x smart LED security floodlights</li>
                    <li>Complete perimeter lighting</li>
                    <li>Smart home integration</li>
                    <li>Remote monitoring service setup</li>
                  </ul>
                  <p style={{ marginTop: 'var(--space-md)', fontWeight: 600 }}>
                    From $7,500 installed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Common Questions</div>
              <h2>Security System FAQs</h2>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
                <div className="service-card">
                  <h3>Can cameras work in Jindabyne's cold winters?</h3>
                  <p>
                    Yes. We install weatherproof cameras rated for -20°C to +50°C. Night vision
                    continues to work in snow and ice conditions.
                  </p>
                </div>

                <div className="service-card">
                  <h3>Do I need internet for cameras to work?</h3>
                  <p>
                    Cameras record to the local NVR without internet. However, internet (via NBN
                    or Starlink) is required for remote viewing and smartphone alerts.
                  </p>
                </div>

                <div className="service-card">
                  <h3>How long is footage stored?</h3>
                  <p>
                    Depends on camera resolution and number of cameras. Typical 4-camera system with
                    2TB storage retains 30-60 days of footage. Older footage is automatically overwritten.
                  </p>
                </div>

                <div className="service-card">
                  <h3>What happens during power outages?</h3>
                  <p>
                    Cameras stop recording when power fails. We recommend adding a UPS (battery backup)
                    for 2-4 hours of continued operation during outages.
                  </p>
                </div>

                <div className="service-card">
                  <h3>Can I access cameras while away?</h3>
                  <p>
                    Yes, via smartphone app from anywhere with internet. View live feeds, review
                    recordings, and receive motion detection alerts in real-time.
                  </p>
                </div>

                <div className="service-card">
                  <h3>Do security lights attract wildlife?</h3>
                  <p>
                    Motion-activated lights can occasionally trigger from wombats, kangaroos, or
                    wallabies. We adjust sensor sensitivity to minimize false alerts while maintaining
                    security coverage.
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
