import { useState, useEffect } from 'react';
import './Admin.css';
import Swal from 'sweetalert2';
import DataService from '../services/dataService';

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

  // Load products function
  async function loadProducts() {
    const data = await DataService.getProducts();
    setAllProducts(data);
  }

  // Load coupons function
  async function loadCoupons() {
    const data = await DataService.getCoupons();
    setAllCoupons(data);
  }

  // Call loadProducts and loadCoupons when the component mounts
  useEffect(() => {
    loadProducts();
    loadCoupons();
  }, []);

  // Handle coupon input changes
  function handleCoupon(e) {
    const text = e.target.value;
    const name = e.target.name;
    console.log("text changed!", text, name);

    let copy = { ...coupon };
    copy[name] = text;
    setCoupon(copy);
  }

  // Add a new coupon
  async function addCoupon(e) {
    e.preventDefault();
    console.log("Coupon added:", coupon);

    let validCoupon = { ...coupon };
    validCoupon.discount = parseFloat(validCoupon.discount);

    await DataService.saveCoupons(validCoupon);

    let copy = [...allCoupons];
    copy.push(validCoupon);
    setAllCoupons(copy);

    // Show SweetAlert2 alert
    Swal.fire({
      title: 'Success!',
      text: 'Coupon added!',
      icon: 'success',
      confirmButtonText: 'OK'
    });

    // Reset the form
    setCoupon({
      code: "",
      discount: ""
    });
  }

  // Handle product input changes
  function handleProduct(e) {
    const text = e.target.value;
    const name = e.target.name;
    console.log("text changed!", text, name);

    let copy = { ...product };
    copy[name] = text;
    setProduct(copy);
  }

  // Save a new product
  async function saveProduct(e) {
    e.preventDefault();

    let validProd = { ...product };
    validProd.price = parseFloat(validProd.price);

    await DataService.saveProducts(validProd);

    let copy = [...allProducts];
    copy.push(validProd);
    setAllProducts(copy);

    // Show SweetAlert2 alert
    Swal.fire({
      title: 'Success!',
      text: 'Product added!',
      icon: 'success',
      confirmButtonText: 'OK'
    });

    // Reset the form
    setProduct({
      title: "",
      price: "",
      image: "",
      category: "",
      description: ""
    });
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
              <input type="text" className="form-control" id="productName" onChange={handleProduct} name='title' value={product.title} />
            </div>
            <div className="mb-3">
              <label htmlFor="productPrice" className="form-label">Product Price</label>
              <input type="number" className="form-control" id="productPrice" onChange={handleProduct} name='price' value={product.price} />
            </div>
            <div className="mb-3">
              <label htmlFor="productImage" className="form-label">Product Image</label>
              <input type="text" className="form-control" id="productImage" onChange={handleProduct} name='image' value={product.image} />
            </div>
            <div className="mb-3">
              <label htmlFor="productCategory" className="form-label">Product Category</label>
              <input type="text" className="form-control" id="productCategory" onChange={handleProduct} name='category' value={product.category} />
            </div>
            <div className="mb-3">
              <label htmlFor="productDescription" className="form-label">Product Description</label>
              <textarea className="form-control" id="productDescription" rows="3" onChange={handleProduct} name='description' value={product.description}></textarea>
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
              <input type="text" className="form-control" id="couponCode" onChange={handleCoupon} name='code' value={coupon.code} />
            </div>
            <div className="mb-3">
              <label htmlFor="couponDiscount" className="form-label">Discount Percentage</label>
              <input type="number" className="form-control" id="couponDiscount" onChange={handleCoupon} name='discount' value={coupon.discount} />
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
