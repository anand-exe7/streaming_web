import React, { useState } from "react";
import './Navbar.css';
import flexy1 from '../../assets/flexy1.png';
import profile_img from '../../assets/profile_img.png';
import bell_icon from '../../assets/bell_icon.svg';
import search_icon from '../../assets/search_icon.svg';
import caret_icon from '../../assets/caret_icon.svg';
import {Heart , User } from 'lucide-react'

const Navbar = () => {

  const [searchOpen, setSearchOpen] = useState(false);

  

  return (
    <div className="Navbar">
      <div className="Navbar-left">
        <img  src={flexy1} alt="logo" />
      </div>

      <div className="Navbar-middle">
        <ul>
            
            <li>Movies</li>
            <li>Series</li>
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
        <div className="favourites">
          <Heart/>
          Favourite
        </div>

        <div className="profile">
          <User/>
        </div>
      </div>


    </div>
  );
};

export default Navbar;
