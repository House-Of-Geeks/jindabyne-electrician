import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-column">
            <div className="footer-logo">
              <div className="logo-icon">⚡</div>
              <span>JINDABYNE ELECTRICIAN</span>
            </div>
            <p style={{ color: 'var(--ice-white)', marginTop: 'var(--space-md)', lineHeight: '1.6' }}>
              Licensed electrical contractors serving the Snowy Mountains region.
              Specialists in solar, battery storage, and alpine electrical systems.
            </p>
          </div>

          {/* Residential Services */}
          <div className="footer-column">
            <h4 className="footer-heading">Residential Services</h4>
            <ul className="footer-links">
              <li><Link href="/our-services/residential/solar-battery">Solar Installation</Link></li>
              <li><Link href="/our-services/residential/battery-storage">Battery Storage</Link></li>
              <li><Link href="/our-services/residential/starlink-installation">Starlink Installation</Link></li>
              <li><Link href="/our-services/residential/underfloor-heating">Underfloor Heating</Link></li>
              <li><Link href="/our-services/residential/ev-charger-installation">EV Chargers</Link></li>
              <li><Link href="/our-services/residential/property-management-real-estate">Property Management</Link></li>
              <li><Link href="/our-services/residential">View All Services</Link></li>
            </ul>
          </div>

          {/* Commercial Services */}
          <div className="footer-column">
            <h4 className="footer-heading">Commercial Services</h4>
            <ul className="footer-links">
              <li><Link href="/our-services/commercial/ski-lodge-accommodation">Ski Lodges</Link></li>
              <li><Link href="/our-services/commercial/retail-hospitality">Retail & Hospitality</Link></li>
              <li><Link href="/our-services/commercial/commercial-solar">Commercial Solar</Link></li>
              <li><Link href="/our-services/commercial/commercial-switchboards">Switchboards</Link></li>
              <li><Link href="/our-services/commercial/data-communications">Data & Comms</Link></li>
              <li><Link href="/our-services/commercial/test-tag">Test & Tag</Link></li>
              <li><Link href="/our-services/commercial">View All Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <strong>Email:</strong><br />
                <a href="mailto:info@jindabyneelectrician.com.au" style={{ color: 'var(--electric-blue)', textDecoration: 'none' }}>
                  info@jindabyneelectrician.com.au
                </a>
              </li>
              <li>
                <strong>Hours:</strong><br />
                Mon-Fri: 7:00 AM - 5:00 PM<br />
                Sat: 8:00 AM - 2:00 PM<br />
                <span style={{ color: 'var(--amber-glow)', fontWeight: '600' }}>24/7 Emergency Service</span>
              </li>
            </ul>
            <Link href="/contact" className="footer-cta">
              Request Free Quote →
            </Link>
          </div>
        </div>

        {/* Service Areas Section */}
        <div style={{
          marginTop: 'var(--space-2xl)',
          paddingTop: 'var(--space-2xl)',
          borderTop: '1px solid rgba(100, 116, 139, 0.2)'
        }}>
          <h4 className="footer-heading" style={{ marginBottom: 'var(--space-lg)' }}>Service Areas</h4>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--space-md)',
            maxWidth: '1000px'
          }}>
            <ul className="footer-links">
              <li><Link href="/service-areas/jindabyne">Jindabyne</Link></li>
              <li><Link href="/service-areas/thredbo">Thredbo</Link></li>
              <li><Link href="/service-areas/perisher">Perisher</Link></li>
            </ul>
            <ul className="footer-links">
              <li><Link href="/service-areas/crackenback">Crackenback</Link></li>
              <li><Link href="/service-areas/berridale">Berridale</Link></li>
              <li><Link href="/service-areas/cooma">Cooma</Link></li>
            </ul>
            <ul className="footer-links">
              <li><Link href="/service-areas/charlotte-pass">Charlotte Pass</Link></li>
              <li><Link href="/service-areas/kalkite">Kalkite</Link></li>
              <li><Link href="/service-areas/dalgety">Dalgety</Link></li>
            </ul>
            <ul className="footer-links">
              <li><Link href="/service-areas/adaminaby">Adaminaby</Link></li>
              <li><Link href="/service-areas/east-jindabyne">East Jindabyne</Link></li>
              <li><Link href="/service-areas/guthega">Guthega</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Jindabyne Electrician. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link href="/about">About</Link>
              <Link href="/our-services/residential">Residential</Link>
              <Link href="/our-services/commercial">Commercial</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/sitemap.xml">Sitemap</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
