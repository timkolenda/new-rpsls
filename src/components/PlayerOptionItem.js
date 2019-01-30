import React, { Component } from "react";

const PlayerOptionItem = ({ image, alt, type, getPlayerChoice, showCard }) => {
    
    const handleClick = () => {
        getPlayerChoice(type);
        showCard('player');
    }
    
    return (
        <button className="playerOptionItem" onClick={handleClick}>
            <div>
                <img src={image} alt={alt} />
            </div>
        </button>
    );
}

export default PlayerOptionItem;