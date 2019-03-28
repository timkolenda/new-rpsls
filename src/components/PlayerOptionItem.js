import React, { Component } from "react";

const PlayerOptionItem = ({ image, alt, type, getPlayerChoice, showCard }) => {
    
    const handleClick = () => {
        getPlayerChoice(type);
        showCard('player');
    }
    
    const setWidthandHeight = () => {
        console.log(window.innerWidth);
        const windowSize = window.innerWidth;
        const widthOfSquare = windowSize / 3.9;
        console.log(widthOfSquare);
        return widthOfSquare
    }

    const squareStyle = {
        width: setWidthandHeight(),
        height: setWidthandHeight()
    }

    return (
        <button className="playerOptionItem" onClick={handleClick} style={squareStyle} >
            <div>
                <img src={image} alt={alt} />
            </div>
        </button>
    );
}

export default PlayerOptionItem;