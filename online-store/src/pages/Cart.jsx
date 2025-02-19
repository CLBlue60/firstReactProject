import React, { useContext, useEffect, useState } from 'react';
import './Cart.css';
import QuantityPicker from '../components/QuantityPicker';
import DataContext from '../state/dataContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, setCart, clearCart } = useContext(DataContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
    }
  }, [setCart]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    const newTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(newTotal);
  }, [cart]);

  const updateTotal = (index, newQuantity) => {
    const newCartItems = [...cart];
    newCartItems[index].quantity = newQuantity;
    setCart(newCartItems);
  };

  const getTotalProducts = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

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
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <QuantityPicker initialQuantity={item.quantity} onChange={(newQuantity) => updateTotal(index, newQuantity)} />
            <p>Total: ${item.price * item.quantity}</p>
          </div>
        ))}
      </div>
      <h2 className="text-danger">Total: ${total.toFixed(2)}</h2>
      <button className="btn btn-danger mt-3" onClick={handleClearCart}>Clear All</button>
      <Link to="/checkout" className="btn btn-success mt-3">Proceed to Checkout</Link>
    </div>
  );
}

export default Cart;
