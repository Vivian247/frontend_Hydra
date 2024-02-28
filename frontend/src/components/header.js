import React from 'react';
import { NavLink } from 'react-router-dom';
import image_logo from '../assets/hydra_logo.png'; 

const Header = () => {
  return (
    <div className="home-container">
     <div className="header-text white-text">HYDRA</div>
      <div className="header-text1 black-text">Sip Happens, Stay Hydrated!</div>      
      <div className="header-text3 black-text">HYDRA</div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <img src={image_logo} alt="HYDRA Logo" className="logo" />
        <div className="nav-links">
          <NavLink to="/login" className="login-btn">Login</NavLink>
          <button className="menu-btn">☰</button>
        </div>
      </nav>
      {/* Rest of the component */}
    </div>
  );
};

export default Header;