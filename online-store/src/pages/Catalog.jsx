import React from 'react';
import Product from '../components/Product';

const catalog = [
  {
    title: "Peaches",
    price: 29.99,
    description: "Juicy peaches!",
    image: "./img/peaches.jpg",
    _id: 1
  },
  {
    title: "Watermelon",
    price: 39.99,
    description: "Delicious watermelon!",
    image: "./img/watermelon.jpg",
    _id: 2
  },
  {
    title: "Ginger Root",
    price: 49.99,
    description: "Fresh ginger root!",
    image: "./img/ginger-root.jpg",
    _id: 3
  }
];

const categories = [
  "Fruits",
  "Vegetables",
  "Herbs"
];

function Catalog() {
  return (
    <div className="catalog-container">
      <h1>Check out our fresh produce!</h1>
      <div className="categories">
        {categories.map(cat => <button className='btn btn-outline-success'>{cat}</button>) }
      </div>
      <div className="catalog">
        {catalog.map(prod => <Product key={prod._id} data={prod} />)}
      </div>
    </div>
  );
}

export default Catalog;
