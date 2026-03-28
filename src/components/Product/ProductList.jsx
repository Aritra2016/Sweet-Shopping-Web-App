import React from 'react'
import ProductCard  from './ProductCard'

const ProductList = ({ products, addToCart }) => {
  return (
     <div className="grid grid-cols-3 gap-4">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          item={item}
          addToCart={addToCart}
        />
      ))}
    </div>
  )
}

export default ProductList
