import React from 'react'
import Product from '../components/product'
import products from '../data.json'

const ProductListings = () => {
  return (
    <div className='products-container'>
      <h2>All Products</h2>
      <div className="products">
      {products.map(product=><Product product={product}/>)}
        
      </div>
    </div>
  )
}

export default ProductListings