import React from 'react';
import './Home.css';
import supermarketImg from '../assets/supermarketimg.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div
            className='home-container'
            style={{
                backgroundImage: `url(${supermarketImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100vh',
            }}
        >
            <h1>Welcome to the Online Store</h1>
            <Link to="/catalog" className="btn btn-lg btn-success">Discover our amazing products and deals!</Link>
        </div>
    );
};

export default Home;
