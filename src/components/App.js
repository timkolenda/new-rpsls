import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

import Login from './Login';
import Game from './Game';
import Rules from './Rules';
import Scoreboard from './Scoreboard';

import options from './options';
import firebase from './firebase';

const dbRef = firebase.database().ref();

class App extends Component {
    state = {
        playerName: "Enter a nickname",
        playerNameReady: false,
        playerChoice: "",
        score: 0
    }

    handleChange = (e, testValue) => {
        this.setState({ [e.target.id]: e.target.value }, () => testValue());
    }

    //Passed in as argument 'testValue' in handleChange - called onChange in Login.js
    checkForPlayerNameReady = () => {
        if (
            this.state.playerName !== "Enter a nickname" 
            && this.state.playerName !== "" 
            && this.state.playerName !== " "
            && this.state.playerName !== "  "
            && this.state.playerName !== "   "  
        ) {
            this.setState({ playerNameReady: true });
        } else {
            this.setState({ playerNameReady: false });
        }
    }

    handleNewPlayerFormSubmit = (e) => {
        e.preventDefault();
        this.addNewPlayerToFirebase();
    }

    addNewPlayerToFirebase = () => {
        const newPlayer = {
            name: this.state.playerName,
            score: this.state.score
        }
        dbRef.push(newPlayer);
    }

    getPlayerChoice = (playerChoice) => {
        this.setState({ playerChoice });
    }

    

    render() {
        return (
            <Router>
                <div className="app">
                    <Route exact path="/" render={(props) => ( 
                    <Login 
                        playerName={this.state.playerName}
                        playerNameReady={this.state.playerNameReady}
                        handleChange={this.handleChange}
                        handleNewPlayerFormSubmit={this.handleNewPlayerFormSubmit}
                        addNewPlayerToFirebase={this.addNewPlayerToFirebase}
                        checkForPlayerNameReady={this.checkForPlayerNameReady}
                    /> )}/>
                    <Route path="/game" render={(props) => ( <Game 
                        getPlayerChoice={this.getPlayerChoice}
                    /> )}/>
                    <Route path="/rules" render={(props) => ( <Rules /> )}/>
                    <Route path="/scoreboard" render={(props) => ( <Scoreboard /> )}/>
                </div>
            </Router>
        );
    };
}


export default App;