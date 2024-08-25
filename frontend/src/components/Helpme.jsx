
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PiSealQuestionThin } from "react-icons/pi";

const HelpMe = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'top',
    backgroundColor: '#F5F7FA',
    color: '#333',
    height: '100vh',
    padding: '40px',
    fontFamily: "'Roboto', sans-serif",
  };

  const textContainerStyle = {
    maxWidth: '100%',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
    margin: '0 0 20px 0',
    color: '#333',
  };

  const subHeadingStyle = {
    fontSize: '1em',
    margin: '10px 0',
    color: '#666',
  };

  const formContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'top',
    alignItems: 'center',
    width: '50%',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
  };

  const inputStyle = {
    padding: '10px',
    margin: '10px 0',
    fontSize: '1em',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '1em',
    color: '#FFF',
    background: 'linear-gradient(to right, #7f00ff, #e100ff)',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  };
  
  const iconStyle = {
    color: 'purple',
    fontSize: '15em',
    marginRight: '10px',
    position: 'relative',
    top: '49px'

  };
  

  const addressStyle = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1em',
    color: '#333',
    marginTop: '20px',
    
  };

  return (
    <div>
      <div style={textContainerStyle}>
        <h2 style={headingStyle}>HAVE SOME QUESTIONS?</h2>
        <p style={subHeadingStyle}>Feel free to ask</p>
        
      </div>
    <div style={containerStyle}>
      
        
        {/* <FcQuestions style={iconStyle} /> */}
        <PiSealQuestionThin  style={iconStyle}/>
     
      <div style={formContainerStyle}>
        <form style={formStyle}>
          <input type="text" placeholder="First Name" style={inputStyle} />
          <input type="text" placeholder="Last Name" style={inputStyle} />
          <input type="email" placeholder="What's your email?" style={inputStyle} />
          <textarea placeholder="Your questions..." style={{ ...inputStyle, height: '100px' }} />
          <button type="submit" style={buttonStyle}>SEND MESSAGE</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default HelpMe;
