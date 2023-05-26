import { IMenuItem } from '../../types'

interface LinkMenuProps {
  title: string
  links: IMenuItem[]
}

function LinkMenu ({ title, links }: LinkMenuProps): JSX.Element {
  return (
    <nav className='flex flex-col gap-2 mb-12'>
      <h3 className='text-white text-sm uppercase'>{title}</h3>
      <ul className='flex flex-col gap-2'>
        {links.map((item) => (
          <li key={item.id}>
            <a href={item.link} className='text-lg text-white hover:text-tgc-green transition'>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default LinkMenu
