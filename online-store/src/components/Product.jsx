import React, { useState } from 'react';
import './Product.css';
import QuantityPicker from './QuantityPicker';

function Product({ data, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  // Handle quantity change
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  // Handle adding product to cart
  const handleAddToCart = () => {
    onAddToCart(data, quantity);
    setQuantity(1);
  };

  const totalPrice = (data.price * quantity).toFixed(2);

  return (
    <div className="card">
      <img src={data.image} className="card-img-top" alt={data.title} />
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.description}</p>
        <p className="card-text">Price: ${data.price}</p>
        <QuantityPicker initialQuantity={quantity} onChange={handleQuantityChange} />
        <p className="card-text mt-2">Total: ${totalPrice}</p>
        <button className="btn btn-warning mt-2" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
