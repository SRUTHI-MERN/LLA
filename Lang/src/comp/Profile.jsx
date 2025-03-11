import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [username, setUsername] = useState('User');
  const [language, setLanguage] = useState('English');
  const [progress, setProgress] = useState('0%');
  const [achievements, setAchievements] = useState('No achievements yet');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div style={styles.body}>
      <div style={styles.profileContainer}>
        <h2 style={styles.heading}>Welcome, <span>{username}</span></h2>
        <div style={styles.profileBoxes}>
          <div style={styles.box}>
            <h3>Progress</h3>
            <p>{progress}</p>
          </div>
          <div style={styles.box}>
            <h3>Language</h3>
            <select value={language} onChange={handleLanguageChange} style={styles.select}>
              <option value="English">English</option>
              <option value="Japanese">Japanese</option>
              <option value="French">French</option>
              <option value="Turkish">Turkish</option>
            </select>
          </div>
          <div style={styles.box}>
            <h3>Badges & Achievements</h3>
            <p>{achievements}</p>
          </div>
        </div>
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
    backgroundColor: '#ccffcc',  // Light Green
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  profileContainer: {
    background: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    width: '500px',
  },
  heading: {
    color: '#008000',
  },
  profileBoxes: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginTop: '15px',
  },
  box: {
    background: '#f4f4f4',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
  },
  select: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  // Mobile responsiveness
  '@media (max-width: 600px)': {
    profileContainer: {
      width: '90%',
    },
  },
};

export default Profile;
