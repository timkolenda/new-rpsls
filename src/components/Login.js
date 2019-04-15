import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import swal from 'sweetalert';

import LinkButton from './LinkButton';

// import history from './history';


class Login extends Component {

    handleSubmit = (e) => {
        if (this.props.playerNameReady) {
            this.props.handleNewPlayerFormSubmit(e)
            this.props.history.push('/game');
        } else {
            this.displayInvalidPlayerNameMessage();
        }
    }

    handleClick = () => {
        if (this.props.playerNameReady) {
            this.props.addNewPlayerToFirebase();
        } else {
            this.displayInvalidPlayerNameMessage();
        }
    }

    displayInvalidPlayerNameMessage = () => {
        swal("Oops!", "Looks like you need to enter a valid Nick Name!", "error");
    }



    render() {  
        return (
            <div className="login">
                <h1>RPSLS</h1>
                <form className="playerNameSubmissionForm" action="#"  onSubmit={this.handleSubmit} >
                    <label className="visuallyhidden" htmlFor="playerName">Please enter your nickname!</label>
                    <input className="playerNameSubmissionForm__input" type="text" id="playerName" value={this.props.playerName} onChange={(e) => this.props.handleChange(e, this.props.checkForPlayerNameReady)} placeholder="Enter a Nickname"/>
                </form>
                <div className="loginPageButtons">
                    <div className="loginPageButtons__buttonContainer" onClick={this.handleClick}>
                        <LinkButton destination={this.props.playerNameReady ? 'game' : '/'} message='Play Game'/>
                    </div>
                    <div className="loginPageButtons__buttonContainer">
                        <LinkButton destination='instructions' />
                    </div>
                    <div className="loginPageButtons__buttonContainer">
                        <LinkButton destination='leaderboard' />
                    </div>
                </div>
                
            </div>
        );
    }
};

export default withRouter(Login);