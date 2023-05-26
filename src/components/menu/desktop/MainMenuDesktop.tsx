import HamburgerMenuDesktop from './HamburgerMenuDesktop'
import productMenuList from '../../../mocks/productMenuList'

function MainMenuDesktop (): JSX.Element {
  return (
    <div className='flex gap-9 items-center'>
      <HamburgerMenuDesktop />
      <nav>
        <ul className='flex gap-8'>
          {productMenuList.map((menuItem) => (
            <li key={menuItem.id}>
              <a href={menuItem.link} className='text-lg font-medium hover:text-tgc-green transition-colors'>
                {menuItem.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default MainMenuDesktop
