import React from 'react';
import './Admin.css';

function Admin() {
  return (
    <div className="admin-page">
      <h1 className="text-success">Admin Page</h1>
      <div className="admin-sections">
        <div className="admin-section">
          <h2>Manage Products</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="productName" className="form-label">Product Name</label>
              <input type="text" className="form-control" id="productName" />
            </div>
            <div className="mb-3">
              <label htmlFor="productPrice" className="form-label">Product Price</label>
              <input type="number" className="form-control" id="productPrice" />
            </div>
            <div className="mb-3">
              <label htmlFor="productDescription" className="form-label">Product Description</label>
              <textarea className="form-control" id="productDescription" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-warning">Add Product</button>
          </form>
        </div>
        <div className="admin-section">
          <h2>Manage Coupons</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="couponCode" className="form-label">Coupon Code</label>
              <input type="text" className="form-control" id="couponCode" />
            </div>
            <div className="mb-3">
              <label htmlFor="couponDiscount" className="form-label">Discount Percentage</label>
              <input type="number" className="form-control" id="couponDiscount" />
            </div>
            <button type="submit" className="btn btn-success">Add Coupon</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Admin;
