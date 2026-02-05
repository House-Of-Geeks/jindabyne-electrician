import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import CTASection from '../../../components/CTASection'

export const metadata = {
  title: 'Property Management & Real Estate Electrical Services | Jindabyne',
  description: 'Electrical services for property managers, real estate agents, and landlords in the Snowy Mountains. Compliance certificates, inspections, and fast turnaround maintenance.',
  alternates: {
    canonical: '/our-services/residential/property-management-real-estate',
  },
}

export default function PropertyManagementPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{ minHeight: '60vh' }}>
          <div className="hero-content">
            <span className="hero-badge">Property Management</span>
            <h1>Property Management & Real Estate Electrical Services</h1>
            <p className="hero-subtitle">
              Fast, reliable electrical services for Jindabyne property managers, real estate agents,
              and landlords. Compliance certificates, inspections, and between-guest maintenance.
            </p>
            <div className="hero-ctas">
              <Link href="/contact" className="cta-primary">
                Get Quote for Property Services
              </Link>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Why Property Managers Choose Us</div>
              <h2>Specialized Services for Snowy Mountains Rental Properties</h2>
            </div>

            <div className="services-grid">
              <div className="service-card">
                <h3>Fast Response Times</h3>
                <p>
                  We understand guest turnover schedules. Fast response for urgent electrical
                  issues between bookings to keep your property income flowing.
                </p>
              </div>

              <div className="service-card">
                <h3>Compliance Expertise</h3>
                <p>
                  Up-to-date with NSW rental property electrical compliance requirements.
                  We ensure your properties meet all legal obligations.
                </p>
              </div>

              <div className="service-card">
                <h3>Property Manager Accounts</h3>
                <p>
                  Streamlined invoicing and account management for property managers with
                  multiple properties. Bulk service discounts available.
                </p>
              </div>

              <div className="service-card">
                <h3>Documentation for Agents</h3>
                <p>
                  Detailed reports and compliance certificates suitable for real estate
                  transactions, rental agreements, and body corporate records.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section" style={{ background: 'rgba(14, 165, 233, 0.03)' }}>
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Compliance & Inspections</div>
              <h2>Electrical Compliance Services</h2>
            </div>

            <div className="services-grid">
              <div className="service-card">
                <h3>Electrical Safety Certificates</h3>
                <p>
                  <strong>For rental properties and sales:</strong>
                </p>
                <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
                  <li>Electrical safety inspection reports</li>
                  <li>Compliance certificates for rental properties</li>
                  <li>Required for new tenancies in NSW</li>
                  <li>Safety switch verification</li>
                  <li>Smoke alarm compliance certification</li>
                  <li>Detailed defect reports</li>
                </ul>
                <p style={{ marginTop: 'var(--space-md)', fontWeight: 600 }}>
                  From $250 (standard 3-bedroom property)
                </p>
              </div>

              <div className="service-card">
                <h3>Pre-Purchase Electrical Inspections</h3>
                <p>
                  <strong>Buyer due diligence:</strong>
                </p>
                <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
                  <li>Comprehensive electrical system inspection</li>
                  <li>Switchboard condition assessment</li>
                  <li>Wiring and earthing evaluation</li>
                  <li>Safety hazard identification</li>
                  <li>Repair cost estimates</li>
                  <li>Detailed written report for buyers</li>
                </ul>
                <p style={{ marginTop: 'var(--space-md)', fontWeight: 600 }}>
                  From $350 (full property inspection)
                </p>
              </div>

              <div className="service-card">
                <h3>Rental Property Safety Inspections</h3>
                <p>
                  <strong>Landlord compliance obligations:</strong>
                </p>
                <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
                  <li>Mandatory safety switch compliance</li>
                  <li>Smoke alarm testing and certification</li>
                  <li>RCD (safety switch) testing</li>
                  <li>Power point and lighting checks</li>
                  <li>Hot water system safety inspection</li>
                  <li>Annual inspection programs available</li>
                </ul>
                <p style={{ marginTop: 'var(--space-md)', fontWeight: 600 }}>
                  From $200 (annual safety inspection)
                </p>
              </div>

              <div className="service-card">
                <h3>Body Corporate Compliance</h3>
                <p>
                  <strong>Strata and community title:</strong>
                </p>
                <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
                  <li>Common area electrical inspection</li>
                  <li>Emergency lighting testing (commercial)</li>
                  <li>Fire alarm system compliance</li>
                  <li>Switchboard maintenance records</li>
                  <li>Safety switch testing logs</li>
                  <li>Scheduled maintenance programs</li>
                </ul>
                <p style={{ marginTop: 'var(--space-md)', fontWeight: 600 }}>
                  Custom quotes for multi-unit properties
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Property Maintenance</div>
              <h2>Between-Guest & Ongoing Electrical Services</h2>
            </div>

            <div className="services-grid">
              <div className="service-card">
                <h3>Emergency Callout Service</h3>
                <p>
                  <strong>Fast response for urgent issues:</strong>
                </p>
                <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
                  <li>24/7 emergency electrical service</li>
                  <li>Power outage troubleshooting</li>
                  <li>Hot water system failures</li>
                  <li>Heating system breakdowns</li>
                  <li>Safety switch tripping issues</li>
                  <li>Direct billing to property manager</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Between-Guest Maintenance</h3>
                <p>
                  <strong>Quick turnaround for booking gaps:</strong>
                </p>
                <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
                  <li>Light globe and fitting replacements</li>
                  <li>Power point repairs</li>
                  <li>Smoke alarm battery replacement</li>
                  <li>Underfloor heating repairs</li>
                  <li>Kitchen appliance connections</li>
                  <li>Same-day service when possible</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Property Upgrade Services</h3>
                <p>
                  <strong>Improve rental appeal and returns:</strong>
                </p>
                <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
                  <li>LED lighting upgrades (lower power bills)</li>
                  <li>Split system heating/cooling installation</li>
                  <li>EV charger installation (premium listings)</li>
                  <li>Smart home device integration</li>
                  <li>Solar installation to offset costs</li>
                  <li>Modern switchboard upgrades</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Preventative Maintenance Programs</h3>
                <p>
                  <strong>Scheduled maintenance for multiple properties:</strong>
                </p>
                <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
                  <li>Annual safety inspections</li>
                  <li>Smoke alarm testing schedule</li>
                  <li>RCD/safety switch testing</li>
                  <li>Switchboard condition monitoring</li>
                  <li>Preventative maintenance logs</li>
                  <li>Priority callout for account holders</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section" style={{ background: 'rgba(14, 165, 233, 0.03)' }}>
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Airbnb & Holiday Rental Specialists</div>
              <h2>Electrical Services for Short-Term Rentals</h2>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="service-card">
                <h3>Why Airbnb Hosts Choose Our Services</h3>
                <p>
                  Jindabyne's short-term rental market demands reliable electrical systems and
                  fast turnaround for guest issues. We specialize in keeping holiday properties
                  operating smoothly.
                </p>

                <div style={{ marginTop: 'var(--space-lg)' }}>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                    Common Airbnb Electrical Issues We Solve:
                  </h4>
                  <ul style={{ paddingLeft: '1.25rem' }}>
                    <li><strong>Guest-reported electrical problems:</strong> Fast response during active bookings</li>
                    <li><strong>Smoke alarm compliance:</strong> NSW requires interconnected alarms in all bedrooms</li>
                    <li><strong>Heating system failures:</strong> Critical during Jindabyne winters</li>
                    <li><strong>Hot tub and spa electrical:</strong> Pump failures, safety compliance</li>
                    <li><strong>Outdoor lighting:</strong> Motion sensors, deck lighting, safety illumination</li>
                    <li><strong>WiFi and connectivity:</strong> Starlink installation, network cabling</li>
                    <li><strong>EV charger installation:</strong> Premium amenity for luxury listings</li>
                    <li><strong>Smart home integration:</strong> Smart locks, thermostats, lighting control</li>
                  </ul>
                </div>

                <div style={{ marginTop: 'var(--space-lg)' }}>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                    Property Manager Benefits:
                  </h4>
                  <ul style={{ paddingLeft: '1.25rem' }}>
                    <li>Fast response minimizes booking cancellations</li>
                    <li>Direct invoicing to owner or property manager</li>
                    <li>Detailed work reports for owner communication</li>
                    <li>Priority callout for account holders</li>
                    <li>Multi-property discounts available</li>
                    <li>Annual maintenance programs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Service Packages</div>
              <h2>Property Manager Service Programs</h2>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="services-grid">
                <div className="service-card">
                  <h3>Single Property Package</h3>
                  <p style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: 'var(--space-md)' }}>
                    <strong>Ideal for individual landlords</strong>
                  </p>
                  <ul style={{ paddingLeft: '1.25rem' }}>
                    <li>Annual electrical safety inspection</li>
                    <li>Smoke alarm compliance certification</li>
                    <li>Safety switch testing and report</li>
                    <li>Priority emergency callout</li>
                    <li>15% discount on additional work</li>
                  </ul>
                  <p style={{ marginTop: 'var(--space-md)', fontWeight: 600 }}>
                    $380/year (includes annual inspection)
                  </p>
                </div>

                <div className="service-card">
                  <h3>Portfolio Package (3-10 Properties)</h3>
                  <p style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: 'var(--space-md)' }}>
                    <strong>For property managers and multi-property owners</strong>
                  </p>
                  <ul style={{ paddingLeft: '1.25rem' }}>
                    <li>Scheduled annual inspections for all properties</li>
                    <li>Compliance certificate management</li>
                    <li>24/7 priority emergency callout</li>
                    <li>Consolidated monthly invoicing</li>
                    <li>20% discount on all maintenance work</li>
                    <li>Dedicated property manager contact</li>
                  </ul>
                  <p style={{ marginTop: 'var(--space-md)', fontWeight: 600 }}>
                    Custom quote based on portfolio size
                  </p>
                </div>

                <div className="service-card">
                  <h3>Agency/Body Corporate Package</h3>
                  <p style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: 'var(--space-md)' }}>
                    <strong>For real estate agencies and strata managers</strong>
                  </p>
                  <ul style={{ paddingLeft: '1.25rem' }}>
                    <li>Unlimited properties under management</li>
                    <li>Pre-purchase inspection services</li>
                    <li>Tenant changeover inspections</li>
                    <li>Common area electrical maintenance</li>
                    <li>Emergency & exit lighting compliance</li>
                    <li>25% discount on all services</li>
                    <li>Monthly reporting and documentation</li>
                  </ul>
                  <p style={{ marginTop: 'var(--space-md)', fontWeight: 600 }}>
                    Contact us for agency pricing
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
              <h2>Property Management FAQs</h2>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
                <div className="service-card">
                  <h3>What electrical compliance is required for rental properties in NSW?</h3>
                  <p>
                    NSW rental properties must have safety switches (RCDs) on power point and lighting
                    circuits. Smoke alarms must be installed in every bedroom and hallway, and be
                    photoelectric and interconnected. We provide inspection and certification for both.
                  </p>
                </div>

                <div className="service-card">
                  <h3>How fast can you respond to emergencies during active bookings?</h3>
                  <p>
                    For account holders, we prioritize emergency callouts. During business hours we
                    typically respond within 2-4 hours. After-hours emergency service available 24/7
                    for critical issues like complete power failure or heating system breakdown.
                  </p>
                </div>

                <div className="service-card">
                  <h3>Do you invoice property managers directly or property owners?</h3>
                  <p>
                    We're flexible. We can invoice the property manager for consolidated billing across
                    multiple properties, or invoice owners directly with a copy to the property manager.
                    Whatever works best for your management structure.
                  </p>
                </div>

                <div className="service-card">
                  <h3>Can you coordinate work around guest bookings?</h3>
                  <p>
                    Yes. We understand holiday rental schedules. For non-urgent work, we can schedule
                    around booking gaps. For urgent repairs, we minimize disruption and communicate
                    directly with guests when necessary.
                  </p>
                </div>

                <div className="service-card">
                  <h3>What's included in a pre-purchase electrical inspection?</h3>
                  <p>
                    Full inspection of switchboard, wiring, safety switches, smoke alarms, power points,
                    lighting, hot water system, heating, and any solar/battery systems. Written report
                    identifying defects, safety hazards, and estimated repair costs. Delivered within
                    48 hours.
                  </p>
                </div>

                <div className="service-card">
                  <h3>Do you offer discounts for multiple properties?</h3>
                  <p>
                    Yes. Property managers with 3+ properties receive 20% discount on all work.
                    Real estate agencies and body corporate managers with larger portfolios receive
                    25% discount plus dedicated account management.
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
