// Import React to use JSX
import React from 'react';

// Import the CSS file for styling the Home component
import './Home.css';

// Import the image to be used as the background
import supermarketImg from '../assets/supermarketimg.jpg';

// Import Link from react-router-dom to navigate to different routes
import { Link } from 'react-router-dom';

// Define the Home component
const Home = () => {
    return (
        // Container div with background image and styling
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
            {/* Title of the home page */}
            <h1 className="home-title">Welcome to Life Goods!</h1>
            {/* Link to navigate to the catalog page */}
            <Link to="/catalog" className="btn btn-lg btn-success">Discover our amazing products and deals!</Link>
        </div>
    );
};

// Export the Home component as the default export
export default Home;
