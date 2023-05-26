import CartIcon from '../../../assets/icons/CartIcon'
import FacebookIcon from '../../../assets/icons/FacebookIcon'
import InstagramIcon from '../../../assets/icons/InstagramIcon'
import SearchIcon from '../../../assets/icons/SearchIcon'
import UserIcon from '../../../assets/icons/UserIcon'
import LangSelector from '../LangSelector'

function SettingsMenuMobile (): JSX.Element {
  const searchClick = (): void => {}
  const userClick = (): void => {}
  const cartClick = (): void => {}

  const divStyles = 'flex justify-center p-4 basis-1/3 border-t-2 border-r-2 border-black/[0.05] gap-4'

  return (
    <div className='flex flex-row flex-wrap items-start mt-10'>
      <div className={divStyles}>
        <UserIcon onClick={userClick} />
      </div>
      <div className={divStyles}>
        <SearchIcon onClick={searchClick} />
      </div>
      <div className={`${divStyles} !border-r-0`}>
        <CartIcon onClick={cartClick} cartItems={0} />
      </div>
      <div className={`${divStyles} !basis-1/2`}>
        <LangSelector />
      </div>
      <div className={`${divStyles} !basis-1/2`}>
        <a href='#'><InstagramIcon /></a>
        <a href='#'><FacebookIcon /></a>
      </div>
    </div>
  )
}

export default SettingsMenuMobile
