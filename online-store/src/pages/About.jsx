import React, { useState } from 'react';
import './About.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
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
            <h1 className="about-title">C. Blue</h1>

            {showEmail ? <h5 className="about-title">clblue@yahoo.com</h5> : null}

            <button className='btn btn-success' onClick={showInfo}>
                {showEmail ? (
                    <>
                        <i className="fa-solid fa-envelope-open"></i> Hide Email
                    </>
                ) : (
                    <>
                        <i className="fa-solid fa-envelope"></i> Show Email
                    </>
                )}
            </button>

            <Link to="/contact" className="btn btn-lg btn-danger mt-3">
                <i className="fa-solid fa-inbox"></i> Contact Us
            </Link>
        </div>
    );
}

export default About;
