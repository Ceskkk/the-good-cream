import useMediaQuery from '../../hooks/useMediaQuery'
import { IProduct } from '../../types'
import Button from '../shared/Button'

interface ProductProps {
  product: IProduct
}

function Product ({ product }: ProductProps): JSX.Element {
  const isMobile = useMediaQuery('(max-width:1100px)')

  return (
    <article className={`flex flex-col flex-1 justify-end items-center text-center pt-20 pb-24 px-10 border-r-2 border-black last:border-r-0 ${isMobile ? 'flex-[0_0_auto] w-full' : ''}`}>
      <figure className='mb-2'>
        <img src={`/products/${product.img}`} alt={`Imagen de ${product.name}`} />
      </figure>
      <label className='mb-2 rounded-full bg-[#F7F6F2] uppercase text-xs px-4 py-2'>{product.category}</label>
      <h2 className='text-3xl mb-2 max-w-[280px]'>{product.name}</h2>
      <p className='text-base mb-2 font-medium max-w-[280px]'>{product.description}</p>
      <span className='text-lg mb-2 font-medium'>{product.price} €</span>
      <Button text='Comprar' />
    </article>
  )
}

export default Product
