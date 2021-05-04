import React from 'react';
import logo_main from './images/tnaMain1.png';
import tnalogo_yellow from './images/tnalogo_yellow.png';
import './App.css';
import './css/leftcontainer.css';
import './index.css';

export default function LeftContainer() {
  return (
    <div className="LeftContainer">
      <div className="flexmenu">
        <div className="index">
          <div className="logo">
            <img src={logo_main} alt="main logo front" />
            <img src={tnalogo_yellow} className="img-top" alt="hover logo back" />
          </div>
          <div className="name">
            <h1>Turku <br/> Nepal Association <br/> Ry</h1>
          </div>
        </div>

        <div className="Pages1">
        <div className="submenu1">
            <div className="gtk">
              <span>Good to know</span>
            </div>
            <div className="events">
              <span>Events</span>
            </div>
          </div>
          <div className="submenu2">
            <div className="members">
              <span>Members</span>
            </div>
            <div className="gallery">
              <span>Gallery</span>
            </div>
          </div>
          
        </div>

        <div className="pages2">
          <div className="contact">
            <span>Contact Us</span>
          </div>
        </div>
      </div>
    </div>
  );
}
