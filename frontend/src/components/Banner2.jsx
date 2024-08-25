import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUpload, FaDownload, FaTrashAlt, FaListUl } from 'react-icons/fa';

const Banner2 = () => {
  const [activeTab, setActiveTab] = useState('upload');

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F5F7FA',
    color: '#fff',
    padding: '20px',
    fontFamily: "'Roboto', sans-serif",
    width: '80%',
    margin: 'auto',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    borderRadius: '10px',
    marginTop: '50px',
  };

  const buttonStripStyle = {
    display: 'flex',
    width: '100%',
    marginBottom: '20px',
  };

  const buttonStyle = (isActive) => ({
    flex: 1,
    padding: '15px 0',
    fontSize: '1.2em',
    cursor: 'pointer',
    backgroundColor: isActive ? '#ff9800' : '#333',
    color: '#FFF',
    border: 'none',
    transition: 'background-color 0.3s ease',
    textAlign: 'center',
  });

  const contentAreaStyle = {
    display: 'flex',
    width: '100%',
  };

  const leftPaneStyle = {
    flex: 2,
    padding: '20px',
  };

  const rightPaneStyle = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const headingStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#E1306C',
  };

  const descriptionStyle = {
    fontSize: '1em',
    color: '#666',
  };

  const circleImageStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'upload':
        return (
          <div style={contentAreaStyle}>
            <div style={leftPaneStyle}>
              <h2 style={headingStyle}>Upload Files</h2>
              <p style={descriptionStyle}>Upload your files easily with our user-friendly interface. Drag and drop functionality, coupled with secure file transfer protocols, ensures your data is safe and quickly accessible from anywhere.
              </p>
            </div>
            <div style={rightPaneStyle}>
              <div style={{ ...circleImageStyle, backgroundImage: `url(/Upload.jpeg)` }}></div>
            </div>
          </div>
        );
      case 'download':
        return (
          <div style={contentAreaStyle}>
            <div style={leftPaneStyle}>
              <h2 style={headingStyle}>Download Files</h2>
              <p style={descriptionStyle}>Download files securely and quickly from our S3 manager. Our system supports batch downloading and ensures your data is protected during transfer, allowing for fast and efficient access.</p>
            </div>
            <div style={rightPaneStyle}>
              <div style={{ ...circleImageStyle, backgroundImage: `url(/Download.jpeg)` }}></div>
            </div>
          </div>
        );
      case 'delete':
        return (
          <div style={contentAreaStyle}>
            <div style={leftPaneStyle}>
              <h2 style={headingStyle}>Delete Files</h2>
              <p style={descriptionStyle}>Delete your unnecessary files with just a click. Our intuitive interface allows you to manage your storage efficiently, ensuring that you can remove unwanted files safely and easily.</p>
            </div>
            <div style={rightPaneStyle}>
              <div style={{ ...circleImageStyle, backgroundImage: `url(/Delete.jpeg)` }}></div>
            </div>
          </div>
        );
      case 'list':
        return (
          
          <div style={contentAreaStyle}>
            <div style={leftPaneStyle}>
              <h2 style={headingStyle}>List Files</h2>
              <p style={descriptionStyle}>List all your S3 files in an organized manner. Our file manager provides a clear and concise listing of your data, making it easy to find, manage, and utilize your stored information effectively.</p>
            </div>
            <div style={rightPaneStyle}>
              <div style={{ ...circleImageStyle, backgroundImage: `url(/List.jpeg)` }}></div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h1 style={{marginTop: '40px', borderRadius: '2%', background: 'linear-gradient(to right, #7f00ff, #e100ff)', color: '#fff'}}><center>You can do all types of <b style={{color: 'red'}}> CRUD </b>operations in your bucket directly form here...</center> </h1>
    <div style={containerStyle}>
      <div style={buttonStripStyle}>
        <button
          style={buttonStyle(activeTab === 'upload')}
          onClick={() => setActiveTab('upload')}
        >
          <FaUpload /> Upload
        </button>
        <button
          style={buttonStyle(activeTab === 'download')}
          onClick={() => setActiveTab('download')}
        >
          <FaDownload /> Download
        </button>
        <button
          style={buttonStyle(activeTab === 'delete')}
          onClick={() => setActiveTab('delete')}
        >
          <FaTrashAlt /> Delete
        </button>
        <button
          style={buttonStyle(activeTab === 'list')}
          onClick={() => setActiveTab('list')}
        >
          <FaListUl /> List
        </button>
      </div>
      {renderContent()}
    </div>
    </div>
  );
};

export default Banner2;
