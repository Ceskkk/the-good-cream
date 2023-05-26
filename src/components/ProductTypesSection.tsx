import ProductTypesList from './product-types/ProductTypesList'
import productTypes from '../mocks/productTypes'
import TitleSection from './shared/TitleSection'

function ProductTypesSection (): JSX.Element {
  return (
    <section className='flex flex-wrap border-b-2 border-black'>
      <TitleSection title='Tipos de producto' />
      <ProductTypesList products={productTypes} />
    </section>
  )
}

export default ProductTypesSection
