import React, { Component } from "react";

import PlayerOptionItem from './PlayerOptionItem';


const PlayerOptionList = ({ options, getPlayerChoice }) => {
    const renderPlayerOptions = options.map((option) => {
            return (
                <PlayerOptionItem
                    image={option.img}
                    alt={option.alt}
                    type={option.type}
                    getPlayerChoice={getPlayerChoice}                    
                />
            );
                
        });


    return (
        <div>
            {renderPlayerOptions}
        </div>
    );
};


export default PlayerOptionList;
