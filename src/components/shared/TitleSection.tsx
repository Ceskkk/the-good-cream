import { ReactNode } from 'react'
import useMediaQuery from '../../hooks/useMediaQuery'

interface TitleSectionProps {
  children: ReactNode
}

function TitleSection ({ children }: TitleSectionProps): JSX.Element {
  const isMobile = useMediaQuery('(max-width:1100px)')
  return (
    <h1 className={`flex items-center w-full border-b-2 border-black ${isMobile ? 'px-8 py-8 text-4xl' : 'px-24 py-12 text-6xl'}`}>
      {children}
    </h1>
  )
}

export default TitleSection
