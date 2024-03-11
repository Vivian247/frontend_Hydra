import React from 'react';
import { NavLink } from 'react-router-dom';
import image_logo from '../assets/hydra_logo.png'; 
import header from '../styles/header.css'

const Header = () => {
  return (
    <div className="home-container">       
      {/* Navigation Bar */}
      <nav className="navbar">
        <img src={image_logo} alt="HYDRA Logo" className="logo" />
        <div className="nav-links">
          <NavLink to="/login" className="login-btn">Login</NavLink>
          <button aria-label="More options" class="vertical-ellipsis">⋮</button>
        </div>
      </nav>
      {/* Rest of the component */}
    </div>
  );
};

export default Header;