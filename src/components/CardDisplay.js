import React, { Component } from "react";

import Card from './Card';

const CardDisplay = ({ playerCardFlipped, compCardFlipped, cardImage, playerChoice, compChoice }) => {
    return (
        <div className="cardDisplay">
            <Card 
                flipped={playerCardFlipped}
                image={cardImage}
            />
            <Card 
                flipped={compCardFlipped}
                image={cardImage}
            />
        </div>
    );
};

export default CardDisplay;
