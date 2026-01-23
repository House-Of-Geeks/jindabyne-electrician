'use client'

import Link from 'next/link'
import { MountainSilhouette, TopoLines, LightningBolt, GridPattern } from './AlpineGraphics'

export default function Hero() {
  return (
    <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Visual Enhancements */}
      <GridPattern />
      <TopoLines />
      <MountainSilhouette />

      {/* Animated diagonal accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: '-10%',
        width: '50%',
        height: '100%',
        background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.06) 0%, rgba(0, 240, 255, 0.10) 100%)',
        clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)',
        animation: 'diagonalFloat 20s ease-in-out infinite',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <style jsx>{`
        @keyframes diagonalFloat {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-30px) translateY(20px); }
        }
      `}</style>

      <div className="hero-content" style={{ position: 'relative', zIndex: 10 }}>
        {/* Enhanced Badge with Lightning */}
        <span className="hero-badge" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.625rem',
          position: 'relative'
        }}>
          <LightningBolt size={20} />
          <span>Snowy Mountains Electrical Specialists</span>
        </span>

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
