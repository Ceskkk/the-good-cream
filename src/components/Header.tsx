import CartIcon from '../assets/icons/CartIcon'
import useMediaQuery from '../hooks/useMediaQuery'
import MainMenuDesktop from './menu/desktop/MainMenuDesktop'
import SettingsMenuDesktop from './menu/desktop/SettingsMenuDesktop'
import MainMenuMobile from './menu/mobile/MainMenuMobile'

function Header (): JSX.Element {
  const isMobile = useMediaQuery('(max-width: 1100px)')
  const cartClick = (): void => {}

  return (
    <header className={`flex justify-between items-center py-6 border-b-2 border-black gap-9 ${isMobile ? 'px-6' : 'px-14'}`}>
      {isMobile ? <MainMenuMobile /> : <MainMenuDesktop />}
      <h1 className={`flex text-center items-center uppercase ${isMobile ? 'text-2xl' : 'text-3xl'}`} style={{ fontFamily: 'Special Elite' }}>
        <a href='#' className='relative top-1'>The good cream</a>
      </h1>
      {isMobile ? <CartIcon onClick={cartClick} cartItems={0} /> : <SettingsMenuDesktop />}
    </header>
  )
}

export default Header
