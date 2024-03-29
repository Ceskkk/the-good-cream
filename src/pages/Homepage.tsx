import Footer from '../components/Footer'
import Header from '../components/Header'
import ProductTypesSection from '../components/ProductTypesSection'
import RecommendationsSection from '../components/RecommendationsSection'
import NewsletterBanner from '../components/NewsletterBanner'
import CbdSection from '../components/CbdSection'
import NewsSection from '../components/NewsSection'
import HeroSection from '../components/HeroSection'

function Homepage (): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <NewsSection />
        <CbdSection />
        <ProductTypesSection />
        <RecommendationsSection />
        <NewsletterBanner />
        <Footer />
      </main>
    </>
  )
}

export default Homepage
