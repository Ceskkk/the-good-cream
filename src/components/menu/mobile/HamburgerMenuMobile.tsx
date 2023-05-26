import { useState } from 'react'
import HamburgerIcon from '../../../assets/icons/HamburgerIcon'
import CrossIcon from '../../../assets/icons/CrossIcon'
import SettingsMenuMobile from './SettingsMenuMobile'
import productMenuList from '../../../mocks/productMenuList'
import moreInfoMenuList from '../../../mocks/moreInfoMenuList'

function HamburgerMenuMobile (): JSX.Element {
  const [isMenuOpen, toggleMenu] = useState<boolean>(false)

  const titleStyles = 'font-medium text-base opacity-25'
  const linkStyles = 'text-4xl hover:text-tgc-green leading-tight transition-colors'
  const divStyles = 'flex flex-col px-6 py-6 border-b-2 border-black/[0.05]'

  return (
    <>
      <HamburgerIcon onClick={() => toggleMenu(!isMenuOpen)} />
      <section className={`${isMenuOpen ? '' : 'left-[-100%]'} fixed z-20 left-0 top-0 w-full h-full bg-white flex flex-col overflow-y-auto transition-all duration-700`}>
        <div className={`${divStyles} !flex-row`}>
          <CrossIcon onClick={() => toggleMenu(!isMenuOpen)} />
          <h1 className='flex w-full justify-center ml-[-22px] uppercase text-2xl' style={{ fontFamily: 'Special Elite' }}>
            <a href='#'>The good cream</a>
          </h1>
        </div>
        <nav className={divStyles}>
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
        <nav className={`${divStyles} !border-b-0`}>
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
        <SettingsMenuMobile />
      </section>
    </>
  )
}

export default HamburgerMenuMobile
