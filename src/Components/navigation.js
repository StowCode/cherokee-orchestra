import './Navigation.css';
import React from 'react';
import logo from './Resources/ChorchIconFinal.png';

function Navigation() {
    return (
      <div className="Navigation">
        <img src={logo} alt='Cherokee Orchestra Icon' id='nav_icon' />
        <ul id="navbar_links">
            <li className="main-link">About Us</li>
            <li className="main-link">2022-23 Sechedule</li>
            <li className="main-link">Chamber Strings</li>
            <li className="main-link">Media</li>
            <li className="main-link">Support</li>
        </ul>
      </div>
    );
  }
  
  export default Navigation;
  