import CannaIcon from '../../assets/icons/CannaIcon'
import FemaleIcon from '../../assets/icons/FemaleIcon'
import HearthIcon from '../../assets/icons/HearthIcon'
import StarIcon from '../../assets/icons/StarIcon'
import useMediaQuery from '../../hooks/useMediaQuery'

interface IHeroListItem {
  id: number
  icon: JSX.Element
  title: string
  text: string
}

const heroListItems: IHeroListItem[] = [
  {
    id: 0,
    icon: <StarIcon />,
    title: 'Premium',
    text: 'Apostamos por ofrecerte los mejores comséticos naturales'
  },
  {
    id: 1,
    icon: <CannaIcon />,
    title: 'Cannabidiol',
    text: 'Uno de los compuestos con mayores beneficios para la salud'
  },
  {
    id: 2,
    icon: <HearthIcon />,
    title: 'Bienestar',
    text: 'Productos pensados para mejorar tu bienestar y sentirte bien'
  },
  {
    id: 3,
    icon: <FemaleIcon />,
    title: 'Nosotras',
    text: 'The Good Cream, un lugar donde te sientes acompañada'
  }
]

function HeroList (): JSX.Element {
  const isMobile = useMediaQuery('(max-width:1100px)')

  return (
    <ul>
      {heroListItems.map((item) => (
        <li key={item.id} className={`flex p-4 border-t-2 border-black ${isMobile ? 'flex-col' : 'flex-row items-center'}`}>
          <h3 className={`flex gap-2 items-center text-2xl font-medium w-[220px] ${isMobile ? '' : 'pl-12'}`}>
            <span>{item.icon}</span>{item.title}
          </h3>
          <p className={`text-base font-medium' ${isMobile ? '' : 'pl-4'}`}>{item.text}</p>
        </li>
      ))}
    </ul>
  )
}

export default HeroList
