import CartIcon from '../../../assets/icons/CartIcon'
import SearchIcon from '../../../assets/icons/SearchIcon'
import UserIcon from '../../../assets/icons/UserIcon'
import LangSelector from '../LangSelector'

function SettingsMenuDesktop (): JSX.Element {
  const searchClick = (): void => {}
  const userClick = (): void => {}
  const cartClick = (): void => {}

  return (
    <div className='flex flex-row items-center gap-9 relative'>
      <LangSelector />
      <SearchIcon onClick={searchClick} />
      <UserIcon onClick={userClick} />
      <CartIcon onClick={cartClick} cartItems={0} />
    </div>
  )
}

export default SettingsMenuDesktop
