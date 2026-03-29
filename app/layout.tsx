import type { Metadata } from 'next'
import { Outfit, JetBrains_Mono } from 'next/font/google'
import ClarityAnalytics from './components/ClarityAnalytics'
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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Electrician Jindabyne | Electrical, Solar & Emergency Services',
    description: 'Jindabyne\'s trusted electrician — solar, battery storage, Starlink & 24/7 emergency. Licensed, insured, 7+ years local. Call 0455 221 921.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <body>
        <ClarityAnalytics />
        <div className="bg-gradient" />
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  )
}
