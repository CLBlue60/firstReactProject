import React from 'react';
import Product from '../components/Product';

function Catalog() {
  const products = [
    { name: 'Product 1', price: 29.99, description: 'Description for product 1' },
    { name: 'Product 2', price: 39.99, description: 'Description for product 2' },
    { name: 'Product 3', price: 49.99, description: 'Description for product 3' },
  ];

  return (
    <div className="catalog">
      {products.map((product, index) => (
        <Product key={index} {...product} />
      ))}
    </div>
  );
}

export default Catalog;
