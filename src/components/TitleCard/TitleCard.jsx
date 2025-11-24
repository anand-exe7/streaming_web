import React, { useEffect, useRef } from 'react';
import './TitleCard.css';
import cards_data from '../../assets/cards/Cards_data';

const TitleCard = ({Title , Catergory}) => {

 const cardRef = useRef();





  return (
    <div className='Title'>
      <h2>{Title?Title : "Popular On Flexy"}</h2>
      <div className="TitleCard" ref={cardRef}>
      {cards_data.map((card, index) => (
        <div key={index} className="card">
          <img src={card.image} alt={card.name} />
          <p>{card.name}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default TitleCard
