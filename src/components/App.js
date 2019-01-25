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
        playerName: "Choose a nickname",
        score: 0,
        playerNameReady: false
    }

    handleChange = (e, testValue) => {
        this.setState({ [e.target.id]: e.target.value }, () => testValue());
    }   

    checkForPlayerNameReady = () => {
        if (
            this.state.playerName !== "Choose a nickname" 
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

    

    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" render={(props) => ( 
                    <Login 
                        playerName={this.state.playerName}
                        playerNameReady={this.state.playerNameReady}
                        handleChange={this.handleChange}
                        handleNewPlayerFormSubmit={this.handleNewPlayerFormSubmit}
                        addNewPlayerToFirebase={this.addNewPlayerToFirebase}
                        checkForPlayerNameReady={this.checkForPlayerNameReady}
                    /> )}/>
                    <Route path="/game" render={(props) => ( <Game /> )}/>
                    <Route path="/rules" render={(props) => ( <Rules /> )}/>
                    <Route path="/scoreboard" render={(props) => ( <Scoreboard /> )}/>
                </div>
            </Router>
        );
    };
}


export default App;