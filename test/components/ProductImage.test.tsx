import React from 'react'
import renderer from 'react-test-renderer';
import ProductCard, { ProductImage } from '../../src/components';
import { product2 } from '../data/products';



describe('ProductImage', () => {
  test('should Show the ProductImage component with the custom image', () => {
    const wrapper = renderer.create(
      <ProductImage img='./coffee-mug.png' />
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  test('should Show the ProductImage componente with the image from the product data', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {
          () => (
            <ProductImage />
          )
        }
      </ProductCard>
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
