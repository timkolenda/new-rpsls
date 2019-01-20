import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from './Login';
import Game from './Game';
import Rules from './Rules';
import Scoreboard from './Scoreboard';

import options from './options';
import firebase from './firebase';

const dbRef = firebase.database().ref();

class App extends Component {
    state = {
        playerName: "",
        score: 0
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.addNewPlayerToFireBase();
        console.log('submitted');
    }

    formSubmit = () => {
        console.log('click');
        // this.handleSubmit();
        console.log(document.querySelector('#newPlayerCreationForm').value());
    }

    addNewPlayerToFireBase = () => {
        const newPlayer = {
            name: this.state.playerName,
            score: this.state.score
        }
        dbRef.push(newPlayer);
    }

    // handleClick = (callBack) => {
    //     callBack();
    // }

    



    render() {
        return (
            <Router>
                <div className="app">
                    <Route exact path="/" render={(props) => ( 
                    <Login 
                        playerName={this.state.playerName}
                        handleChange={this.handleChange}
                        formSubmit={this.formSubmit}
                        handleSubmit={this.handleSubmit}
                    /> )}/>
                    <Route path="/game" render={(props) => ( <Game /> )}/>
                    <Route path="/rules" render={(props) => ( <Rules /> )}/>
                    <Route path="/scoreboard" render={(props) => ( <Scoreboard /> )}/>
                </div>
            </Router>
        );
    };
}

ReactDOM.render(<App />, document.querySelector('#root'));