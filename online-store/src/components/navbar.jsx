import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import './navbar.css';
import { Link, useLocation } from 'react-router-dom';
import DataContext from '../state/dataContext';

function Navbar() {
  const location = useLocation();
  const user = useContext(DataContext).user;

  return (
    <nav className="navbar">
      <div className="container-fluid navbar-menu">
        <Link className="navbar-brand" to="/">Online Store</Link>
        <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">
          <i className="fa-solid fa-house"></i> Home
        </Link>
        <Link className={`nav-link ${location.pathname === '/catalog' ? 'active' : ''}`} to="/catalog">
        <i class="fa-solid fa-book-open"></i>Catalog</Link>
        <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">
        <i class="fa-solid fa-circle-info"></i>About Us</Link>
        <Link className={`nav-link ${location.pathname === '/admin' ? 'active' : ''}`} to="/admin">
        <i class="fa-solid fa-user-tie"></i>Admin</Link>
        <Link className={`nav-link ${location.pathname === '/cart' ? 'active' : ''}`} to="/cart">
          <i className="fa-solid fa-cart-shopping"></i> View Cart
        </Link>
        <Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">
        <i class="fa-solid fa-address-book"></i>Contact</Link>
        <button className="btn btn-success user-info" type="button">
          <i className="fa-solid fa-user"></i>
          Hello: {user.name}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
