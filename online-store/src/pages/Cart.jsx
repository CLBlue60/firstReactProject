import React, { useContext, useEffect, useState } from 'react';
import './Cart.css';
import QuantityPicker from '../components/QuantityPicker';
import DataContext from '../state/dataContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function Cart() {
  const { cart, setCart, clearCart, removeProductFromCart, applyCoupon, appliedCoupon } = useContext(DataContext);
  const [couponCode, setCouponCode] = useState('');

  // Load cart items from local storage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
    }
  }, [setCart]);

  // Update total price whenever cart items change
  // Update cart items in local storage whenever cart items change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
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

  const handleApplyCoupon = () => {
    applyCoupon(couponCode);
    Swal.fire({
      title: 'Coupon Applied!',
      text: `Coupon code ${couponCode} has been applied.`,
      icon: 'success',
      confirmButtonText: 'OK',
      timer: 3000,
      timerProgressBar: true
    });
  };

  const calculateTotal = () => {
    const total = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
    if (appliedCoupon) {
      return total - (total * appliedCoupon.discount / 100);
    }
    return total;
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
            <button className='btn btn-danger' onClick={() => removeProductFromCart(item._id)}>Remove</button>
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter coupon code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        <button className="btn btn-success" onClick={handleApplyCoupon}>Apply Coupon</button>
      </div>
      {appliedCoupon && (
        <div>
          <p>Coupon Applied: {appliedCoupon.code} - {appliedCoupon.discount}% off</p>
        </div>
      )}
      <h2 className="text-danger">Total: ${calculateTotal().toFixed(2)}</h2>
      <div className="cart-buttons">
        <button className="btn btn-danger" onClick={handleClearCart}>Clear All</button>
        <Link to="/checkout" className="btn btn-success">Proceed to Checkout</Link>
      </div>
    </div>
  );
}

export default Cart;
