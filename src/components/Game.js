import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PlayerOptionList from './PlayerOptionList';
import CardDisplay from './CardDisplay';
import Button from './LinkButton';

import options from './options';

const compChoiceArray = [
    {rock: 5},
    {paper: 5},
    {scissors: 5},
    {lizard: 5},
    {spock: 5},
]

class Game extends Component {
    state = { 
        options, 
        playerCardFlipped: false,
        playerChoice: '',
        compChoice: '',
        compChoiceNumber: '',
        compChoiceArray: [
            { rock: 5 },
            { paper: 5 },
            { scissors: 5 },
            { lizard: 5 },
            { spock: 5 },
        ]
    }

    getPlayerChoice = (playerChoice) => this.setState({ playerChoice });

    getCompChoice = () => {
        let compChoiceNumber = Math.floor(Math.random() * this.state.compChoiceArray.length);
        const compChoice = Object.keys(this.state.compChoiceArray[compChoiceNumber])[0];
        this.setState({ compChoice, compChoiceNumber }, () => { this.spendCompCard()});
        //play card here
    }

    spendCompCard = () => {
        const newArray = this.state.compChoiceArray;
        newArray[this.state.compChoiceNumber][this.state.compChoice]--;
        const cardsRemaining = newArray[this.state.compChoiceNumber][this.state.compChoice];
        this.setState({ compchoiceArray:  newArray });
        if (cardsRemaining === 0) {this.clearEmptyCardSlot()}; 
    }

    clearEmptyCardSlot = () => {
        const newArray = this.state.compChoiceArray;
        newArray.splice(this.state.compChoiceNumber, 1);
        this.setState({ compchoiceArray: newArray });
    }
    
    
    
    showCard = (card) => this.setState({ [card]: true });
    






    render(){
        return (
            <div className="game">
                <div className="game__cardArea">
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
                <button onClick={this.getCompChoice}>Play</button>
            </div>
        );
    }
}



export default Game;