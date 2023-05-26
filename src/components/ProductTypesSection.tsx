import ProductTypesList from './product-types/ProductTypesList'
import productTypes from '../mocks/productTypes'
import useMediaQuery from '../hooks/useMediaQuery'

function ProductTypesSection (): JSX.Element {
  const isMobile = useMediaQuery('(max-width:1100px)')

  return (
    <section className='flex flex-wrap border-b-2 border-black'>
      <h1 className={`flex w-full border-b-2 border-black ${isMobile ? 'px-8 py-8 text-3xl' : 'px-24 py-12 text-6xl'}`}>Tipos de producto</h1>
      <ProductTypesList products={productTypes} />
    </section>
  )
}

export default ProductTypesSection
