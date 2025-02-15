import React, { useState } from 'react';
import './Cart.css';
import QuantityPicker from '../components/QuantityPicker';

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      title: "Peaches",
      price: 6.99,
      quantity: 2,
      _id: 1
    },
    {
      title: "Watermelon",
      price: 12.99,
      quantity: 1,
      _id: 2
    }
  ]);

  const [total, setTotal] = useState(() => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  });

  const updateTotal = (index, newQuantity) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity = newQuantity;
    setCartItems(newCartItems);
    const newTotal = newCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(newTotal);
  };

  return (
    <div className="cart-page">
      <h1 className="text-success">Your Cart</h1>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={item._id} className="cart-item">
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <QuantityPicker onChange={(newQuantity) => updateTotal(index, newQuantity)} />
            <p>Total: ${item.price * item.quantity}</p>
          </div>
        ))}
      </div>
      <h2 className="text-success">Total: ${total.toFixed(2)}</h2>
    </div>
  );
}

export default Cart;
