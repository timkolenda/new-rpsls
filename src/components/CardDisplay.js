import React, { Component } from "react";

import Card from './Card';

const CardDisplay = ({ playerCardFlipped, compCardFlipped }) => {
    return (
        <div className="cardDisplay">
            <Card flipped={playerCardFlipped}/>
            <Card flipped={compCardFlipped}/>
        </div>
    );
};

export default CardDisplay;
