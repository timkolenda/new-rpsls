import React, { Component } from "react";

import Card from './Card';

const CardDisplay = ({ playerCardFlipped, compCardFlipped, playerCardImage, compCardImage, playerChoice, compChoice }) => {
    return (
        <div className="cardDisplay">
            <Card 
                flipped={playerCardFlipped}
                image={playerCardImage}
            />
            <Card 
                flipped={compCardFlipped}
                image={compCardImage}
            />
        </div>
    );
};

export default CardDisplay;
