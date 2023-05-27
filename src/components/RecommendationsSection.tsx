import TitleSection from './shared/TitleSection'
import recommendedProducts from '../mocks/recommendedProducts'
import useMediaQuery from '../hooks/useMediaQuery'
import { useRef } from 'react'
import ArrowRightIcon from '../assets/icons/ArrowRightIcon'
import ArrowLeftIcon from '../assets/icons/ArrowLeftIcon'
import useScroll from '../hooks/useScroll'
import ProductList from './products/ProductList'

function RecommendationsSection (): JSX.Element {
  const isMobile = useMediaQuery('(max-width:1100px)')
  const scrollElementRef = useRef<any>(null)

  const useScrollParams = {
    productsInScreen: 1,
    totalProducts: 3,
    scrollElementRef
  }

  const { isFirstSlide, isLastSlide, scrollLeft, scrollRight } = useScroll(useScrollParams)

  return (
    <section className='flex flex-wrap relative'>
      <TitleSection>
        Te recomendamos
      </TitleSection>
      {isMobile
        ? (
          <div className={`${isFirstSlide ? 'bg-gray-400 pointer-events-none' : 'bg-tgc-green'} absolute bottom-1/2 -translate-y-1/2 left-8  text-white p-5 rounded-full`} onClick={scrollLeft}>
            <ArrowLeftIcon color='white' />
          </div>
          )
        : null}
      <div ref={scrollElementRef} className='overflow-x-hidden flex w-full scroll-smooth flex-nowrap overflow-auto '>
        <ProductList products={recommendedProducts} />
      </div>
      {isMobile
        ? (
          <div className={`${isLastSlide ? 'bg-gray-400 pointer-events-none' : 'bg-tgc-green'} absolute bottom-1/2 -translate-y-1/2 right-8 text-white p-5 rounded-full`} onClick={scrollRight}>
            <ArrowRightIcon color='white' />
          </div>

          )
        : null}
    </section>
  )
}

export default RecommendationsSection
