import React, { useEffect, useRef } from 'react';
import './TitleCard.css';
import hero from '../../assets/hero_banner.jpg'
import cards_data from '../../assets/cards/Cards_data';

const TitleCard = ({Title , Catergory}) => {

 const cardRef = useRef();

  return (
    <div className='Title'>
      <div className='Img'>
        <img src={hero} className='img'></img>
        
      </div>

      <div className='trend-section'>
        <h3>Trending On Flexy</h3>
      </div>
    </div>
  )
}

export default TitleCard
