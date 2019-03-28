import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PlayerOptionList from './PlayerOptionList';
import CardDisplay from './CardDisplay';
import Button from './Button';
import RoundResult from './RoundResult';

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
    
    getPlayerChoice = (playerChoice) => this.setState({ playerChoice }, () => {
        this.getCardImage(this.state.playerChoice, 'player');
        this.getCompChoice();
    });

    getCardImage = (choice, cardHolder) => {
        const choiceObject = options.filter((option) => option.type === choice); 
        const cardImage = choiceObject[0].img;
        this.setState({ [`${cardHolder}CardImage`]: cardImage });
    }

    getCompChoice = () => {
        setTimeout(() => {
            let compChoiceNumber = Math.floor(Math.random() * this.state.compChoiceArray.length);
            const compChoice = Object.keys(this.state.compChoiceArray[compChoiceNumber])[0];
            this.setState({ compChoice, compChoiceNumber }, () => {this.resolveSetCompChoice()});
            this.showCard('comp');
        }, 1000)
    }

    resolveSetCompChoice = () => {
        this.spendCompCard();
        this.getCardImage(this.state.compChoice, 'comp');
    }


    spendCompCard = () => {
        const newArray = this.state.compChoiceArray;
        newArray[this.state.compChoiceNumber][this.state.compChoice]--;
        const cardsRemaining = newArray[this.state.compChoiceNumber][this.state.compChoice];
        this.setState({ compChoiceArray: newArray }, () => this.caluculateResult(this.state.playerChoice, this.state.compChoice));
        if (cardsRemaining === 0) {this.clearEmptyCardSlot()}; 
    }

    clearEmptyCardSlot = () => {
        const newArray = this.state.compChoiceArray;
        newArray.splice(this.state.compChoiceNumber, 1);
        this.setState({ compchoiceArray: newArray });
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
                    roundResult: 'You Win!'
                }, () => this.resolveRound('You Win!'));
            } else if (this.state.playerChoice === this.state.compChoice) {
                this.setState({
                    tieCount: this.state.tieCount + 1,
                    roundResult: 'It\'s a Tie!'
                }, () => this.resolveRound('It\'s a Tie!'));
            } else {
                this.setState({
                    compWinCount: this.state.compWinCount + 1,
                    roundResult: 'You Lose!'
                }, () => this.resolveRound('You Lose!'));
            }
        }
    }

    resolveRound = (roundResult) => {
        console.log('rr', roundResult);
        setTimeout((roundResult) => {
            console.log('sto', roundResult);
            this.getTotalRounds();
            this.resetForNextRound();
            this.setRoundResult(roundResult);
        }, 1000);
    }



    getTotalRounds = () => {
        const totalRounds = (this.state.compWinCount + this.state.playerWinCount + this.state.tieCount);
        this.setState({ totalRounds });
    };

    setRoundResult = (roundResult) => {
        console.log('run', roundResult);
        this.setState({ roundResult });
    }

    renderRoundResult = () => {
        setTimeout(() => {
            return (
                <div className="game__roundResult">
                    <RoundResult roundResult={this.state.roundResult} />
                </div>
            );
        }, 1000)
    }

    resetForNextRound = () => {
        this.setState({
            playerCardFlipped: false,
            compCardFlipped: false,
            playerChoice: '',
            compChoice: '',
            compChoiceNumber: '',
        });
    }

    







    render(){
        return (
            <div className="game">
                {this.state.roundResult ? this.renderRoundResult() : ''}
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
                        <LinkButton destination='rules' />
                    </div>
                </div>
            </div>
        );
    }
}



export default Game;