import { useState } from 'react'
import HamburgerIcon from '../../../assets/icons/HamburgerIcon'
import CrossIcon from '../../../assets/icons/CrossIcon'
import InstagramIcon from '../../../assets/icons/InstagramIcon'
import FacebookIcon from '../../../assets/icons/FacebookIcon'
import productMenuList from '../../../mocks/productMenuList'
import moreInfoMenuList from '../../../mocks/moreInfoMenuList'

function HamburgerMenuDesktop (): JSX.Element {
  const [isMenuOpen, toggleMenu] = useState<boolean>(false)

  const titleStyles = 'mt-9 font-medium text-base opacity-25'
  const linkStyles = 'text-3xl hover:text-tgc-green leading-10 transition-colors'

  return (
    <>
      <HamburgerIcon onClick={() => toggleMenu(!isMenuOpen)} />
      <section className={`${isMenuOpen ? '' : 'left-[-400px]'} fixed z-20 left-0 top-0 w-[400px] h-full bg-white px-16 py-10 flex flex-col overflow-y-auto shadow-xl transition-all duration-700 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-400 hover:scrollbar-thumb-tgc-green`}>
        <CrossIcon onClick={() => toggleMenu(!isMenuOpen)} />
        <nav>
          <h2 className={titleStyles}>Productos</h2>
          <ul>
            {productMenuList.map((product) => (
              <li key={product.id}>
                <a href={product.link} className={linkStyles}>
                  {product.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav>
          <h2 className={titleStyles}>Más información</h2>
          <ul>
            {moreInfoMenuList.map((item) => (
              <li key={item.id}>
                <a href={item.link} className={linkStyles}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ul className='flex mt-auto gap-2 align-center pt-24'>
          <li><a href='#'><InstagramIcon /></a></li>
          <li><a href='#'><FacebookIcon /></a></li>
        </ul>
      </section>
      <div onClick={() => toggleMenu(!isMenuOpen)} className={`${isMenuOpen ? '' : 'opacity-0 -z-10 pointer-events-none'} fixed z-10 w-full bg-black/[.25] top-0 right-[0] h-full cursor-pointer transition-opacity duration-700`} />
    </>
  )
}

export default HamburgerMenuDesktop
