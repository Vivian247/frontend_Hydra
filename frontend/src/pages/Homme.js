import React from 'react';
import '../styles/HomePage.css';

function Homepage() {
  return (
    <div className="homepage">
      <header className="header">        
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
      
      <div className="centered-image-container">
            <img src={require("../assets/forest.jpg")} alt="Centered Example" />
          </div>

      <main className="main-content">
        <div className="signup-container">
          {/* Image to be centered */}
          
          
          {/* Quick Sign Up Section */}
          <fieldset className="signup-section">
            <legend> Quick SignUp </legend>
            <button className="google-sign-up-btn">
              <img src={require("../assets/google-logo.png")} alt="Google Logo" /> Sign up with Google
            </button>        
            <p>Or use your email address</p>
            <button className="email-sign-up-btn">Sign Up & Start Your Free Trial</button>     
          </fieldset>       
        </div>
      </main>
     
    </div>
  );
}
  
export default Homepage;