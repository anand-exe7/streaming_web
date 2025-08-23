import React from 'react';
import './TitleCard.css';
import Cards_data from '../../assets/cards/Cards_data';

const TitleCard = () => {
  return (
    <div className="title_card">
        <h2>Popular On Flexy</h2>

        <div className="list">
           {Cards_data.map((card , index) => {
            return (
                <div className="card" key={index}>
                    <img src={card_image} ></img>
                    <p>{card.name}</p>

                </div>
            )
           })}
        </div>
      
    </div>
  )
}

export default TitleCard
