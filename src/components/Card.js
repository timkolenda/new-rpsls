import React, { Component } from "react";

const Card = ({ playerCardFlipped }) => {
    return (
        <div className="card">
            {playerCardFlipped ? 'flipped' : 'not flipped'}
            <div className={`cards__cardFlipper ${playerCardFlipped ? 'cards__cardFlipper--active' : ''}`}>
                <div className={`card__front`}>
                    <img src='' alt='' />
                </div>
                <div className={`card__back`}>
                    <img src='' alt='' />
                </div>
            </div>
        </div>
    );
}

export default Card;