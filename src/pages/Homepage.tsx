import Footer from '../components/Footer'
import Header from '../components/Header'
import ProductTypesSection from '../components/ProductTypesSection'
import NewsletterBanner from '../components/menu/NewsletterBanner'

function Homepage (): JSX.Element {
  return (
    <main>
      <Header />
      <ProductTypesSection />
      <NewsletterBanner />
      <Footer />
    </main>
  )
}

export default Homepage
