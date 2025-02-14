import React, { useState } from 'react';
import './About.css';
import supermarketImg from '../assets/supermarketimg.jpg'; // Import the image

function About() {
    const [showEmail, setShowEmail] = useState(false);

    function showInfo() {
        setShowEmail(!showEmail);
    }

    return (
        <div
            className="about-page"
            style={{ backgroundImage: `url(${supermarketImg})` }} // Use the imported image
        >
            <h1>C. Blue</h1>

            {showEmail ? <h5>clblue@yahoo.com</h5> : null}

            <button className='btn btn-success' onClick={showInfo}>
                {showEmail ? 'Hide Email' : 'Show Email'}
            </button>
        </div>
    );
}

export default About;
