import React, { useContext, useEffect, useState } from "react";
import "./Checkout.css";
import DataContext from "../state/dataContext";
import Swal from "sweetalert2";

function Checkout() {
  const { cart } = useContext(DataContext);
  const [total, setTotal] = useState(0);
  const [showBillingForm, setShowBillingForm] = useState(false);

  // State for shipping information
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  // State for billing information
  const [billingInfo, setBillingInfo] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    card: "",
    paymentMethod: "",
  });

  // Calculate total price of items in the cart
  useEffect(() => {
    const newTotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
  }, [cart]);

  // Handle shipping form submission
  const handleShippingSubmit = (e) => {
    e.preventDefault();
    console.log("Shipping Info:", shippingInfo);
    setShowBillingForm(true);

    // Reset the shipping form
    setShippingInfo({
      name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
    });
  };

  // Handle billing form submission
  const handleBillingSubmit = (e) => {
    e.preventDefault();
    console.log("Billing Info:", billingInfo);

    // Show success message
    Swal.fire({
      title: "Order Placed!",
      text: "Your order has been successfully placed.",
      icon: "success",
      confirmButtonText: "OK",
    });

    // Reset the billing form
    setBillingInfo({
      name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      email: "",
      card: "",
      paymentMethod: "",
    });

    // Hide the billing form
    setShowBillingForm(false);
  };

  // Handle shipping form input changes
  const handleShippingChange = (e) => {
    const { id, value } = e.target;
    setShippingInfo((prevInfo) => ({
      ...prevInfo,
      [id]: value,
    }));
  };

  // Handle billing form input changes
  const handleBillingChange = (e) => {
    const { id, value } = e.target;
    setBillingInfo((prevInfo) => ({
      ...prevInfo,
      [id]: value,
    }));
  };

  return (
    <div className="checkout-page text-success">
      <h1 className="checkout-title">Checkout</h1>

      {/* Order Summary */}
      <div className="checkout-summary">
        <h2>Order Summary</h2>
        <ul>
          {cart.map((item) => (
            <li key={item._id} className="checkout-item">
              <img
                src={item.image}
                alt={item.title}
                className="checkout-item-image"
              />
              {item.title} - {item.quantity} x ${item.price.toFixed(2)} = $
              {(item.price * item.quantity).toFixed(2)}
            </li>
          ))}
        </ul>
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>

      {/* Shipping Form */}
      {!showBillingForm && (
        <form className="checkout-form" onSubmit={handleShippingSubmit}>
          <h2>Shipping Information</h2>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={shippingInfo.name}
              onChange={handleShippingChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              className="form-control"
              value={shippingInfo.address}
              onChange={handleShippingChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              className="form-control"
              value={shippingInfo.city}
              onChange={handleShippingChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              className="form-control"
              value={shippingInfo.state}
              onChange={handleShippingChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="zip">ZIP Code</label>
            <input
              type="text"
              id="zip"
              className="form-control"
              value={shippingInfo.zip}
              onChange={handleShippingChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-success">
            Continue to Billing
          </button>
        </form>
      )}

      {/* Billing Form */}
      {showBillingForm && (
        <form className="checkout-form" onSubmit={handleBillingSubmit}>
          <h2>Billing Information</h2>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={billingInfo.name}
              onChange={handleBillingChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              className="form-control"
              value={billingInfo.address}
              onChange={handleBillingChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              className="form-control"
              value={billingInfo.city}
              onChange={handleBillingChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              className="form-control"
              value={billingInfo.state}
              onChange={handleBillingChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="zip">ZIP Code</label>
            <input
              type="text"
              id="zip"
              className="form-control"
              value={billingInfo.zip}
              onChange={handleBillingChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={billingInfo.email}
              onChange={handleBillingChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="card">Debit/Credit Card</label>
            <input
              type="text"
              id="card"
              className="form-control"
              value={billingInfo.card}
              onChange={handleBillingChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="paymentMethod">Payment Method</label>
            <select
              id="paymentMethod"
              className="form-control"
              value={billingInfo.paymentMethod}
              onChange={handleBillingChange}
              required
            >
              <option value="creditCard">Credit Card</option>
              <option value="debitCard">Debit Card</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>
          <button type="submit" className="btn btn-success">
            Place Order
          </button>
        </form>
      )}
    </div>
  );
}

export default Checkout;
