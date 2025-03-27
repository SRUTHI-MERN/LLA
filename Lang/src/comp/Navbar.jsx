import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>Language Learning App</h1>
      <div>
        <Link to="/" style={styles.navLink}>Home</Link>
        <Link to="/profile" style={styles.navLink}>Profile</Link>
        <Link to="/login" style={styles.navLink}>Login</Link> {/* Styled same as Home & Profile */}
      </div>
    </nav>
  );
};

// CSS-in-JS styles for Navbar
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#6a0dad', // Purple color
    padding: '15px 30px',
    color: 'white',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    margin: '0 15px',
    fontSize: '18px',
  }
};

export default Navbar;
