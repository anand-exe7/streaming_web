import React from "react";
import "./Navbar.css";
import logo from '../assets/logo.png'
import profile_img from '../assets/profile_img.png'
import bell_icon from '../assets/bell_icon.svg'
import search_icon from '../assets/search_icon.svg'
import caret_icon from '../assets/caret_icon.svg'

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar-left">
        <img  src={logo} alt="logo" />
      </div>

      <div className="Navbar-middle">
        <ul>
            <li>Home</li>
            <li>Movies</li>
            <li>Web-Service</li>
            <li>My List</li>
            <img src={search_icon} alt="search" />
        </ul>
      </div>

      <div className="Navbar-right">
        <p>children</p>
        <img className ="profile" src={profile_img} alt="profile" />
        <img src={caret_icon}></img>
        <img src={bell_icon} alt="bell" />
        
      </div>
    </div>
  );
};

export default Navbar;
