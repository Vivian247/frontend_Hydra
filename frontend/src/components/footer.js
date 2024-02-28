const Footer = () => {
    // Define styles as objects
    const footerStyle = {
      backgroundColor: "#0a0a0a", // a deep gray or black color
      color: "white",
      fontSize: "0.9em",
      textAlign: "center",
      padding: "20px 0",
      position: "relative",
      bottom: "0",
      width: "100%"
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