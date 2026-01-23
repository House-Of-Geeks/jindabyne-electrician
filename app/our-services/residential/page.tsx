import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CTASection from '../../components/CTASection'

export const metadata = {
  title: 'Residential Electrical Services | Jindabyne Electrician | Snowy Mountains',
  description: 'Residential electrical services for Jindabyne & Snowy Mountains homes. Solar, battery storage, Starlink, EV chargers, underfloor heating & more.',
}

const residentialServices = [
  {
    slug: 'lighting-power',
    icon: 'bulb',
    title: 'General Electrical Services',
    description: 'LED lighting installations, power point additions, electrical repairs, and maintenance for your alpine home.',
    tag: 'Essential Services'
  },
  {
    slug: 'switchboard-upgrades',
    icon: 'power',
    title: 'Switchboard Upgrades',
    description: 'Upgrade old fuse boxes to modern switchboards with safety switches and circuit breakers. Essential for alpine property safety.',
    tag: 'Safety Critical'
  },
  {
    slug: 'smoke-alarm-installation',
    icon: 'alarm',
    title: 'Smoke Alarm Installation',
    description: 'NSW compliant smoke detector installations and upgrades. Protect your family and meet legal requirements.',
    tag: 'Compliance Required'
  },
  {
    slug: 'starlink-installation',
    icon: 'signal',
    title: 'Starlink Installation',
    description: 'Professional Starlink setup for rural Snowy Mountains properties. High-speed internet where NBN can\'t reach.',
    tag: 'High Demand'
  },
  {
    slug: 'data-cabling-wifi',
    icon: 'network',
    title: 'Data Cabling & WiFi',
    description: 'Cat6 data cabling, network points, and mesh WiFi systems. Reliable connectivity throughout your property.',
    tag: 'Modern Essential'
  },
  {
    slug: 'underfloor-heating',
    icon: 'heating',
    title: 'Underfloor Heating',
    description: 'Electric underfloor heating installation for alpine homes. Premium comfort during Jindabyne winters.',
    tag: 'Alpine Specialist'
  },
  {
    slug: 'split-system-heating-cooling',
    icon: 'hvac',
    title: 'Split System Heating & Cooling',
    description: 'Licensed split system installation and servicing. Efficient heating for cold winters and cooling for summer.',
    tag: 'Climate Control'
  },
  {
    slug: 'ev-charger-installation',
    icon: 'charging',
    title: 'EV Charger Installation',
    description: 'Tesla and universal EV charger installation. Pairs perfectly with solar for sustainable transport.',
    tag: 'Growing Category'
  },
  {
    slug: 'security-systems-lighting',
    icon: 'security',
    title: 'Security Cameras & Lighting',
    description: 'Security camera systems and motion-activated lighting. Remote monitoring for holiday homes.',
    tag: 'Holiday Home Essential'
  },
  {
    slug: 'solar-battery',
    icon: 'solar',
    title: 'Solar & Battery Systems',
    description: 'Complete solar installations with optional battery storage. Off-grid and grid-tied systems for alpine properties.',
    tag: '$8-15K+ Value',
    subServices: ['Rooftop Solar', 'Off-Grid Solar', 'Solar + EV Charger Packages']
  },
  {
    slug: 'battery-storage',
    icon: 'battery',
    title: 'Battery Storage',
    description: 'Tesla Powerwall, Sonnen & BYD battery systems. Protect against storm outages and reduce energy costs.',
    tag: '$10-20K+ Value',
    subServices: ['Home Battery Systems', 'Backup Power Solutions', 'Off-Grid Battery Systems']
  },
  {
    slug: 'emergency-electrical',
    icon: 'emergency',
    title: 'Emergency Electrical',
    description: '24/7 emergency electrical service for Snowy Mountains properties. Fast response when you need it most.',
    tag: '24/7 Available'
  }
]

export default function ResidentialServicesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{ minHeight: '50vh' }}>
          <div className="hero-content">
            <span className="hero-badge">Residential Services</span>
            <h1>Electrical Services for Snowy Mountains Homes</h1>
            <p className="hero-subtitle">
              From essential repairs to premium solar and battery installations—specialist
              electrical services designed for alpine living.
            </p>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">What We Offer</div>
              <h2>Complete Residential Electrical Solutions</h2>
              <p className="section-subtitle">
                Click any service to learn more about pricing, process, and how we can help your property
              </p>
            </div>

            <div className="services-grid">
              {residentialServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/our-services/residential/${service.slug}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="service-card">
                    <div className="service-icon">{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    {service.subServices && (
                      <ul style={{
                        color: 'var(--light-slate)',
                        marginBottom: 'var(--space-md)',
                        paddingLeft: '1.25rem',
                        fontSize: '0.875rem'
                      }}>
                        {service.subServices.map((sub, idx) => (
                          <li key={idx}>{sub}</li>
                        ))}
                      </ul>
                    )}
                    <span className="service-tag">{service.tag}</span>
                  </div>
                </Link>
              ))}
            </div>

            <div style={{ marginTop: 'var(--space-3xl)', textAlign: 'center' }}>
              <h2 style={{ marginBottom: 'var(--space-lg)' }}>Why Choose Our Residential Services?</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-lg)', maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: 'var(--space-sm)' }}>🏔️</div>
                  <h3 style={{ marginBottom: 'var(--space-xs)' }}>Alpine Expertise</h3>
                  <p style={{ color: 'var(--light-slate)' }}>Specialized knowledge of Snowy Mountains electrical challenges</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: 'var(--space-sm)' }}>⚡</div>
                  <h3 style={{ marginBottom: 'var(--space-xs)' }}>Licensed & Insured</h3>
                  <p style={{ color: 'var(--light-slate)' }}>Fully qualified electricians with NSW licensing and insurance</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: 'var(--space-sm)' }}>🛠️</div>
                  <h3 style={{ marginBottom: 'var(--space-xs)' }}>Quality Workmanship</h3>
                  <p style={{ color: 'var(--light-slate)' }}>Built to last in harsh alpine conditions</p>
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
