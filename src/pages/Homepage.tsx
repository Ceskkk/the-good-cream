import Footer from '../components/Footer'
import Header from '../components/Header'
import ProductTypesSection from '../components/ProductTypesSection'
import RecommendationsSection from '../components/RecommendationsSection'
import NewsletterBanner from '../components/NewsletterBanner'

function Homepage (): JSX.Element {
  return (
    <main>
      <Header />
      <ProductTypesSection />
      <RecommendationsSection />
      <NewsletterBanner />
      <Footer />
    </main>
  )
}

export default Homepage
