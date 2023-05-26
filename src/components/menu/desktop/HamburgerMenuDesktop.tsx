import { useState } from 'react'
import HamburgerIcon from '../../../assets/icons/HamburgerIcon'
import { MenuItem } from '../../../types'
import CrossIcon from '../../../assets/icons/CrossIcon'
import InstagramIcon from '../../../assets/icons/InstagramIcon'
import FacebookIcon from '../../../assets/icons/FacebookIcon'

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

function HamburgerMenuDesktop (): JSX.Element {
  const [isMenuOpen, toggleMenu] = useState<boolean>(false)

  const titleStyles = 'mt-9 font-medium text-base opacity-25'
  const linkStyles = 'text-3xl hover:text-tgc-green leading-10 transition-colors'

  return (
    <>
      <HamburgerIcon onClick={() => toggleMenu(!isMenuOpen)} />
      <nav className={`${isMenuOpen ? '' : 'left-[-400px]'} fixed z-20 left-0 top-0 w-[400px] h-full bg-white px-16 py-10 flex flex-col overflow-y-auto shadow-xl transition-all duration-700 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-400 hover:scrollbar-thumb-tgc-green`}>
        <CrossIcon onClick={() => toggleMenu(!isMenuOpen)} />
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
        <ul className='flex mt-auto gap-2 align-center pt-24'>
          <li><a href='#'><InstagramIcon /></a></li>
          <li><a href='#'><FacebookIcon /></a></li>
        </ul>
      </nav>
      <div onClick={() => toggleMenu(!isMenuOpen)} className={`${isMenuOpen ? '' : 'opacity-0 -z-10 pointer-events-none'} fixed z-10 w-full bg-black/[.25] top-0 right-[0] h-full cursor-pointer transition-opacity duration-700`} />
    </>
  )
}

export default HamburgerMenuDesktop
