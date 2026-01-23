'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function CTASection() {
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
    <section className="cta-section fade-in-section" ref={sectionRef}>
      <div className="section-container">
        <div className="cta-box">
          <div className="cta-box-content">
            <h2>Ready to Get Started?</h2>
            <p>Get in touch for a free quote on your electrical project</p>
            <div className="hero-ctas" style={{ justifyContent: 'center', marginTop: '1.5rem' }}>
              <Link href="/contact" className="cta-primary">
                Request Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
