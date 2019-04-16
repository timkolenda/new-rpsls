import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

import PlayerOptionList from './PlayerOptionList';
import CardDisplay from './CardDisplay';
import Button from './Button';
import RoundResult from './Results';
import CardTracker from './CardTracker';
import LinkButton from "./LinkButton";
import Login from './Login';

import options from './options';
import firebase from './firebase';


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
        playerCards: {
            rock: 5,
            paper: 5,
            scissors: 5,
            lizard: 5,
            spock: 5
        },
        cardImage: "",
        playerCardImage: '',
        compCardImage: '',
        playerWinCount: 0,
        compWinCount: 0,
        tieCount: 0,
        roundResult: '',
        totalRounds: 0
    }

    componentDidMount(){
        if (this.props.recoveryDataExists) {
            this.recoverCurrentGameData();
        }
        if (!this.props.playerName) {
            this.props.history.push('/');
        }
    }


    showCard = (cardHolder) => this.setState({ [`${cardHolder}CardFlipped`]: true });
    
    getPlayerChoice = (playerChoice) => this.setState({ playerChoice }, () => {
        this.getCardImage(this.state.playerChoice, 'player');
        this.spendPlayerCard();
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

    spendPlayerCard = () => {
        const newObject = this.state.playerCards;
        newObject[this.state.playerChoice] = newObject[this.state.playerChoice] - 1;
        this.setState({ playerCards: newObject });
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
                this.props.updateCount('win');
                this.setState({
                    playerWinCount: this.state.playerWinCount + 1,
                    roundResult: 'You Win!'
                }, () => this.resolveRound('You Win!'));
            } else if (this.state.playerChoice === this.state.compChoice) {
                this.props.updateCount('tie');
                this.setState({
                    tieCount: this.state.tieCount + 1,
                    roundResult: 'It\'s a Tie!'
                }, () => this.resolveRound('It\'s a Tie!'));
            } else {
                this.props.updateCount('lose');
                this.setState({
                    compWinCount: this.state.compWinCount + 1,
                    roundResult: 'You Lose!'
                }, () => this.resolveRound('You Lose!'));
            }
        }
    }

    resolveRound = (roundResult) => {
        setTimeout((roundResult) => {
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
        this.setState({ roundResult });
    }

    saveCurrentGameData = () => {
        const gameData = {
            compChoiceArray: this.state.compChoiceArray,
            playerCards: this.state.playerCards,
        }
        firebase.database().ref().child(this.props.id).child('recoveryData').set(gameData).then((snap) => {
            this.props.setRecoveryDataState();
        });
    }

    recoverCurrentGameData = () => {
        firebase.database().ref().child(this.props.id).child('recoveryData').once('value').then((snapshot) => {
            const recoveredData = snapshot.toJSON();
            this.restoreCurrentGame(recoveredData);
        });
    }

    restoreCurrentGame = (data) => {
        const compChoiceArray = []
        for (let key in data.compChoiceArray) {
            compChoiceArray.push(data.compChoiceArray[key])
        }
        this.setState({
            compChoiceArray,
            playerCards: data.playerCards,
            playerWinCount: this.props.win,
            compWinCount: this.props.lose,
            tieCount: this.props.tie,
        });
    }


    triggerEndGame = (totalRounds) => {
        if (totalRounds === 25) {
            console.log(totalRounds);
            this.props.history.push('/results');
        }
    }


    resetForNextRound = () => {
        this.setState({
            playerCardFlipped: false,
            compCardFlipped: false,
            playerChoice: '',
            compChoice: '',
            compChoiceNumber: '',
        }, () => this.triggerEndGame(this.state.totalRounds));
    }

    renderAdmin = () => {
        return (
            <div className="adminArea">
                <CardTracker
                    playerCards={this.state.playerCards}
                    compCardsArray={this.state.compChoiceArray}
                    playerWinCount={this.state.playerWinCount}
                    compWinCount={this.state.compWinCount}
                    tieCount={this.state.tieCount}
            />
                <Link to="/menu" onClick={this.saveCurrentGameData}>Menu</Link>
            </div>
        );
    }
    



    render(){
        return (
            <div className="game">
                <div className="game__cardArea">
                    <PlayerOptionList 
                        options={options} 
                        getPlayerChoice={this.getPlayerChoice}
                        showCard={this.showCard}
                        playerCards={this.state.playerCards}
                    />
                    <div className="cardDisplayContainer">
                        <CardDisplay 
                            options={options} 
                            playerCardFlipped={this.state.playerCardFlipped}
                            compCardFlipped={this.state.compCardFlipped}
                            playerChoice={this.state.playerChoice}
                            compChoice={this.state.compChoice}
                            playerCardImage={this.state.playerCardImage}
                            compCardImage={this.state.compCardImage}
                        />
                        {window.innerWidth < 800 ? null : this.renderAdmin()}
                    </div>
                </div>
                {window.innerWidth < 800 ? this.renderAdmin() : null}
            </div>
        );
    }
}



export default withRouter(Game);