'use client'

// Google Reviews component
// In production, this would fetch from Google My Business API
// For now, it displays static reviews that can be manually updated monthly

const reviews = [
  {
    author: "Property Owner",
    rating: 5,
    text: "Excellent service for our Jindabyne holiday home. Solar installation was professional and they explained everything clearly.",
    date: "2 months ago"
  },
  {
    author: "Local Business",
    rating: 5,
    text: "Fast response for emergency electrical work at our Thredbo lodge. Highly recommend for alpine properties.",
    date: "3 months ago"
  },
  {
    author: "Homeowner",
    rating: 5,
    text: "Starlink installation was perfect. Finally have reliable internet at our Crackenback property.",
    date: "1 month ago"
  }
]

export default function GoogleReviews() {
  return (
    <div style={{
      background: 'var(--pure-white)',
      borderRadius: '12px',
      padding: 'var(--space-2xl)',
      border: '1px solid var(--border-color)'
    }}>
      <div style={{ marginBottom: 'var(--space-lg)', textAlign: 'center' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: 'var(--space-sm)' }}>
          ⭐⭐⭐⭐⭐
        </div>
        <h3 style={{ marginBottom: 'var(--space-xs)' }}>5.0 Star Rating</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
          Based on Google Reviews
        </p>
      </div>

      <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
        {reviews.map((review, idx) => (
          <div
            key={idx}
            style={{
              padding: 'var(--space-lg)',
              background: 'rgba(14, 165, 233, 0.03)',
              borderRadius: '8px',
              borderLeft: '3px solid var(--electric-blue)'
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: 'var(--space-sm)',
              alignItems: 'center'
            }}>
              <div>
                <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>
                  {review.author}
                </div>
                <div style={{ color: '#F59E0B', fontSize: '0.875rem' }}>
                  {'★'.repeat(review.rating)}
                </div>
              </div>
              <div style={{
                fontSize: '0.75rem',
                color: 'var(--text-secondary)'
              }}>
                {review.date}
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
              "{review.text}"
            </p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 'var(--space-lg)', textAlign: 'center' }}>
        <a
          href="https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'var(--electric-blue)',
            textDecoration: 'none',
            fontSize: '0.875rem',
            fontWeight: 600
          }}
        >
          Read All Reviews on Google →
        </a>
      </div>
    </div>
  )
}

// Instructions for monthly updates:
// 1. Go to Google My Business dashboard
// 2. Copy latest 3-5 reviews
// 3. Update the 'reviews' array above
// 4. Commit and deploy changes
