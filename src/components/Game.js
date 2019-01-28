import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PlayerOptionList from './PlayerOptionList';
import CardDisplay from './CardDisplay';

import options from './options';

class Game extends Component {
    state = { 
        options, 
        playerCardFlipped: false,
        playerChoice: ''
    }

    getPlayerChoice = (playerChoice) => {
        this.setState({ playerChoice });
    }
    
    showCard = (card) => {
        this.setState({ [card]: true });
    }






    render(){
        return (
            <div className="game">
                <PlayerOptionList 
                    options={options} 
                    getPlayerChoice={this.getPlayerChoice}
                    showCard={this.showCard}
                />
                <CardDisplay 
                    options={options} 
                    playerCardFlipped={this.state.playerCardFlipped}
                />
            </div>
        );
    }
}



export default Game;