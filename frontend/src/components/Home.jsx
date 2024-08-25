

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import ProfileDashboard from './Profile';
import Foot from './footer';
import HelpMe from './Helpme';
import Banner from './Banner';
import Banner2 from './Banner2';

const Home = ({onSelect}) => {
  const containerStyle = {
    width: '100%',
    backgroundColor: '#f5f5f5', // Light background for a professional look
  };

  
  

  return (
    <div id="home" style={containerStyle}>
      <nav className="navbar fixed-top navbar-expand-lg" style={{ backgroundColor: '#ffffff00' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#" onClick={() => {onSelect('home')}}>
            <img src="/logo2.png" alt="UDAPP" width="60" height="48"  style={{borderRadius: '20%',
    border: '5px solid #FFF', position: 'relative', bottom: '6px'}}/>
            <b style={{ fontSize: 'larger', backgroundColor: 'orange', border: '1px, solid,black', borderRadius: '9%',marginLeft: '10px' }}>   S3 FILE MANAGER</b>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav nav-tabs navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end w-100" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <a style={{textDecoration: 'none'}} href='#home'><button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true"><b>Home</b></button></a>
              </li>
              <li className="nav-item dropdown" role="presentation">
                <a className="nav-link dropdown-toggle" data-bs-target="#navbarDropdownMenuLink-pane" type="link" aria-controls="help-tab-pane" aria-selected="true" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="navbarDropdownMenuLink">
                  <b>My Files</b>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#" onClick={() => onSelect('upload')}><i>Upload Files</i></a></li>
                  <li><a className="dropdown-item" href="#" onClick={() => onSelect('download')}><i>Download Files</i></a></li>
                  <li><a className="dropdown-item" href="#" onClick={() => onSelect('delete')}><i>Delete Files</i></a></li>
                  <li><hr className="dropdown-divider"></hr></li>
                  <li><a className="dropdown-item" href="#" onClick={() => onSelect('available')}><i>Available Files</i></a></li>
                </ul>
              </li>
              <li className="nav-item" role="presentation">
                <a style={{textDecoration: 'none'}} href='#profile'><button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false"><b>Profile</b></button></a>
              </li>
              <li className="nav-item" role="presentation">
                <a style={{textDecoration: 'none'}} href='#help'><button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false"><b>Help</b></button></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      
      <Banner/>
      <Banner2 id= 'learn'/>
      <div id='profile' style={{ padding: '20px' }}><ProfileDashboard/></div>
      <div id='help' style={{ padding: '20px' }}><HelpMe/> </div>
      <Foot/>
    </div>
  );
};

export default Home;

