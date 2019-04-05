import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

import Login from './Login';
import Game from './Game';
import Rules from './Rules';
import Leaderboard from './Leaderboard';

import options from './options';
import firebase from './firebase';

const dbRef = firebase.database().ref();

class App extends Component {
    state = {
        playerName: "Enter a nickname",
        playerNameReady: false,
        tie: 0,
        win: 0,
        lose: 0,
        id: ''
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
            win: this.state.win,
            lose: this.state.lose,
            tie: this.state.tie
        }
        dbRef.push(newPlayer).then((snap) => {
            this.setState({ id: snap.key });
        });
    }

    updateFirebase = (type) => {
        console.log(dbRef.child(this.state.id));
        dbRef.child(this.state.id).child(type).set(this.state[type]);
    }

    updateCount = (type) => {
        this.setState({ [type]: this.state[type] + 1 }, () => this. updateFirebase(type));
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
                    <Route path="/game" render={(props) => ( 
                        <Game 
                            updateCount={this.updateCount}
                        /> )}/>
                    <Route path="/rules" render={(props) => ( <Rules /> )}/>
                    <Route path="/leaderboard" render={(props) => ( <Leaderboard /> )}/>
                </div>
            </Router>
        );
    };
}


export default App;