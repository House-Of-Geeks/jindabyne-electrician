import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">Snowy Mountains Electrical Specialists</span>
        <h1>Local Electricians for Jindabyne & the Snowy Mountains</h1>
        <p className="hero-subtitle">
          Licensed electricians serving Jindabyne, Thredbo & surrounding alpine communities.
          Specialists in Solar Installation, Battery Storage, Starlink & Emergency Electrical.
        </p>
        <div className="hero-ctas">
          <Link href="/contact" className="cta-primary">
            Get Free Quote
          </Link>
          <Link href="#services" className="cta-secondary">
            View Services →
          </Link>
        </div>
        <div className="hero-trust">
          <div className="trust-item">
            <div className="trust-icon" aria-hidden="true">✓</div>
            <span>Fully Licensed & Insured</span>
          </div>
          <div className="trust-item">
            <div className="trust-icon" aria-hidden="true">✓</div>
            <span>24/7 Emergency Service</span>
          </div>
          <div className="trust-item">
            <div className="trust-icon" aria-hidden="true">✓</div>
            <span>7+ Years Local Experience</span>
          </div>
        </div>
      </div>
    </section>
  )
}
