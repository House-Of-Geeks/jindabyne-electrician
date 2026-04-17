import type { Metadata } from 'next'
import { Outfit, JetBrains_Mono } from 'next/font/google'
import ClarityAnalytics from './components/ClarityAnalytics'
import { GoogleAnalytics } from './components/GoogleAnalytics'
import { Quantcast } from './components/Quantcast'
import './globals.css'
import './alpine-technical.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jindabyneelectrician.com.au'),
  title: 'Electrician Jindabyne | Electrical, Solar & Emergency Services | Snowy Mountains NSW',
  description: 'Jindabyne\'s trusted electrician — solar, battery storage, Starlink & 24/7 emergency. Licensed, insured, 7+ years local. Call 0455 221 921 for a free quote.',
  keywords: ['electrician jindabyne', 'solar installation jindabyne', 'battery storage snowy mountains', 'starlink installation thredbo', 'electrician perisher', 'emergency electrician jindabyne'],
  openGraph: {
    type: 'website',
    siteName: 'Jindabyne Electrician',
    title: 'Electrician Jindabyne | Electrical, Solar & Emergency Services',
    description: 'Jindabyne\'s trusted electrician — solar, battery storage, Starlink & 24/7 emergency. Licensed, insured, 7+ years local. Call 0455 221 921.',
    url: 'https://www.jindabyneelectrician.com.au',
    locale: 'en_AU',
    images: [{ url: '/og', width: 1200, height: 630, alt: 'Jindabyne Electrician' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Electrician Jindabyne | Electrical, Solar & Emergency Services',
    description: 'Jindabyne\'s trusted electrician — solar, battery storage, Starlink & 24/7 emergency. Licensed, insured, 7+ years local. Call 0455 221 921.',
    images: ['/og'],
  },
  alternates: {
    canonical: 'https://www.jindabyneelectrician.com.au',
    types: { 'application/rss+xml': 'https://www.jindabyneelectrician.com.au/feed.xml' },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.jindabyneelectrician.com.au/#business",
    name: "Jindabyne Electrician",
    url: "https://www.jindabyneelectrician.com.au",
    description: "Licensed electrician serving Jindabyne and the Snowy Mountains. Residential, commercial, solar and emergency services.",
    areaServed: ["Jindabyne", "Thredbo", "Perisher", "Cooma", "Snowy Mountains"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jindabyne",
      addressRegion: "NSW",
      addressCountry: "AU",
    },
    logo: { "@type": "ImageObject", url: "https://www.jindabyneelectrician.com.au/og" },
  };

  return (
    <html lang="en" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <body>
        <ClarityAnalytics />
        <GoogleAnalytics id={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? ""} />
        <Quantcast id="p-0nXpAVdp8GeS5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <div className="bg-gradient" />
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  )
}
