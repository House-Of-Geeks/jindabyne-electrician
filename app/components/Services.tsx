'use client'

import { useEffect, useRef } from 'react'

const services = [
  {
    icon: '☀️',
    title: 'Solar Installation',
    description: 'Off-grid and grid-tied solar systems designed for alpine conditions. Perfect for holiday homes and remote properties.',
    tag: '$8-15K+ Value'
  },
  {
    icon: '🔋',
    title: 'Battery Storage',
    description: 'Tesla Powerwall, Sonnen & BYD systems. Protect against storm outages and reduce energy costs in regional NSW.',
    tag: '$10-20K+ Value'
  },
  {
    icon: '📡',
    title: 'Starlink Installation',
    description: 'Professional Starlink setup for rural Snowy Mountains properties. Reliable high-speed internet where NBN can\'t reach.',
    tag: 'High Demand'
  },
  {
    icon: '🔥',
    title: 'Underfloor Heating',
    description: 'Electric underfloor heating installation for alpine homes. Premium comfort for Jindabyne winters.',
    tag: 'Alpine Specialist'
  },
  {
    icon: '🚗',
    title: 'EV Charger Installation',
    description: 'Tesla and universal EV charger installation. Pairs perfectly with solar systems for sustainable transport.',
    tag: 'Growing Category'
  },
  {
    icon: '🔔',
    title: 'Smoke Alarm Upgrades',
    description: 'NSW compliance smoke detector installation and upgrades. Protect your family and meet regulations.',
    tag: 'Compliance Required'
  }
]

export default function Services() {
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
    <section id="services" className="services-section fade-in-section" ref={sectionRef}>
      <div className="section-container">
        <div className="section-header">
          <div className="section-label">What We Do</div>
          <h2>High-Value Services for Alpine Properties</h2>
          <p className="section-subtitle">
            Specialized electrical solutions designed for the unique challenges of Snowy Mountains living
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-tag">{service.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
