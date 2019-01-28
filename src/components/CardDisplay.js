import React, { Component } from "react";

import Card from './Card';

const CardDisplay = ({ playerCardFlipped }) => {
    return (
        <div className="cardDisplay">
            <Card playerCardFlipped={playerCardFlipped}/>
            <Card />
        </div>
    );
};

export default CardDisplay;
