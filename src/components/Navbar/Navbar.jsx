import React, { useState } from "react";
import './Navbar.css';
import flexy1 from '../../assets/flexy1.png';
import profile_img from '../../assets/profile_img.png';
import bell_icon from '../../assets/bell_icon.svg';
import search_icon from '../../assets/search_icon.svg';
import caret_icon from '../../assets/caret_icon.svg';

const Navbar = () => {

  const [searchOpen, setSearchOpen] = useState(false);

  

  return (
    <div className="Navbar">
      <div className="Navbar-left">
        <img  src={flexy1} alt="logo" />
      </div>

      <div className="Navbar-middle">
        <ul>
            <li>Home</li>
            <li>Movies</li>
            <li>Web-Service</li>
            <li>My List</li>
             <div className={`search-container ${searchOpen ? "active" : ""}`}>
        <input type="text" placeholder="Search..." />
        <button
          className="search-icon"
          onClick={() => setSearchOpen(!searchOpen)}
        >
          <img src={search_icon} alt="Search" />
        </button>
      </div>
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
