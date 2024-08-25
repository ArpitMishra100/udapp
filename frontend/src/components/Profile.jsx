

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const ProfileDashboard = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F7FA', // Light background color similar to the image
    color: '#333', // Darker text color for contrast
    height: '100vh',
    padding: '40px',
    fontFamily: "'Roboto', sans-serif",
  };

  const textContainerStyle = {
    maxWidth: '50%',
    textAlign: 'left',
  };

  const headingStyle = {
    fontSize: '3em',
    fontWeight: 'bold',
    margin: '0',
    color: '#333',
  };

  const subHeadingStyle = {
    fontSize: '1.5em',
    margin: '10px 0',
    color: '#666',
  };

  const imageContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  };

  const imageStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    border: '5px solid #FFF',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const buttonContainerStyle = {
    marginTop: '20px',
  };

  const buttonStyle = {
    margin: '0 10px',
    padding: '10px 20px',
    fontSize: '1em',
    color: '#FFF',
    backgroundColor: '#0077B5', // LinkedIn blue color
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
  };

  const instagramButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#E1306C', // Instagram pink color
  };

  return (
    <div style={containerStyle}>
      <div style={textContainerStyle}>
        <p>Hello</p>
        <h1 style={headingStyle}>I'm <span style={{ color: '#E1306C' }}>Arpit Mishra</span></h1>
        <p style={subHeadingStyle}>
          This is a simple website that I have created. With this website we can easily do crud operations with our <b style={{color: 'orange'}}>Amazon S3</b> bucket.
        </p>

        
        <div style={buttonContainerStyle}>
          <a href="https://www.linkedin.com/in/arpit-mishra-63902a2b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" style={buttonStyle}>
            <FaLinkedin style={{ marginRight: '8px' }} /> LinkedIn
          </a>
          <a href="https://www.instagram.com/arpit_mishra_mle24" target="_blank" rel="noopener noreferrer" style={instagramButtonStyle}>
            <FaInstagram style={{ marginRight: '8px' }} /> Instagram
          </a>
        </div>
       
        
      </div>
      <div style={imageContainerStyle}>
        <img src="/myprofile.jpeg" alt="Profile" style={imageStyle} />
      </div>
    </div>
  );
};

export default ProfileDashboard;

