import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PlayerOptions from './PlayerOptions';
import CardDisplay from './CardDisplay';


const Game = (props) => {
    return (
        <div className="Game">
            <PlayerOptions />
            <CardDisplay />
        </div>
    );
};

export default Game;