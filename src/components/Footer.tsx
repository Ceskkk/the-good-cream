import useMediaQuery from '../hooks/useMediaQuery'
import LinkMenu from './footer/LinkMenu'
import infoFooterList from '../mocks/infoFooterList'
import productFooterList from '../mocks/productFooterList'
import socialFooterList from '../mocks/socialFooterList'
import moreInfoFooterList from '../mocks/moreInfoFooterList'
import contactFooterList from '../mocks/contactFooterList'

function Footer (): JSX.Element {
  const isMobile = useMediaQuery('(max-width: 1100px)')

  return (
    <footer className='bg-black'>
      <div className={`flex flex-row flex-wrap ${isMobile ? 'px-8 py-16 pb-8 gap-12' : 'px-28 py-20 pb-8 gap-40'}`}>
        <LinkMenu title='Información' links={infoFooterList} />
        <LinkMenu title='Productos' links={productFooterList} />
        <LinkMenu title='Social' links={socialFooterList} />
        {isMobile
          ? <LinkMenu title='Más información' links={moreInfoFooterList} />
          : <LinkMenu title='Contacto' links={contactFooterList} />}
      </div>
      <div className='flex justify-center w-full bg-black border-t-[1px] border-white px-4 py-6'>
        <span className='text-white uppercase'>© 2022 The good cream</span>
      </div>
    </footer>
  )
}

export default Footer
