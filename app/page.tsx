import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Reviews from './components/Reviews'
import ServiceAreas from './components/ServiceAreas'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import { LocalBusinessSchema, ReviewSchema } from '../components/Schema'

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <ReviewSchema rating={4.9} reviewCount={47} />
      <Header />
      <main>
        <Hero />
        <Services />
        <Reviews />
        <ServiceAreas />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
