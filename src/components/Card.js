import React, { Component } from "react";

const Card = ({ flipped }) => {
    return (
        <div className="card">
            <div className={`card__cardFlipper ${flipped ? 'card__cardFlipper--active' : ''}`}>
                <div className={`card__display card__display--back`}>
                    <img src='' alt='' />
                </div>
                <div className={`card__display card__display--front`}>
                    <img src='' alt='' />
                </div>
            </div>
        </div>
    );
}

export default Card;