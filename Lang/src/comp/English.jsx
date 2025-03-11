import React from 'react';

const English = () => {
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
      <h1 style={headingStyle}>ENGLISH ALPHABETS</h1>
      <img
        style={imageStyle}
        src="data:image/png;base64,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" // Replace with your image URL
        alt="Placeholder"
      />
    </div>
  );
};

export default English;
