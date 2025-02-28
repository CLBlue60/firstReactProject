import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import './Catalog.css';
import DataContext from '../state/dataContext';
import Swal from 'sweetalert2';
import DataService from '../services/dataService';

const categories = [
  "All",
  "Fruits",
  "Vegetables",
  "Herbs"
];

function Catalog() {
  const [allProducts, setAllProducts] = useState([]);
  const { cart, addProductToCart } = useContext(DataContext);
  const [total, setTotal] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const catalog = allProducts;

  async function loadProducts() {
    const data = await DataService.getProducts();
    setAllProducts(data);
  }

  useEffect(() => {
    const newTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(newTotal);
    loadProducts();
  }, [cart]);

  const handleAddToCart = (product, quantity) => {
    addProductToCart(product, quantity);

    Swal.fire({
      title: 'Added to Cart!',
      text: `${quantity} ${product.title}(s) added to the cart!`,
      icon: 'success',
      confirmButtonText: 'OK',
      timer: 3000,
      timerProgressBar: true
    });
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredCatalog = selectedCategory === "All" ? catalog : catalog.filter(prod => prod.category === selectedCategory);

  return (
    <div className="catalog-container">
      <h4 className='text-warning'>Check out our fresh produce!</h4>
      <div className="categories">
        {categories.map(cat => (
          <button key={cat} className='btn btn-success' onClick={() => handleCategoryChange(cat)}>
            {cat}
          </button>
        ))}
      </div>
      <div className="catalog">
        {filteredCatalog.map(prod => <Product key={prod._id} data={prod} onAddToCart={handleAddToCart} />)}
      </div>
      <h2 className='text-danger'>Total: ${total.toFixed(2)}</h2>
      <Link to="/cart">
        <button className="btn btn-warning">Go to Cart</button>
      </Link>
    </div>
  );
}

export default Catalog;
