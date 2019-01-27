import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PlayerOptionList from './PlayerOptionList';
import CardDisplay from './CardDisplay';

import options from './options';

class Game extends Component {
    state = { options }


    render(){
        return (
            <div className="Game">
                <PlayerOptionList 
                    options={options} 
                    getPlayerChoice={this.props.getPlayerChoice}
                />
                <CardDisplay options={options} />
            </div>
        );
    }
}



export default Game;