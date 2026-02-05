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
  description: 'Licensed electrician servicing Jindabyne, Thredbo & Snowy Mountains. All electrical services, solar installation, battery storage, Starlink & EV chargers. 24/7 emergency. Call now.',
  keywords: ['electrician jindabyne', 'solar installation jindabyne', 'battery storage snowy mountains', 'starlink installation thredbo', 'electrician perisher', 'emergency electrician jindabyne'],
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
