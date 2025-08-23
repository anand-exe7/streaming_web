import React from 'react'

import cards_data from '../../assets/cards/Cards_data'

const tittle_card = () => {
  return (
    <div className='tittle_card'>
        <h2>Popular On Flexy</h2>

        <div className='list'>
           {cards_data.map((card , index) => {
            return (
                <div className="card" key={index}>
                    <img src={cards_data} ></img>
                    <p>{card.name}</p>

                </div>
            )
           })}
        </div>
      
    </div>
  )
}

export default tittle-card
