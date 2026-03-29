'use client'

// Google Reviews component — ready to use once Google Business Profile is verified.
// To activate:
// 1. Create GBP at business.google.com
// 2. Get your Place ID from Google Business dashboard
// 3. Replace PLACE_ID below with your real ID
// 4. Import and use this component in app/components/Reviews.tsx

const PLACE_ID = '' // TODO: add Place ID once GBP is verified

export default function GoogleReviews() {
  if (!PLACE_ID) return null

  return (
    <a
      href={`https://g.page/r/${PLACE_ID}/review`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: 'var(--electric-blue)',
        textDecoration: 'none',
        fontSize: '0.875rem',
        fontWeight: 600
      }}
    >
      Leave a Google Review →
    </a>
  )
}
