import type { ProductCardHOCProps } from '../interfaces'

import { ProductCard as ProductCardHOC } from './ProductCard'
import { ProductTitle } from './ProductTitle'
import { ProductImage } from './ProductImage'
import { ProductButtons } from './ProductButtons'

// export { ProductCard } from './ProductCard'
export { ProductImage } from './ProductImage'
export { ProductTitle } from './ProductTitle'
export { ProductButtons } from './ProductButtons'

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Image: ProductImage,
  Title: ProductTitle,
  Buttons: ProductButtons
})

export default ProductCard
