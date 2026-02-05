'use client'

import { useEffect, useRef } from 'react'

const reviews = [
  {
    stars: 5,
    text: 'Excellent service installing our Starlink at our Thredbo property. Professional, on-time, and worked perfectly in challenging alpine conditions.',
    author: 'Sarah M., Thredbo'
  },
  {
    stars: 5,
    text: 'Had solar and battery storage installed on our holiday home. The team was knowledgeable about off-grid systems and delivered exactly what we needed.',
    author: 'Michael K., Jindabyne'
  },
  {
    stars: 5,
    text: 'Fast emergency response when we had a power issue during ski season. Reliable and trustworthy electrician for our lodge.',
    author: 'Emma D., Perisher'
  }
]

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
          <div className="section-label">Customer Reviews</div>
          <h2>Trusted by Snowy Mountains Residents</h2>
        </div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-stars">{'★'.repeat(review.stars)}</div>
              <p className="review-text">{review.text}</p>
              <div className="review-author">— {review.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
