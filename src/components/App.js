import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

import Login from './Login';
import Game from './Game';
import Instructions from './Instructions';
import Leaderboard from './Leaderboard';
import Menu from './Menu';

import background from '../backgroundImage/background.png';
import options from './options';
import firebase from './firebase';
import history from './history';


const dbRef = firebase.database().ref();

class App extends Component {
    state = {
        playerName: '',
        playerNameReady: false,
        tie: 0,
        win: 0,
        lose: 0,
        id: '',
        windowWidth: 0,
        windowHeight: 0,
        recoveryKey: '',
    }

    componentDidMount() {
        this.updateWindow();
        window.addEventListener("resize", this.updateWindow);
    }

    updateWindow = () => {
        this.setState({
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight 
        });
    }

    handleChange = (e, testValue) => {
        this.setState({ [e.target.id]: e.target.value }, () => testValue());
    }

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
        dbRef.child(this.state.id).child(type).set(this.state[type]);
    }

    updateCount = (type) => {
        this.setState({ [type]: this.state[type] + 1 }, () => this. updateFirebase(type));
    }

    getRecoveryKey = (key) => {
        this.setState({ recoveryKey: key });
    }

    resetGame = () => {
        console.log('run');
        this.setState({
            playerName: '',
            playerNameReady: false,
            tie: 0,
            win: 0,
            lose: 0,
            id: '',
            recoveryKey: '',
        });
    }



    render() {
        const backgroundImg = {
            backgroundImage: `linear-gradient(to bottom, rgba(205, 169, 157, 0.7), rgba(205, 169, 157, 0.7)), url(${background})`
        }
        return (
            <Router>
                <div className="app" style={backgroundImg}>
                    <div className="appWrapper">
                        <Route exact path="/" exact render={(props) => ( 
                            <Login 
                                playerName={this.state.playerName}
                                playerNameReady={this.state.playerNameReady}
                                handleChange={this.handleChange}
                                handleNewPlayerFormSubmit={this.handleNewPlayerFormSubmit}
                                addNewPlayerToFirebase={this.addNewPlayerToFirebase}
                                checkForPlayerNameReady={this.checkForPlayerNameReady}
                            /> )}
                        />
                        <Route path="/game" exact render={(props) => ( 
                            <Game 
                                updateCount={this.updateCount}
                                windowWidth={this.state.windowWidth}
                                windowHeight={this.state.windowHeight}
                                id={this.state.id}
                                getRecoveryKey={this.getRecoveryKey}
                                tie={this.state.tie}
                                win={this.state.win}
                                lose={this.state.lose}
                                recoveryKey={this.state.recoveryKey}
                            /> )}
                        />
                        <Route path="/menu" exact render={(props) => (
                            <Menu 
                                recoverCurrentGameData={this.recoverCurrentGameData} 
                                resetGame={this.resetGame}
                            />)} 
                        />
                        <Route path="/instructions" exact render={(props) => ( <Instructions /> )}/>
                        <Route path="/leaderboard" exact render={(props) => ( <Leaderboard /> )}/>
                    </div>
                </div>
            </Router>
        );
    };
}


export default App;