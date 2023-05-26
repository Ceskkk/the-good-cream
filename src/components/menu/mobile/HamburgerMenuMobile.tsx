import { useState } from 'react'
import HamburgerIcon from '../../../assets/icons/HamburgerIcon'
import { MenuItem } from '../../../types'
import CrossIcon from '../../../assets/icons/CrossIcon'
import SettingsMenuMobile from './SettingsMenuMobile'

const products: MenuItem[] = [
  {
    id: 0,
    name: 'Todos',
    link: '#'
  },
  {
    id: 1,
    name: 'Facial',
    link: '#'
  },
  {
    id: 2,
    name: 'Corporal',
    link: '#'
  },
  {
    id: 3,
    name: 'Bienestar',
    link: '#'
  },
  {
    id: 4,
    name: 'Cofres',
    link: '#'
  }
]

const moreInfo: MenuItem[] = [
  {
    id: 0,
    name: 'Qué es el CBD',
    link: '#'
  },
  {
    id: 1,
    name: 'Nosotras',
    link: '#'
  },
  {
    id: 2,
    name: 'Blog',
    link: '#'
  },
  {
    id: 3,
    name: 'FAQs',
    link: '#'
  },
  {
    id: 4,
    name: 'Contacto',
    link: '#'
  }
]

function HamburgerMenuMobile (): JSX.Element {
  const [isMenuOpen, toggleMenu] = useState<boolean>(false)

  const titleStyles = 'font-medium text-base opacity-25'
  const linkStyles = 'text-4xl hover:text-tgc-green leading-tight transition-colors'
  const divStyles = 'flex flex-col px-6 py-6 border-b-2 border-black/[0.05]'

  return (
    <>
      <HamburgerIcon onClick={() => toggleMenu(!isMenuOpen)} />
      <nav className={`${isMenuOpen ? '' : 'left-[-100%]'} fixed z-20 left-0 top-0 w-full h-full bg-white flex flex-col overflow-y-auto transition-all duration-700`}>
        <div className={`${divStyles} !flex-row`}>
          <CrossIcon onClick={() => toggleMenu(!isMenuOpen)} />
          <h1 className='flex w-full justify-center ml-[-22px] uppercase text-2xl' style={{ fontFamily: 'Special Elite' }}>
            <a href='#'>The good cream</a>
          </h1>
        </div>
        <div className={divStyles}>
          <h2 className={titleStyles}>Productos</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <a href={product.link} className={linkStyles}>
                  {product.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={`${divStyles} !border-b-0`}>
          <h2 className={titleStyles}>Más información</h2>
          <ul>
            {moreInfo.map((item) => (
              <li key={item.id}>
                <a href={item.link} className={linkStyles}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <SettingsMenuMobile />
      </nav>
    </>
  )
}

export default HamburgerMenuMobile
