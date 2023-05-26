import { MenuItem } from '../../../types'
import HamburgerMenuDesktop from './HamburgerMenuDesktop'

const menuItems: MenuItem[] = [
  {
    id: 0,
    name: 'Facial',
    link: '#'
  },
  {
    id: 1,
    name: 'Corporal',
    link: '#'
  },
  {
    id: 2,
    name: 'Bienestar',
    link: '#'
  },
  {
    id: 3,
    name: 'Cofres',
    link: '#'
  }
]

function MainMenuDesktop (): JSX.Element {
  return (
    <div className='flex gap-9 items-center'>
      <HamburgerMenuDesktop />
      <nav>
        <ul className='flex gap-8'>
          {menuItems.map((menuItem) => (
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
