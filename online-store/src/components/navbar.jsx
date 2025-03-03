// Import necessary libraries and styles
import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import './navbar.css';
import { Link, useLocation } from 'react-router-dom';
import DataContext from '../state/dataContext';

// Define the Navbar component
function Navbar() {
  // Get the current location and data context
  const location = useLocation();
  const { user, cart } = useContext(DataContext);

  // Get total number of products in the cart
  function getProdsInCart() {
    let sum = 0;

    // Sum the quantity of each product in the cart
    for(let i = 0; i < cart.length; i++) {
      let prod = cart[i];
      sum += prod.quantity;
    }
    return sum;
  }

  return (
    <nav className="navbar">
      <div className="container-fluid navbar-menu">
        {/* Link to the home page */}
        <Link className="navbar-brand" to="/">Life Goods!</Link>
        {/* Link to the home page with active class if on home page */}
        <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">
          <i className="fa-solid fa-house"></i> Home
        </Link>
        {/* Link to the catalog page with active class if on catalog page */}
        <Link className={`nav-link ${location.pathname === '/catalog' ? 'active' : ''}`} to="/catalog">
          <i className="fa-solid fa-book-open"></i> Catalog
        </Link>
        {/* Link to the about us page with active class if on about us page */}
        <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">
          <i className="fa-solid fa-circle-info"></i> About Us
        </Link>
        {/* Link to the admin page with active class if on admin page */}
        <Link className={`nav-link ${location.pathname === '/admin' ? 'active' : ''}`} to="/admin">
          <i className="fa-solid fa-user-tie"></i> Admin
        </Link>
        {/* Link to the contact page with active class if on contact page */}
        <Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">
          <i className="fa-solid fa-address-book"></i> Contact
        </Link>
        {/* Link to the checkout page with active class if on checkout page */}
        <Link className={`nav-link ${location.pathname === '/checkout' ? 'active' : ''}`} to="/checkout">
          <i className="fa-solid fa-credit-card"></i> Checkout
        </Link>
        {/* Link to the cart page with the total number of products in the cart */}
        <Link className='end' to='/cart'>
          <i className="fa-solid fa-cart-shopping"></i> {getProdsInCart()}
        </Link>
        {/* Button to display user information */}
        <button className="btn btn-success user-info" type="button">
          <i className="fa-solid fa-user"></i>
          Hello: {user.name}
        </button>
      </div>
    </nav>
  );
}

// Export the Navbar component as the default export
export default Navbar;
