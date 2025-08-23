import React from "react";
import Navbar from "./Navbar/Navbar.jsx";
import hero_banner from "./assets/assets/hero_banner.jpg"
import hero_title from "./assets/assets/hero_title.png"
import play_icon from "./assets/assets/play_icon.png"
import info_icon from "./assets/assets/info_icon.png"




function App() {
  return (
    <div>
      <Navbar />
      <div className="Hero">
        <img src={hero_banner} alt="img"></img>
        <div className="hero-title">
          <img src= {hero_title}></img>
          <p>The Story About th hero and the villain happening in 2050s</p>
          <div className="hero-btns">
            <button className="btn" ><img src={play_icon} alt="play_button"></img>Play</button>
            <button className="btn" ><img src={info_icon} alt="play_button"></img>Info</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
