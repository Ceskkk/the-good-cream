import { IProductType } from '../../types'
import ProductType from './ProductType'

interface ProductTypeListProps {
  products: IProductType[]
}

function ProductTypesList ({ products }: ProductTypeListProps): JSX.Element {
  return (
    <>
      {products.map((product) => <ProductType key={product.id} product={product} />)}
    </>
  )
}

export default ProductTypesList
