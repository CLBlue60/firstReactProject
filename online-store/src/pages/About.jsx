import React, { useState } from 'react';
import './About.css';
import supermarketImg from '../assets/supermarketimg.jpg';
import { Link } from 'react-router-dom';

function About() {
    const [showEmail, setShowEmail] = useState(false);

    function showInfo() {
        setShowEmail(!showEmail);
    }

    return (
        <div
            className="about-page"
            style={{ backgroundImage: `url(${supermarketImg})` }}
        >
            <h1>C. Blue</h1>

            {showEmail ? <h5>clblue@yahoo.com</h5> : null}

            <button className='btn btn-success' onClick={showInfo}>
                {showEmail ? 'Hide Email' : 'Show Email'}
            </button>

            <Link to="/contact" className="btn btn-lg btn-danger mt-3">Contact Us</Link>
        </div>
    );
}

export default About;
