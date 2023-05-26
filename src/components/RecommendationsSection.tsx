import TitleSection from './shared/TitleSection'
import recommendedProducts from '../mocks/recommendedProducts'
import Product from './products/Product'
import useMediaQuery from '../hooks/useMediaQuery'
import { useRef } from 'react'
import ArrowRightIcon from '../assets/icons/ArrowRightIcon'
import ArrowLeftIcon from '../assets/icons/ArrowLeftIcon'
import useScroll from '../hooks/useScroll'

function RecommendationsSection (): JSX.Element {
  const isMobile = useMediaQuery('(max-width:1100px)')
  const scrollElementRef = useRef<any>(null)

  const { scrollNumber, scrollLimit, scrollLeft, scrollRight } = useScroll({ scrollElementRef })

  return (
    <section className='flex flex-wrap relative'>
      <TitleSection title='Te recomendamos' />
      {isMobile
        ? (
          <div className={`${scrollNumber === 1 ? 'bg-gray-400 pointer-events-none' : ''} absolute bottom-1/2 -translate-y-1/2 left-8 bg-tgc-green text-white p-5 rounded-full`} onClick={scrollLeft}>
            <ArrowLeftIcon color='white' hoverColor='black' />
          </div>
          )
        : null}
      <div ref={scrollElementRef} className={`overflow-x-hidden flex flex-wrap w-full scroll-smooth ${isMobile ? 'flex-nowrap overflow-auto' : ''}`}>
        {recommendedProducts.map((product) => <Product key={product.id} product={product} />)}
      </div>
      {isMobile
        ? (
          <div className={`${scrollNumber === scrollLimit ? 'bg-gray-400 pointer-events-none' : ''} absolute bottom-1/2 -translate-y-1/2 right-8 bg-tgc-green text-white p-5 rounded-full`} onClick={scrollRight}>
            <ArrowRightIcon color='white' hoverColor='black' />
          </div>

          )
        : null}
    </section>
  )
}

export default RecommendationsSection
