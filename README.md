# apu314-Product-Card

This is a test package to deploy to NPM

## Adolfo Unturbe Pérez

## Example

```jsx
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'apu314-product-card'

<ProductCard
  product={product}
  className="bg-dark text-white"
  initialValues={{
    count: 4,
    maxCount: 10,
  }}
>
  {({reset, increaseBy, count, isMaxCountReached, product, maxCount}) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```
