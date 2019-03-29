import React, { Component } from "react";

import PlayerOptionItem from './PlayerOptionItem';


const PlayerOptionList = ({ options, getPlayerChoice, showCard, playerCards }) => {
    const renderPlayerOptions = options.map((option) => {
            return (
                <PlayerOptionItem
                    key={option.index}
                    image={option.img}
                    alt={option.alt}
                    type={option.type}
                    getPlayerChoice={getPlayerChoice}
                    showCard={showCard}
                    customClass={option.customClass}
                    playerCards={playerCards}
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
