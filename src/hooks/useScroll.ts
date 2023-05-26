import { MutableRefObject, useEffect, useState } from 'react'

interface UseScrollProps {
  scrollElementRef: MutableRefObject<any>
}

interface UseScrollReturn {
  scrollNumber: number
  scrollLimit: number
  scrollLeft: () => void
  scrollRight: () => void
}

const useScroll = ({ scrollElementRef }: UseScrollProps): UseScrollReturn => {
  const [scrollNumber, setScrollNumber] = useState<number>(1)
  const [scrollLimit, setScrollLimit] = useState<number>(0)
  const [scrollElementChildWidth, setScrollElementChildWidth] = useState<number>(0)

  const scrollLeft = (): void => {
    scrollElementRef.current.scrollLeft = parseInt(scrollElementRef.current.scrollLeft) - scrollElementChildWidth
    if (scrollNumber > 1) setScrollNumber(scrollNumber - 1)
  }

  const scrollRight = (): void => {
    scrollElementRef.current.scrollLeft = parseInt(scrollElementRef.current.scrollLeft) + scrollElementChildWidth
    if (scrollNumber < scrollLimit) setScrollNumber(scrollNumber + 1)
  }

  useEffect(() => {
    setScrollLimit(scrollElementRef.current.children.length)
    setScrollElementChildWidth(scrollElementRef.current.children[0].offsetWidth)
  }, [])

  return { scrollNumber, scrollLimit, scrollLeft, scrollRight }
}

export default useScroll
