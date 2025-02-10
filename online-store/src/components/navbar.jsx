import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-success">
      <div className="container-fluid navbar-menu">
        <a className="navbar-brand" href="/home">Online Store</a>
        <a href="/account">Account</a>
        <a href="/products">Products</a>
        <a href="/cart">Cart</a>
      </div>
    </nav>
  );
}

export default Navbar;
