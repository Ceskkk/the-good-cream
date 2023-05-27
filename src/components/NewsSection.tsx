import TitleSection from './shared/TitleSection'
import newsProducts from '../mocks/newsProducts'
import { useRef } from 'react'
import ArrowRightIcon from '../assets/icons/ArrowRightIcon'
import ArrowLeftIcon from '../assets/icons/ArrowLeftIcon'
import useScroll from '../hooks/useScroll'
import ProductList from './products/ProductList'
import useMediaQuery from '../hooks/useMediaQuery'

function NewsSection (): JSX.Element {
  const isMobile = useMediaQuery('(max-width:1100px)')
  const scrollElementRef = useRef<any>(null)

  const useScrollParams = {
    productsInScreen: isMobile ? 1 : 3,
    totalProducts: 6,
    scrollElementRef
  }

  const { isFirstSlide, isLastSlide, scrollLeft, scrollRight } = useScroll(useScrollParams)

  return (
    <section className='flex flex-wrap relative border-b-2 border-black'>
      <TitleSection>
        Novedades
      </TitleSection>
      <div className={`${isFirstSlide ? 'bg-gray-400 pointer-events-none' : 'bg-tgc-green'} absolute bottom-8 left-8 text-white p-5 rounded-full hover:shadow-2xl cursor-pointer`} onClick={scrollLeft}>
        <ArrowLeftIcon color='white' />
      </div>
      <div ref={scrollElementRef} className='overflow-x-hidden flex w-full scroll-smooth flex-nowrap overflow-auto'>
        <ProductList products={newsProducts} />
      </div>
      <div className={`${isLastSlide ? 'bg-gray-400 pointer-events-none' : 'bg-tgc-green'} absolute bottom-8 right-8 text-white p-5 rounded-full hover:shadow-2xl cursor-pointer`} onClick={scrollRight}>
        <ArrowRightIcon color='white' />
      </div>
    </section>
  )
}

export default NewsSection
