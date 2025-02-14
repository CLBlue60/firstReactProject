import { useState } from 'react';
import './Admin.css';

function Admin() {
  const [coupon, setCoupon] = useState({
    code: "",
    discount: ""
  });

  const [allCoupons, setAllCoupons] = useState([]);

  const [product, setProduct] = useState({
    title: "",
    price: "",
    image: "",
    category: "",
    description: ""
  });

  const [allProducts, setAllProducts] = useState([]);

  function handleCoupon(e) {
    const text = e.target.value;
    const name = e.target.name;
    console.log("text changed!", text, name);

    let copy = { ...coupon };
    copy[name] = text;
    setCoupon(copy);
  }

  function addCoupon(e) {
    e.preventDefault();
    console.log("Coupon added:", coupon);

    let copy = [...allCoupons];
    copy.push(coupon);
    setAllCoupons(copy);
  }

  function handleProduct(e) {
    const text = e.target.value;
    const name = e.target.name;
    console.log("text changed!", text, name);

    let copy = { ...product };
    copy[name] = text;
    setProduct(copy);
  }

  function saveProduct(e) {
    e.preventDefault();
    console.log("Product saved:", product);

    let copy = [...allProducts];
    copy.push(product);
    setAllProducts(copy);
  }

  return (
    <div className="admin-page">
      <h1 className="text-success">Admin Page</h1>
      <div className="admin-sections">
        <div className="admin-section">
          <h2>Manage Products</h2>
          <form onSubmit={saveProduct}>
            <div className="mb-3">
              <label htmlFor="productName" className="form-label">Product Name</label>
              <input type="text" className="form-control" id="productName" onBlur={handleProduct} name='title' />
            </div>
            <div className="mb-3">
              <label htmlFor="productPrice" className="form-label">Product Price</label>
              <input type="number" className="form-control" id="productPrice" onBlur={handleProduct} name='price' />
            </div>
            <div className="mb-3">
              <label htmlFor="productImage" className="form-label">Product Image</label>
              <input type="text" className="form-control" id="productImage" onBlur={handleProduct} name='image' />
            </div>
            <div className="mb-3">
              <label htmlFor="productCategory" className="form-label">Product Category</label>
              <input type="text" className="form-control" id="productCategory" onBlur={handleProduct} name='category' />
            </div>
            <div className="mb-3">
              <label htmlFor="productDescription" className="form-label">Product Description</label>
              <textarea className="form-control" id="productDescription" rows="3" onBlur={handleProduct} name='description'></textarea>
            </div>
            <button type="submit" className="btn btn-warning">Save Product</button>
          </form>
          <ul>
            {allProducts.map((prod, index) => (
              <li key={index}>{prod.title} - {prod.category} - ${prod.price}</li>
            ))}
          </ul>
        </div>
        <div className="admin-section">
          <h2>Manage Coupons</h2>
          <form onSubmit={addCoupon}>
            <div className="mb-3">
              <label htmlFor="couponCode" className="form-label">Coupon Code</label>
              <input type="text" className="form-control" id="couponCode" onBlur={handleCoupon} name='code' />
            </div>
            <div className="mb-3">
              <label htmlFor="couponDiscount" className="form-label">Discount Percentage</label>
              <input type="number" className="form-control" id="couponDiscount" onBlur={handleCoupon} name='discount' />
            </div>
            <button type="submit" className="btn btn-success">Add Coupon</button>
          </form>
          <ul>
            {allCoupons.map((cp, index) => (
              <li key={index}>{cp.code} - {cp.discount}%</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Admin;
