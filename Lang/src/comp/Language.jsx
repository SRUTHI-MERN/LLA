import React from 'react';
import { Link } from 'react-router-dom';

const Language = () => {
  const navbarStyle = {
    backgroundColor: '#333',
    padding: '1rem',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const logoStyle = {
    color: 'white',
    fontSize: '1.5rem',
    textDecoration: 'none',
  };

  const menuStyle = {
    listStyleType: 'none',
    display: 'flex',
  };

  const itemStyle = {
    marginLeft: '20px',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
  };

  const linkHoverStyle = {
    color: '#ff6347',
  };

  return (
    <nav style={navbarStyle}>
      <div style={containerStyle}>
        <ul style={menuStyle}>
          <li style={itemStyle}>
            <Link to="/English" style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.target.style.color = linkStyle.color}>
              ENGLISH
            </Link>
          </li>
          <li style={itemStyle}>
            <Link to="/Japanese" style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.target.style.color = linkStyle.color}>
              JAPANESE
            </Link>
          </li>
          <li style={itemStyle}>
            <Link to="/Chinese" style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.target.style.color = linkStyle.color}>
              CHINESE
            </Link>
          </li>
          <li style={itemStyle}>
            <Link to="/French" style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.target.style.color = linkStyle.color}>
              FRENCH
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Language;
