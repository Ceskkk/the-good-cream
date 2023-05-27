import useMediaQuery from '../../hooks/useMediaQuery'
import { IProductType } from '../../types'

interface ProductTypeProps {
  product: IProductType
}

function ProductType ({ product }: ProductTypeProps): JSX.Element {
  const isMobile = useMediaQuery('(max-width:1100px)')

  return (
    <article key={product.id} className={`group/article flex border-r-2 border-black ${isMobile ? 'flex-row-reverse w-full border-r-0' : 'flex-col flex-1 last:border-0'}`}>
      <h2 className={`flex w-full justify-center items-center h-[100px] text-center px-8 py-3 border-b-2 border-black ${isMobile ? 'text-lg group-last/article:border-b-0' : 'text-2xl'}`}>{product.title}</h2>
      <figure className={`group/figure group-last/article:border-b-0 overflow-hidden cursor-pointer transition duration-300 hover:bg-tgc-green ${isMobile ? 'h-[100px] w-[40%] border-b-2 border-black' : ''}`}>
        <img src={`/product-types/${product.img}`} alt={product.alt} className={`group-last/article:border-b-0 object-cover w-full h-full transition duration-700 group-hover/figure-hover:cursor-pointer group-hover/figure:opacity-50 group-hover/figure:scale-110 ${isMobile ? 'border-black border-r-2' : ''}`} />
      </figure>
    </article>
  )
}

export default ProductType
