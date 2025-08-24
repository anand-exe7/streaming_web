import React from "react";
import './Home.css';
import Navbar from "../../../components/Navbar/Navbar.jsx";
import hero_banner from "../../../assets/assets/hero_banner.jpg";
import hero_title from "../../../assets/assets/hero_title.png";
import play_icon from "../../../assets/assets/play_icon.png";
import info_icon from "../../../assets/assets/info_icon.png";
import TitleCard from "../../../components/TitleCard/TitleCard.jsx";
import Footer from "../../../components/Footer/Footer.jsx";


function Home() {
  return (
    <div>
      <Navbar />
      <div className="Hero">
        
        <img src={hero_banner} alt="img"></img>
        <div className="hero-title">
          <img src={hero_title}></img>
          <p>The Story About the hero and the villain happening in 2050s</p>
          <div className="hero-btns">
            <button className="btn" ><img src={play_icon} alt="play_button"></img>Play</button>
            <button className="btn b-2" ><img src={info_icon} alt="info_button"></img>Info</button>
          </div>
          
        </div>
        <TitleCard />
      </div>
      <div className="new-cards">
        <TitleCard Title={"BlockBuster Movies"}/>
        <TitleCard Title={"Only On Flexy"}/>
        <TitleCard Title={"Best Picks For You"}/>
        <TitleCard Title={"Trending Right Now "}/>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
