// Import React and useState hook
import React, { useState } from 'react';
// Import PropTypes for type checking
import PropTypes from 'prop-types';
// Import CSS file for styling the Product component
import './Product.css';
// Import QuantityPicker component for selecting product quantity
import QuantityPicker from './QuantityPicker';

// Define the Product component
function Product({ data, onAddToCart }) {
  // State to manage the quantity of the product
  const [quantity, setQuantity] = useState(1);

  // Handle quantity change
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  // Handle adding product to cart
  const handleAddToCart = () => {
    onAddToCart(data, quantity);
    // Reset quantity to 1 after adding to cart
    setQuantity(1);
  };

  // Calculate the total price based on quantity
  const totalPrice = (data.price * quantity).toFixed(2);

  return (
    // Card container for the product
    <div className="card">
      {/* Product image */}
      <img src={data.image} className="card-img-top" alt={data.title} />
      <div className="card-body">
        {/* Product title */}
        <h5 className="card-title">{data.title}</h5>
        {/* Product description */}
        <p className="card-text">{data.description}</p>
        {/* Product price */}
        <p className="card-text">Price: ${data.price}</p>
        {/* Quantity picker component */}
        <QuantityPicker initialQuantity={quantity} onChange={handleQuantityChange} />
        {/* Total price based on quantity */}
        <p className="card-text mt-2">Total: ${totalPrice}</p>
        {/* Button to add product to cart */}
        <button className="btn btn-warning mt-2" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

// Define prop types for the Product component
Product.propTypes = {
  data: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

// Export the Product component as the default export
export default Product;
