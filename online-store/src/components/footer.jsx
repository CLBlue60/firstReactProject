import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';

function Footer() {
  return (
    <footer className="bg-success text-white text-center py-3">
      <div className="container">
        <p className="mb-1">Created by C. Blue</p>
        <p className="mb-0">&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
