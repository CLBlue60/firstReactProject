import React, { useState } from 'react';

function About() {

    const [showEmail, setShowEmail] = useState(false);

    function showInfo() {
        setShowEmail(!showEmail);
    }
  return (
    <div className="text-success about page">
      <h1>C. Blue</h1>

      {showEmail ? <h5>clblue@yahoo.com</h5> : null}

      <button className='btn btn-success' onClick={showInfo}>
        {
            showEmail
            ? 'Hide Email'
            : 'Show Email'
            }
        </button>
    </div>
  );
}

export default About;
