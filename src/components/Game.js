import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PlayerOptionList from './PlayerOptionList';
import CardDisplay from './CardDisplay';
import Button from './Button';

import options from './options';
import LinkButton from "./LinkButton";

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
        ],
        cardImage: "",
        playerCardImage: '',
        compCardImage: '',
        playerWinCount: 0,
        compWinCount: 0,
        tieCount: 0,
        roundResult: '',
        totalRounds: 0
    }

    showCard = (cardHolder) => this.setState({ [`${cardHolder}CardFlipped`]: true });
    
    getPlayerChoice = (playerChoice) => this.setState({ playerChoice }, () => {this.getCardImage(this.state.playerChoice, 'player')});

    getCardImage = (choice, cardHolder) => {
        const choiceObject = options.filter((option) => option.type === choice); 
        const cardImage = choiceObject[0].img;
        this.setState({ [`${cardHolder}CardImage`]: cardImage });
    }

    getCompChoice = () => {
        let compChoiceNumber = Math.floor(Math.random() * this.state.compChoiceArray.length);
        const compChoice = Object.keys(this.state.compChoiceArray[compChoiceNumber])[0];
        this.setState({ compChoice, compChoiceNumber }, () => {this.resolveSetCompChoice()});
        this.showCard('comp');
    }

    resolveSetCompChoice = () => {
        this.spendCompCard();
        this.getCardImage(this.state.compChoice, 'comp');
    }


    spendCompCard = () => {
        const newArray = this.state.compChoiceArray;
        newArray[this.state.compChoiceNumber][this.state.compChoice]--;
        const cardsRemaining = newArray[this.state.compChoiceNumber][this.state.compChoice];
        this.setState({ compchoiceArray:  newArray }, () => {this.resolveRound()});
        if (cardsRemaining === 0) {this.clearEmptyCardSlot()}; 
    }

    clearEmptyCardSlot = () => {
        const newArray = this.state.compChoiceArray;
        newArray.splice(this.state.compChoiceNumber, 1);
        this.setState({ compchoiceArray: newArray });
    }
    
    resolveRound = () => {
        setTimeout(() => {
            this.caluculateResult(this.state.playerChoice, this.state.compChoice);
        }, 1000);
    }

    caluculateResult = (playerChoice, compChoice) => {
        if (playerChoice && compChoice) {
            if (((playerChoice === "rock") && (compChoice === "scissors"))
                || ((playerChoice === "rock") && (compChoice === "lizard"))
                || ((playerChoice === "paper") && (compChoice === "rock"))
                || ((playerChoice === "paper") && (compChoice === "spock"))
                || ((playerChoice === "scissors") && (compChoice === "paper"))
                || ((playerChoice === "scissors") && (compChoice === "lizard"))
                || ((playerChoice === "spock") && (compChoice === "rock"))
                || ((playerChoice === "spock") && (compChoice === "scissors"))
                || ((playerChoice === "lizard") && (compChoice === "paper"))
                || ((playerChoice === "lizard") && (compChoice === "spock"))) {
                this.setState({
                    playerWinCount: this.state.playerWinCount + 1,
                    roundResult: 'Round won!'
                }, () => this.getTotalRounds());
            } else if (this.state.playerChoice === this.state.compChoice) {
                this.setState({
                    tieCount: this.state.tieCount + 1,
                    roundResult: 'Round tied!'
                }, () => this.getTotalRounds());
            } else {
                this.setState({
                    compWinCount: this.state.compWinCount + 1,
                    roundResult: 'Round lost!'
                }, () => this.getTotalRounds());
            }
        }
    }

    getTotalRounds = () => {
        const totalRounds = (this.state.compWinCount + this.state.playerWinCount + this.state.tieCount);
        console.log('compWinCount', this.state.compWinCount, 'userWinCount', this.state.playerWinCount, 'tieCount', this.state.tieCount);
        this.setState({ totalRounds });
    };
    







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
                        playerChoice={this.state.playerChoice}
                        compChoice={this.state.compChoice}
                        playerCardImage={this.state.playerCardImage}
                        compCardImage={this.state.compCardImage}
                    />
                </div>
                <div className="game__actionArea">
                    <div>
                        <Button 
                            onClickAction={this.getCompChoice}
                            description={'Play'}
                        />
                    </div>
                    <div>
                        <LinkButton destination='rules' />
                    </div>
                </div>
            </div>
        );
    }
}



export default Game;