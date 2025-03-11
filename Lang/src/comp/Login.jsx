import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here, such as an API call or form validation
    console.log('Email:', email);
    console.log('Password:', password);
    // Redirect or further actions can be added
    navigate('/home');  // Example redirection after login
  };

  return (
    <div style={styles.body}>
      <div style={styles.loginContainer}>
        <h2 style={styles.title}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              style={styles.input}
            />
          </div>
          <div>
            <label>Password:</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>Login</button>
        </form>
        <p style={styles.paragraph}>
          Don't have an account? <Link to="/Signup" style={styles.link}>Sign up</Link>
        </p>
      </div>
    </div>
  );
};

// CSS-in-JS styles
const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    textAlign: 'center',
    backgroundColor: '#f6ccff',  // Light Green
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  loginContainer: {
    background: 'white',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    color: '#47085c',
    marginBottom: '20px',
  },
  input: {
    width: '90%',
    padding: '12px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
  },
  button: {
    width: '95%',
    padding: '12px',
    backgroundColor: '#a455af',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '18px',
    transition: '0.3s',
    marginTop: '10px',
  },
  buttonHover: {
    backgroundColor: '#006400',
  },
  paragraph: {
    marginTop: '15px',
    fontSize: '14px',
  },
  link: {
    color: '#801791',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Login;
