import React from 'react';
import './Product.css';
import QuantityPicker from './QuantityPicker';

function Product(props) {
  const add = () => {
    // Add your logic here
    console.log('Add button clicked');
  };
  return (
    <div className="product">
      <img src={props.data.image} alt={props.data.title} />
      <h3>{props.data.title}</h3>
      <p>{props.data.description}</p>
      <p>${props.data.price}</p>

    <div className='prod-controls'>
        <QuantityPicker />
        <button onClick={add} className='btn btn-warning'>Add</button>
    </div>
    </div>
  );
}

export default Product;
