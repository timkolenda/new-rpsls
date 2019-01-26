import React, { Component } from "react";

import PlayerOptionItem from './PlayerOptionItem';


const PlayerOptionList = ({ options }) => {
    const renderPlayerOptions = options.map((option) => {
            return <PlayerOptionItem />
        });
    
    return (
        <div>
            {renderPlayerOptions}
        </div>
    );
};


export default PlayerOptionList;
