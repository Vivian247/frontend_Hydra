import React from 'react';
// Import the background image from your assets directory
import backgroundImage from '../assets/black.jpg'; // Adjust the path as necessary sea-water-waves-blue-wallpaper-preview.jpg

const Footer = () => {
  // Define styles as objects
  const footerStyle = {
    backgroundImage: `url(${backgroundImage})`, // Use the imported image here
    color: "white",
    fontSize: "0.9em",
    textAlign: "center",
    padding: "20px 0",
    position: "relative",
    bottom: "0",
    width: "100%",
    backgroundSize: 'cover', // Ensure the background covers the entire footer
    backgroundPosition: 'center' // Center the background image
  };

  const sloganStyle = {
    fontStyle: "italic",
    margin: "10px 0"
  };

  const linkStyle = {
    color: "#4ba3c7", // a light blue color matching the logo
    textDecoration: "none"
  };

  // JSX for the component
  return (
    <footer style={footerStyle}>
      <p style={sloganStyle}>Efficient Tracking & Recording</p>
      <p>Do the things you do, but better!</p>
      <a href="https://www.hydra.com" style={{ ...linkStyle, color: 'green' }}>www.hydra.com</a>
      <p>&copy; {new Date().getFullYear()} Hydra</p>
    </footer>
  );
};

export default Footer;