import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-fluid navbar-menu">
        <Link className="navbar-brand" to="/">Online Store</Link>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/about">About Us</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/cart">View Cart</Link>
      </div>
    </nav>
  );
}

export default Navbar;
