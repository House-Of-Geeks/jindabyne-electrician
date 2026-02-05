import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import CTASection from '../../../components/CTASection'
import { BreadcrumbSchema } from '../../../../components/Schema'

export const metadata = {
  title: 'Data Cabling & WiFi Installation | Jindabyne Electrician',
  description: 'Professional data cabling, network points, and WiFi solutions for Snowy Mountains properties. Reliable internet connectivity for holiday homes and businesses.',
  alternates: {
    canonical: '/our-services/residential/data-cabling-wifi',
  },
}

const breadcrumbs = [
  { name: 'Home', url: 'https://www.jindabyneelectrician.com.au' },
  { name: 'Services', url: 'https://www.jindabyneelectrician.com.au/our-services' },
  { name: 'Residential', url: 'https://www.jindabyneelectrician.com.au/our-services/residential' },
  { name: 'Data & WiFi', url: 'https://www.jindabyneelectrician.com.au/our-services/residential/data-cabling-wifi' }
]

export default function DataCablingPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      <main>
        <section className="hero" style={{ minHeight: '60vh' }}>
          <div className="hero-content">
            <span className="hero-badge">Network Solutions</span>
            <h1>Data Cabling & WiFi Installation</h1>
            <p className="hero-subtitle">
              Professional data cabling and network solutions for Jindabyne & Snowy Mountains properties.
              Reliable, high-speed connectivity for modern homes and businesses.
            </p>
            <div className="hero-ctas">
              <Link href="/contact" className="cta-primary">
                Get Network Quote
              </Link>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Why Professional Data Cabling Matters</div>
              <h2>Reliable Connectivity for Alpine Properties</h2>
            </div>

            <div className="services-grid">
              <div className="service-card">
                <h3>Holiday Home Essential</h3>
                <p>
                  Airbnb and Stayz guests expect fast, reliable WiFi throughout the property.
                  Professional data cabling ensures coverage in every room.
                </p>
              </div>

              <div className="service-card">
                <h3>Remote Work Ready</h3>
                <p>
                  With more people working remotely from alpine areas, solid network infrastructure
                  is essential for video calls, large file uploads, and cloud access.
                </p>
              </div>

              <div className="service-card">
                <h3>Smart Home Foundation</h3>
                <p>
                  Structured data cabling provides the backbone for smart lighting, security cameras,
                  thermostats, and entertainment systems.
                </p>
              </div>

              <div className="service-card">
                <h3>Future-Proof Investment</h3>
                <p>
                  Cat6 and Cat6a cabling supports gigabit speeds and beyond. Professional installation
                  adds lasting value to your property.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section" style={{ background: 'rgba(14, 165, 233, 0.03)' }}>
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Data Cabling Services</div>
              <h2>Structured Network Installation</h2>
            </div>

            <div className="services-grid">
              <div className="service-card">
                <h3>Cat6 & Cat6a Cable Installation</h3>
                <p>
                  <strong>High-speed ethernet cabling:</strong>
                </p>
                <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
                  <li>Cat6: Up to 1Gbps (1000Mbps)</li>
                  <li>Cat6a: Up to 10Gbps support</li>
                  <li>Professional termination and testing</li>
                  <li>Wall-mounted data points (RJ45)</li>
                  <li>Concealed or surface-mounted runs</li>
                  <li>Labeled for easy identification</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Network Patch Panels</h3>
                <p>
                  <strong>Central connection point:</strong>
                </p>
                <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
                  <li>12, 24, or 48-port patch panels</li>
                  <li>Organized cable management</li>
                  <li>Mounted in garage or utility room</li>
                  <li>Easy to add/move connections</li>
                  <li>Professional labeling system</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Network Switches & Routers</h3>
                <p>
                  <strong>Complete network infrastructure:</strong>
                </p>
                <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
                  <li>Gigabit ethernet switches</li>
                  <li>PoE switches for cameras/WiFi APs</li>
                  <li>Router configuration and setup</li>
                  <li>Network rack mounting</li>
                  <li>Cable management and labeling</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Phone Points (RJ11)</h3>
                <p>
                  <strong>Landline and VoIP connections:</strong>
                </p>
                <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
                  <li>RJ11 phone sockets</li>
                  <li>Connection to NBN box</li>
                  <li>VoIP network phone cabling</li>
                  <li>Repair existing phone points</li>
                  <li>Additional extensions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">WiFi Solutions</div>
              <h2>Complete Property Coverage</h2>
            </div>

            <div className="services-grid">
              <div className="service-card">
                <h3>Mesh WiFi Systems</h3>
                <p>
                  <strong>Seamless coverage throughout property:</strong>
                </p>
                <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
                  <li>Multiple access points for large homes</li>
                  <li>Single network name (SSID)</li>
                  <li>Automatic device handoff</li>
                  <li>Coverage up to 500m² per system</li>
                  <li>Smart app control</li>
                  <li>Guest network capability</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Commercial-Grade WiFi</h3>
                <p>
                  <strong>For lodges and businesses:</strong>
                </p>
                <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
                  <li>UniFi or Cisco access points</li>
                  <li>PoE powered (no wall plugs needed)</li>
                  <li>Central management dashboard</li>
                  <li>Guest portal and voucher system</li>
                  <li>Bandwidth limiting per user</li>
                  <li>Usage analytics</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Outdoor WiFi Extension</h3>
                <p>
                  <strong>Extend coverage to decks and yards:</strong>
                </p>
                <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
                  <li>Weatherproof outdoor access points</li>
                  <li>Deck and patio coverage</li>
                  <li>Hot tub and BBQ area WiFi</li>
                  <li>Outdoor security camera connectivity</li>
                  <li>Shed and garage coverage</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>WiFi Optimization</h3>
                <p>
                  <strong>Improve existing WiFi performance:</strong>
                </p>
                <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
                  <li>WiFi site survey and analysis</li>
                  <li>Channel optimization</li>
                  <li>Access point repositioning</li>
                  <li>Interference troubleshooting</li>
                  <li>Speed testing and verification</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section" style={{ background: 'rgba(14, 165, 233, 0.03)' }}>
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Perfect Pairing</div>
              <h2>Data Cabling + Starlink Installation</h2>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="service-card">
                <h3>Complete Internet Solution</h3>
                <p>
                  Many Snowy Mountains properties benefit from combining Starlink satellite internet
                  with professional internal data cabling:
                </p>

                <div style={{ marginTop: 'var(--space-lg)' }}>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                    What We Provide:
                  </h4>
                  <ul style={{ paddingLeft: '1.25rem' }}>
                    <li><strong>Starlink installation:</strong> Roof or pole mounting, weatherproofing, power connection</li>
                    <li><strong>Internal data cabling:</strong> Cat6 runs from Starlink router to each room</li>
                    <li><strong>Mesh WiFi system:</strong> Multiple access points for complete coverage</li>
                    <li><strong>Network rack:</strong> Clean, organized central connection point</li>
                    <li><strong>PoE integration:</strong> Power security cameras directly from network</li>
                  </ul>
                </div>

                <div style={{ marginTop: 'var(--space-lg)' }}>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                    Benefits:
                  </h4>
                  <ul style={{ paddingLeft: '1.25rem' }}>
                    <li>Fast, reliable WiFi in every room (no dead zones)</li>
                    <li>Wired connections for smart TVs and gaming</li>
                    <li>Single contractor for complete solution</li>
                    <li>Professional installation and testing</li>
                    <li>Future-proof for network upgrades</li>
                  </ul>
                </div>

                <p style={{ marginTop: 'var(--space-lg)', fontWeight: 600 }}>
                  Combined Starlink + Data Cabling package from $3,500
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Typical Installations</div>
              <h2>Common Setup Examples</h2>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="services-grid">
                <div className="service-card">
                  <h3>3-Bedroom Home</h3>
                  <ul style={{ paddingLeft: '1.25rem' }}>
                    <li>6x Cat6 data points (3 bedrooms, lounge, study, garage)</li>
                    <li>12-port patch panel</li>
                    <li>8-port gigabit switch</li>
                    <li>3-node mesh WiFi system</li>
                    <li>2x phone points</li>
                  </ul>
                  <p style={{ marginTop: 'var(--space-md)', fontWeight: 600 }}>
                    $2,200 - $2,800 installed
                  </p>
                </div>

                <div className="service-card">
                  <h3>4-Bedroom Holiday Home</h3>
                  <ul style={{ paddingLeft: '1.25rem' }}>
                    <li>10x Cat6 data points (throughout property)</li>
                    <li>24-port patch panel</li>
                    <li>16-port PoE switch</li>
                    <li>4-node mesh WiFi system</li>
                    <li>Outdoor WiFi for deck</li>
                    <li>4x security camera cable runs</li>
                  </ul>
                  <p style={{ marginTop: 'var(--space-md)', fontWeight: 600 }}>
                    $3,800 - $4,500 installed
                  </p>
                </div>

                <div className="service-card">
                  <h3>Ski Lodge (10+ Rooms)</h3>
                  <ul style={{ paddingLeft: '1.25rem' }}>
                    <li>Data point in each guest room</li>
                    <li>48-port patch panel</li>
                    <li>24-port PoE managed switch</li>
                    <li>Commercial WiFi access points</li>
                    <li>Guest WiFi portal</li>
                    <li>Network rack with UPS backup</li>
                  </ul>
                  <p style={{ marginTop: 'var(--space-md)', fontWeight: 600 }}>
                    Custom quote - typically $8,000+
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section" style={{ background: 'rgba(14, 165, 233, 0.03)' }}>
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Common Questions</div>
              <h2>Data Cabling FAQs</h2>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
                <div className="service-card">
                  <h3>Why not just use WiFi everywhere?</h3>
                  <p>
                    Wired connections are faster, more reliable, and don't suffer interference.
                    Perfect for smart TVs, gaming, NAS storage, and security cameras. WiFi is great
                    for mobile devices, but wired backbone ensures best performance.
                  </p>
                </div>

                <div className="service-card">
                  <h3>Can you run cables through existing walls?</h3>
                  <p>
                    Yes, we fish cables through wall cavities when possible. For solid walls or
                    difficult runs, we use surface-mounted trunking or external cable routes.
                  </p>
                </div>

                <div className="service-card">
                  <h3>Will data cabling interfere with NBN or Starlink?</h3>
                  <p>
                    No. Internal data cabling connects to your NBN modem or Starlink router,
                    extending the network throughout your property. We ensure proper setup and testing.
                  </p>
                </div>

                <div className="service-card">
                  <h3>How long does installation take?</h3>
                  <p>
                    Typical 6-8 data point installation takes 1 full day. Larger properties or
                    complex runs may take 2 days. We minimize mess and clean up thoroughly.
                  </p>
                </div>

                <div className="service-card">
                  <h3>Can I add more data points later?</h3>
                  <p>
                    Yes. We install patch panels with spare capacity, making it easy to add
                    additional data points in the future without major rework.
                  </p>
                </div>

                <div className="service-card">
                  <h3>Do you provide network equipment?</h3>
                  <p>
                    Yes, we can supply and install routers, switches, WiFi systems, and all necessary
                    hardware. Or we can work with equipment you've already purchased.
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
