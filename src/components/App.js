import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link, Redirect } from "react-router-dom";

import Login from './Login';
import Game from './Game';
import Instructions from './Instructions';
import Leaderboard from './Leaderboard';
import Menu from './Menu';
import Results from './Results';

import background from '../backgroundImage/background.png';
import options from '../utils/options';
import firebase from '../database/firebase/firebase';
import history from '../utils/history';


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
        recoveryDataExists: false,
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

    setRecoveryDataState = () => {
        this.setState({ recoveryDataExists: true });
    }

    resetGame = () => {
        this.setState({
            playerName: '',
            playerNameReady: false,
            tie: 0,
            win: 0,
            lose: 0,
            id: '',
            recoveryDataExists: '',
        });
    }

    render() {
        const backgroundImg = {
            backgroundImage: `linear-gradient(to bottom, rgba(205, 169, 157, 0.7), rgba(205, 169, 157, 0.7)), url(${background})`
        }
        return (
            <div className="app" style={backgroundImg}>
                <div className="appWrapper">
                    <Route exact path="/" exact render={(props) => ( 
                        <Login 
                            history={history}
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
                            history={history}
                            playerName={this.state.playerName}
                            updateCount={this.updateCount}
                            windowWidth={this.state.windowWidth}
                            windowHeight={this.state.windowHeight}
                            id={this.state.id}
                            setRecoveryDataState={this.setRecoveryDataState}
                            tie={this.state.tie}
                            win={this.state.win}
                            lose={this.state.lose}
                            recoveryDataExists={this.state.recoveryDataExists}

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
                    <Route path="/results" exact render={(props) => (
                        <Results 
                            resetGame={this.resetGame}
                            tieCount={this.state.tie}
                            playerWinCount={this.state.win}
                            compWinCount={this.state.lose}
                            playerName={this.state.playerName}
                            history={history}
                        />)} 
                    />
                </div>
            </div>
        );
    };
}


export default App;