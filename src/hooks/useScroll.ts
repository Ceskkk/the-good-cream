import { MutableRefObject, useEffect, useState } from 'react'

interface UseScrollProps {
  productsInScreen: number
  totalProducts: number
  scrollElementRef: MutableRefObject<any>
}

interface UseScrollReturn {
  isFirstSlide: boolean
  isLastSlide: boolean
  scrollLeft: () => void
  scrollRight: () => void
}

const useScroll = ({ productsInScreen, totalProducts, scrollElementRef }: UseScrollProps): UseScrollReturn => {
  const [scrollNumber, setScrollNumber] = useState<number>(productsInScreen)
  const [isFirstSlide, toggleIsFirstSlide] = useState<boolean>(true)
  const [isLastSlide, toggleIsLastSlide] = useState<boolean>(false)
  const [scrollElementChildWidth, setScrollElementChildWidth] = useState<number>(0)
  const [isAnimating, setIsAnimating] = useState<boolean>(false)

  const scrollLeft = (): void => {
    if (!isAnimating) {
      setIsAnimating(true)
      scrollElementRef.current.scrollLeft = parseInt(scrollElementRef.current.scrollLeft) - scrollElementChildWidth
      if (scrollNumber > productsInScreen) setScrollNumber(scrollNumber - 1)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const scrollRight = (): void => {
    if (!isAnimating) {
      setIsAnimating(true)
      scrollElementRef.current.scrollLeft = parseInt(scrollElementRef.current.scrollLeft) + scrollElementChildWidth
      if (scrollNumber < totalProducts) setScrollNumber(scrollNumber + 1)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  useEffect(() => {
    toggleIsFirstSlide(scrollNumber === productsInScreen)
    toggleIsLastSlide(scrollNumber === totalProducts)
  }, [scrollNumber])

  useEffect(() => {
    setScrollElementChildWidth(scrollElementRef.current.children[0].offsetWidth)
  }, [scrollElementRef.current])

  return { isFirstSlide, isLastSlide, scrollLeft, scrollRight }
}

export default useScroll
