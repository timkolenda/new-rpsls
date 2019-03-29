import React, { Component } from "react";

import PlayerOptionItem from './PlayerOptionItem';


const PlayerOptionList = ({ options, getPlayerChoice, showCard }) => {
    const renderPlayerOptions = options.map((option) => {
            return (
                <PlayerOptionItem
                    image={option.img}
                    alt={option.alt}
                    type={option.type}
                    getPlayerChoice={getPlayerChoice}
                    showCard={showCard}
                    customClass={option.customClass}
                />
            );
                
        });


    return (
        <div className="playerOptionList">
            {renderPlayerOptions}
        </div>
    );
};


export default PlayerOptionList;
