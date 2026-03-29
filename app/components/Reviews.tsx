'use client'

import { useEffect, useRef } from 'react'

export default function Reviews() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="reviews-section fade-in-section" ref={sectionRef}>
      <div className="section-container">
        <div className="section-header">
          <div className="section-label">Reviews</div>
          <h2>Trusted by Snowy Mountains Residents</h2>
          <p className="section-subtitle">
            We've completed electrical work across Jindabyne, Thredbo, Perisher and the wider Snowy Mountains region.
            Happy with our work? We'd love to hear from you.
          </p>
        </div>

        <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
          <div style={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'var(--space-lg)',
            padding: 'var(--space-2xl)',
            background: 'var(--pure-white)',
            borderRadius: '16px',
            border: '1px solid rgba(14, 165, 233, 0.15)',
            maxWidth: '480px'
          }}>
            <div style={{ fontSize: '3rem' }}>⭐</div>
            <div>
              <h3 style={{ marginBottom: 'var(--space-sm)' }}>Leave Us a Review</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', margin: 0 }}>
                Had work done by us? Your review helps local homeowners find a trusted electrician.
              </p>
            </div>
            <a
              href="tel:0455221921"
              className="cta-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              📞 Call Us — 0455 221 921
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
