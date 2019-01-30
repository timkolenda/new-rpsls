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
        compCardFlipped: false,
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

    showCard = (cardHolder) => {
        this.setState({ [`${cardHolder}CardFlipped`]: true });
        console.log('running', cardHolder);
    };
    
    getPlayerChoice = (playerChoice) => this.setState({ playerChoice });

    getCompChoice = () => {
        let compChoiceNumber = Math.floor(Math.random() * this.state.compChoiceArray.length);
        const compChoice = Object.keys(this.state.compChoiceArray[compChoiceNumber])[0];
        this.setState({ compChoice, compChoiceNumber }, () => { this.spendCompCard()});
        this.showCard('comp');
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
                        compCardFlipped={this.state.compCardFlipped}
                    />
                </div>
                <button onClick={this.getCompChoice}>Play</button>
            </div>
        );
    }
}



export default Game;