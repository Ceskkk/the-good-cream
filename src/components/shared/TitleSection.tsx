import useMediaQuery from '../../hooks/useMediaQuery'

interface TitleSectionProps {
  title: string
}

function TitleSection ({ title }: TitleSectionProps): JSX.Element {
  const isMobile = useMediaQuery('(max-width:1100px)')
  return (
    <h1 className={`flex w-full border-b-2 border-black ${isMobile ? 'px-8 py-8 text-3xl' : 'px-24 py-12 text-6xl'}`}>{title}</h1>
  )
}

export default TitleSection
