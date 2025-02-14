import React from 'react';
import './Cart.css';

function Cart() {
  // For now, we'll use some mock data for the cart items
  const cartItems = [
    {
      title: "Peaches",
      price: 29.99,
      quantity: 2,
      _id: 1
    },
    {
      title: "Watermelon",
      price: 39.99,
      quantity: 1,
      _id: 2
    }
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1 className="text-success">Your Cart</h1>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item._id} className="cart-item">
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total: ${item.price * item.quantity}</p>
          </div>
        ))}
      </div>
      <h2 className="text-success">Total: ${total.toFixed(2)}</h2>
    </div>
  );
}

export default Cart;
