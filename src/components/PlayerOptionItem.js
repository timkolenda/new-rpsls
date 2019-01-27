import React, { Component } from "react";

const PlayerOptionItem = ({ image, alt, type, getPlayerChoice }) => {
    return (
    <button onClick={() => getPlayerChoice(type)}>
        <div>
            <img src={image} alt={alt} />
        </div>
    </button>
    );
}

export default PlayerOptionItem;