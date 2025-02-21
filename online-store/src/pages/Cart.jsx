import React, { useContext, useEffect, useState } from 'react';
import './Cart.css';
import QuantityPicker from '../components/QuantityPicker';
import DataContext from '../state/dataContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, setCart, clearCart } = useContext(DataContext);
  const [total, setTotal] = useState(0);

  // Load cart items from local storage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
    }
  }, [setCart]);

  // Update total price whenever cart items change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    const newTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(newTotal);
  }, [cart]);

  // Update the quantity of a specific item in the cart
  const updateTotal = (index, newQuantity) => {
    const newCartItems = [...cart];
    newCartItems[index].quantity = newQuantity;
    setCart(newCartItems);
  };

  // Get the total number of products in the cart
  const getTotalProducts = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  // Clear the cart and remove items from local storage
  const handleClearCart = () => {
    clearCart();
    localStorage.removeItem('cart');
  };

  return (
    <div className="cart-page">
      <h1 className="text-success">Ready to checkout?</h1>
      <h3 className='text-warning'>We have {getTotalProducts()} products in the cart</h3>
      <div className="cart-items">
        {cart.map((item, index) => (
          <div key={item._id} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <QuantityPicker initialQuantity={item.quantity} onChange={(newQuantity) => updateTotal(index, newQuantity)} />
            <p>Total: ${item.price * item.quantity}</p>
          </div>
        ))}
      </div>
      <h2 className="text-danger">Total: ${total.toFixed(2)}</h2>
      <div className="cart-buttons">
        <button className="btn btn-danger" onClick={handleClearCart}>Clear All</button>
        <Link to="/checkout" className="btn btn-success">Proceed to Checkout</Link>
      </div>
    </div>
  );
}

export default Cart;
