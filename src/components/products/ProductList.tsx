import { IProduct } from '../../types'
import Product from './Product'

interface ProductListProps {
  products: IProduct[]
}

function ProductList ({ products }: ProductListProps): JSX.Element {
  return (
    <>
      {products.map((product) => <Product key={product.id} product={product} />)}
    </>
  )
}

export default ProductList
