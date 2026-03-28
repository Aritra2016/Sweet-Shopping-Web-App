
import React from 'react'

const ProductCard = ({item, addToCart }) => {
  return (
      <div className="border p-4 rounded shadow">
      <h2>{item.name}</h2>
      <p>₹{item.price}</p>
      <button onClick={() => addToCart(item)}>
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
