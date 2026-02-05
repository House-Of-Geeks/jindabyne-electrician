import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import CTASection from '../../../components/CTASection'
import { BreadcrumbSchema } from '../../../../components/Schema'

export const metadata = {
  title: 'Split System Heating & Cooling Installation | Jindabyne Electrician',
  description: 'Licensed split system air conditioner installation and servicing in the Snowy Mountains. Stay warm in winter and cool in summer with efficient heating and cooling.',
  alternates: {
    canonical: '/our-services/residential/split-system-heating-cooling',
  },
}

const breadcrumbs = [
  { name: 'Home', url: 'https://www.jindabyneelectrician.com.au' },
  { name: 'Services', url: 'https://www.jindabyneelectrician.com.au/our-services' },
  { name: 'Residential', url: 'https://www.jindabyneelectrician.com.au/our-services/residential' },
  { name: 'Split Systems', url: 'https://www.jindabyneelectrician.com.au/our-services/residential/split-system-heating-cooling' }
]

export default function SplitSystemPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      <main>
        <section className="hero" style={{ minHeight: '60vh' }}>
          <div className="hero-content">
            <span className="hero-badge">Climate Control</span>
            <h1>Split System Heating & Cooling Installation</h1>
            <p className="hero-subtitle">
              Licensed installation, removal, and servicing of split system air conditioners
              for Snowy Mountains homes. Stay comfortable year-round with efficient heating and cooling.
            </p>
            <div className="hero-ctas">
              <Link href="/contact" className="cta-primary">
                Get Installation Quote
              </Link>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Why Split Systems Work in Alpine Areas</div>
              <h2>Perfect for Snowy Mountains Climate</h2>
            </div>

            <div className="services-grid">
              <div className="service-card">
                <h3>Efficient Winter Heating</h3>
                <p>
                  Modern split systems provide efficient heating down to -15°C. More cost-effective
                  than electric resistive heating for Jindabyne's cold winters.
                </p>
              </div>

              <div className="service-card">
                <h3>Summer Cooling</h3>
                <p>
                  While Snowy Mountains summers are mild, split systems provide comfortable cooling
                  during hot days (25-30°C) common in January and February.
                </p>
              </div>

              <div className="service-card">
                <h3>Zoned Climate Control</h3>
                <p>
                  Heat or cool only the rooms you're using. Perfect for holiday homes where
                  you don't need to climate control the entire property.
                </p>
              </div>

              <div className="service-card">
                <h3>Lower Running Costs</h3>
                <p>
                  Split systems use 1/3 the energy of electric panel heaters. Significant savings
                  during long Snowy Mountains winters.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section" style={{ background: 'rgba(14, 165, 233, 0.03)' }}>
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Our Services</div>
              <h2>Complete Split System Solutions</h2>
            </div>

            <div className="services-grid">
              <div className="service-card">
                <h3>New Installation</h3>
                <p>
                  <strong>Licensed refrigeration work</strong> for split system installation:
                </p>
                <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
                  <li>Site assessment and system sizing</li>
                  <li>Indoor and outdoor unit mounting</li>
                  <li>Electrical connection and safety switch</li>
                  <li>Refrigerant line installation</li>
                  <li>System testing and commissioning</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>System Removal & Replacement</h3>
                <p>
                  <strong>Safe removal of old systems:</strong>
                </p>
                <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
                  <li>Proper refrigerant recovery</li>
                  <li>Removal of old indoor and outdoor units</li>
                  <li>Installation of new replacement system</li>
                  <li>Repair of mounting damage</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Routine Servicing</h3>
                <p>
                  <strong>Keep your system running efficiently:</strong>
                </p>
                <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
                  <li>Clean and sanitise head unit</li>
                  <li>Filter cleaning or replacement</li>
                  <li>Check refrigerant levels</li>
                  <li>Test all functions (heating and cooling)</li>
                  <li>Remote battery replacement</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Electrical Repairs</h3>
                <p>
                  <strong>Fault finding and repairs:</strong>
                </p>
                <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
                  <li>Unit not heating or cooling</li>
                  <li>Electrical faults and error codes</li>
                  <li>Thermostat issues</li>
                  <li>Drainage problems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">System Sizing</div>
              <h2>Choosing the Right Size for Alpine Homes</h2>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="service-card">
                <h3>Alpine Climate Considerations</h3>
                <p>
                  Snowy Mountains properties require larger systems than equivalent homes in Sydney
                  due to:
                </p>
                <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
                  <li><strong>Extreme temperature range:</strong> -10°C to +30°C seasonal variation</li>
                  <li><strong>High ceilings:</strong> Common in alpine architecture</li>
                  <li><strong>Large open-plan areas:</strong> Harder to heat efficiently</li>
                  <li><strong>Poor insulation:</strong> Many older alpine properties</li>
                </ul>

                <h3 style={{ marginTop: 'var(--space-lg)' }}>Recommended Sizes</h3>
                <div style={{ marginTop: '0.75rem' }}>
                  <p><strong>Small bedroom (12-16m²):</strong> 2.5-3.5kW</p>
                  <p><strong>Large bedroom (16-25m²):</strong> 3.5-5.0kW</p>
                  <p><strong>Living area (25-40m²):</strong> 5.0-7.0kW</p>
                  <p><strong>Open-plan living (40-60m²):</strong> 7.0-9.0kW</p>
                  <p><strong>Large spaces (60m²+):</strong> Multi-split or ducted system</p>
                </div>

                <p style={{ marginTop: 'var(--space-md)', fontStyle: 'italic', color: '#64748B' }}>
                  We provide free site assessments to recommend the optimal system for your property.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section" style={{ background: 'rgba(14, 165, 233, 0.03)' }}>
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Installation Details</div>
              <h2>What to Expect</h2>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="service-card">
                <h3>Installation Process</h3>
                <div style={{ marginTop: '0.75rem' }}>
                  <p><strong>1. Site Assessment (Free)</strong></p>
                  <p style={{ paddingLeft: '1rem', color: '#64748B' }}>
                    We visit your property to assess the best location for indoor and outdoor units,
                    measure the space, and recommend system size.
                  </p>

                  <p style={{ marginTop: 'var(--space-md)' }}><strong>2. Provide Quote</strong></p>
                  <p style={{ paddingLeft: '1rem', color: '#64748B' }}>
                    Detailed quote including system, installation, electrical work, and any
                    necessary upgrades.
                  </p>

                  <p style={{ marginTop: 'var(--space-md)' }}><strong>3. Installation Day</strong></p>
                  <p style={{ paddingLeft: '1rem', color: '#64748B' }}>
                    Typically completed in 4-6 hours for a single system. We protect your floors
                    and clean up all materials.
                  </p>

                  <p style={{ marginTop: 'var(--space-md)' }}><strong>4. Testing & Handover</strong></p>
                  <p style={{ paddingLeft: '1rem', color: '#64748B' }}>
                    We test all functions, show you how to operate the system and remote,
                    and provide maintenance tips.
                  </p>
                </div>

                <h3 style={{ marginTop: 'var(--space-xl)' }}>What's Included</h3>
                <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
                  <li>Indoor unit (wall-mounted head unit)</li>
                  <li>Outdoor compressor unit</li>
                  <li>Up to 5 meters of refrigerant line</li>
                  <li>Electrical connection to switchboard</li>
                  <li>Safety switch if required</li>
                  <li>Wall bracket and weatherproof outdoor mounting</li>
                  <li>Condensate drainage</li>
                  <li>Remote control and batteries</li>
                  <li>Electrical compliance certificate</li>
                  <li>Manufacturer warranty registration</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <div className="section-header">
              <div className="section-label">Common Questions</div>
              <h2>Split System FAQs for Alpine Properties</h2>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
                <div className="service-card">
                  <h3>Will a split system work in Jindabyne's cold winters?</h3>
                  <p>
                    Yes. Modern split systems work efficiently down to -15°C. Jindabyne winter
                    temperatures typically range from -5°C to 10°C, well within operating range.
                  </p>
                </div>

                <div className="service-card">
                  <h3>Can snow damage the outdoor unit?</h3>
                  <p>
                    Outdoor units are weather-rated for snow and ice. We mount them on elevated
                    brackets to prevent snow accumulation and ensure proper drainage.
                  </p>
                </div>

                <div className="service-card">
                  <h3>How much does installation cost?</h3>
                  <p>
                    Typical installation ranges from $2,200 to $4,500 depending on system size
                    and installation complexity. Holiday homes may require additional electrical
                    work (safety switches, circuit upgrades).
                  </p>
                </div>

                <div className="service-card">
                  <h3>Do I need council approval?</h3>
                  <p>
                    Generally no for residential properties, but some strata/body corporate
                    complexes require approval. We check requirements for you.
                  </p>
                </div>

                <div className="service-card">
                  <h3>How often should I service the system?</h3>
                  <p>
                    We recommend annual servicing before winter. Regular cleaning maintains
                    efficiency and prevents mould buildup in damp alpine conditions.
                  </p>
                </div>

                <div className="service-card">
                  <h3>Can I run it on solar power?</h3>
                  <p>
                    Yes. A typical split system uses 0.8-2.5kW, easily powered by a 6.6kW solar
                    system. Perfect for reducing winter heating costs during sunny alpine days.
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
