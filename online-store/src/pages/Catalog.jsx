import React, { useState } from 'react';
import Product from '../components/Product';
import '../components/Product.css';
import './Catalog.css';

const catalog = [
  {
    title: "Peaches",
    price: 6.99,
    description: "Juicy peaches!",
    image: "./img/peaches.jpg",
    _id: 1
  },
  {
    title: "Watermelon",
    price: 12.99,
    description: "Delicious watermelon!",
    image: "./img/watermelon.jpg",
    _id: 2
  },
  {
    title: "Ginger Root",
    price: 6.99,
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
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const handleAddToCart = (product, quantity) => {
    const newCart = [...cart, { ...product, quantity }];
    setCart(newCart);
    const newTotal = newCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(newTotal);
  };

  return (
    <div className="catalog-container">
      <h4 className='text-warning'>Check out our fresh produce!</h4>
      <div className="categories">
        {categories.map(cat => <button key={cat} className='btn btn-success'>{cat}</button>)}
      </div>
      <div className="catalog">
        {catalog.map(prod => <Product key={prod._id} data={prod} onAddToCart={handleAddToCart} />)}
      </div>
      <h2>Total: ${total.toFixed(2)}</h2>
    </div>
  );
}

export default Catalog;
