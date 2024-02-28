import React from 'react';
import '../styles/HomePage.css';
import mainImage from '../assets/water.jpeg'; // Import the image file here

function HomePage() {
  return (
    
    <div className="home-container">
         <div className="header"></div>
      {/* Navigation Bar */}
      <nav className="navbar">
        {/* Image Section */}
        <div className="main-image-container">
          <img src={mainImage} alt="Main Visual" className="main-image" />
        </div>
      </nav>

      {/* Quick Sign Up Section */}
      <fieldset className="signup-section">
        <legend> Quick Sign-Up </legend>
        <button className="google-sign-up-btn">
  <img src={require("../assets/google-logo.png")} alt="Google Logo" />
  Sign up with Google
</button>
        
        <p>Or use your email address</p>
        <button className="email-sign-up-btn">Sign Up & Start Your Free Trial</button>
      </fieldset>

      {/* Testimonies Section */}
      <section className="testimonies-section">
        <h2></h2>
        {/* Testimonies would be mapped here */}
      </section>
    </div>
  );
}

export default HomePage;