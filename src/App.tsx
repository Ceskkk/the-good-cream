import Footer from './components/Footer'
import Header from './components/Header'
import ProductTypesSection from './components/ProductTypesSection'
import NewsletterBanner from './components/menu/NewsletterBanner'

function App (): JSX.Element {
  return (
    <>
      <Header />
      <ProductTypesSection />
      <NewsletterBanner />
      <Footer />
    </>
  )
}

export default App
