import React from 'react';

const French = () => {
  const containerStyle = {
    textAlign: 'center',
    marginTop: '50px',
  };

  const headingStyle = {
    fontSize: '3rem',
    color: '#333',
    marginBottom: '20px',
  };

  const imageStyle = {
    width: '300px', // You can adjust the size of the image
    height: 'auto',
    borderRadius: '10px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>FRENCH ALPHABETS</h1>
      <img
        style={imageStyle}
        src="https://i.pinimg.com/736x/01/35/52/0135521785b015faf9774311a8cae981.jpg"
        alt="Placeholder"
      />
    </div>
  );
};

export default French;
