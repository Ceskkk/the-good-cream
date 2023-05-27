import { useRef } from 'react'
import useScroll from '../hooks/useScroll'
import ArrowLeftIcon from '../assets/icons/ArrowLeftIcon'
import ArrowRightIcon from '../assets/icons/ArrowRightIcon'
import Button from './shared/Button'
import useMediaQuery from '../hooks/useMediaQuery'
import HeroList from './hero/HeroList'

function HeroSection (): JSX.Element {
  const isMobile = useMediaQuery('(max-width:1100px)')
  const scrollElementRef = useRef<any>(null)

  const useScrollParams = {
    productsInScreen: 1,
    totalProducts: 2,
    scrollElementRef
  }

  const { isFirstSlide, isLastSlide, scrollLeft, scrollRight } = useScroll(useScrollParams)

  return (
    <section className={`flex border-b-2 border-black ${isMobile ? 'flex-col-reverse' : 'flex-row'}`}>
      {isMobile
        ? (
          <div>
            <HeroList />
          </div>)
        : null}
      <div className='flex flex-1 relative'>
        <div className={`${isFirstSlide ? 'bg-gray-400 pointer-events-none' : 'bg-tgc-green'} ${isMobile ? 'bottom-2/4' : 'bottom-8'} absolute left-8 text-white p-5 rounded-full hover:shadow-2xl cursor-pointer`} onClick={scrollLeft}>
          <ArrowLeftIcon color='white' />
        </div>
        <div ref={scrollElementRef} className='overflow-x-hidden flex w-full scroll-smooth flex-nowrap overflow-auto border-r-2 border-black'>
          <div className='flex flex-[0_0_auto] flex-col justify-end items-center text-center w-full self-center'>
            <img src='/hero/hero1.jpg' alt='Imagen de pack botanical' className='w-full px-20' />
          </div>
          <div className='flex flex-[0_0_auto] flex-col justify-end items-center text-center w-full self-center'>
            <img src='/hero/hero1.jpg' alt='Imagen de pack botanical' className='w-full px-20 py-20' />
          </div>
        </div>
        <div className={`${isLastSlide ? 'bg-gray-400 pointer-events-none' : 'bg-tgc-green'} ${isMobile ? 'bottom-2/4' : 'bottom-8'} absolute right-8 text-white p-5 rounded-full hover:shadow-2xl cursor-pointer`} onClick={scrollRight}>
          <ArrowRightIcon color='white' />
        </div>
      </div>
      <div className={`flex flex-1 flex-col bg-[#F7F6F2] ${isMobile ? 'px-4 py-8' : 'pb-16'}`}>
        <h1 className={`text-6xl mb-8 max-w-[300px] ${isMobile ? '' : 'px-14 pt-8'}`}>Botanical Premium Cosmetics</h1>
        <h2 className={`text-xl font-medium max-w-[500px] ${isMobile ? '' : 'mb-24 px-14'}`}>Apostamos por ofrecerte los mejores cosméticos naturales, a base de cáñamo, para un cuidado completo de tu piel.</h2>
        {isMobile
          ? null
          : (
            <div className='mb-24'>
              <HeroList />
            </div>
            )}
        {isMobile
          ? null
          : (
            <div className='px-14'>
              <Button text='Ver productos' />
            </div>
            )}
      </div>
    </section>
  )
}

export default HeroSection
