'use client'

import { useEffect, useRef } from 'react'

const areas = [
  'Jindabyne',
  'Thredbo',
  'Perisher',
  'Charlotte Pass',
  'Berridale',
  'Cooma',
  'Crackenback',
  'Kalkite',
  'Dalgety',
  'Adaminaby',
  'East Jindabyne',
  'Guthega'
]

export default function ServiceAreas() {
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
    <section className="areas-section fade-in-section" ref={sectionRef}>
      <div className="section-container">
        <div className="section-header">
          <div className="section-label">Service Areas</div>
          <h2>Servicing the Snowy Mountains Region</h2>
          <p className="section-subtitle">
            Local electricians with deep knowledge of alpine electrical challenges
          </p>
        </div>

        <div className="areas-grid">
          {areas.map((area, index) => (
            <div key={index} className="area-tag">{area}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
