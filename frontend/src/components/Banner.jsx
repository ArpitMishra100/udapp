import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Banner = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    color: '#333',
    height: '100vh',
    padding: '40px',
    position: 'relative',
    fontFamily: "'Roboto', sans-serif",
  };

  const textContainerStyle = {
    zIndex: 2,
    maxWidth: '50%',
  };

  const headingStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
    margin: '0 0 10px 0',
    color: '#333',
  };

  const nameStyle = {
    color: '#e100ff',
  };

  const subHeadingStyle = {
    fontSize: '1em',
    margin: '10px 0',
    color: '#666',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '1em',
    color: '#FFF',
    background: '#ff0000c4',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  };

  const imageStyle = {
    position: 'absolute',
    right: '4px',
    bottom: '41px',
    width: '60%',
    height: 'auto',
    zIndex: 1,
    
  };

  return (
    <div style={containerStyle}>
      <div style={textContainerStyle}>
        {/* <p style={subHeadingStyle}>Hello</p> */}
        <h2 style={headingStyle}>Welcome, <span style={nameStyle}>Users</span></h2>
        <p style={subHeadingStyle}>
        Effortlessly manage your <b style={{color: "orange"}}>Amazon S3</b> files with our sleek, powerful, and user-friendly file manager
        </p>
        <a href='learn'><button style={buttonStyle}>Learn more</button></a>
      </div>
      <img src="/homeBackground.jpg" alt="Profile" style={imageStyle} />
    </div>
  );
};

export default Banner;

