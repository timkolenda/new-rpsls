import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import SweetAlert from 'sweetalert-react';

import Button from './Button';


class Login extends Component {
    state = { 
        toGame: false, 
        show: false 
    }

    handleSubmit = (e) => {
        this.props.handleNewPlayerFormSubmit(e)
        this.setState({ toGame: true });
    }

    testFunction = () => console.log(this.props.playerNameReady);

    

    render() {
        this.testFunction();
        if (this.state.toGame === true){
            return <Redirect to={'/game'} />
        }
        
        return (
            <div className="Login">
                <h2>RPSLS</h2>
                <form className="playerNameSubmissionForm" action="#"  onSubmit={this.handleSubmit} >
                    <label className="visuallyhidden" htmlFor="playerName">Please enter your nickname!</label>
                    <input className="playerNameSubmissionForm__input" type="text" id="playerName" value={this.props.playerName} onChange={(e) => this.props.handleChange(e, this.props.checkForPlayerNameReady)} />
                </form>
                <div className="loginPageButtons">
                    <div className="loginPageButtons__buttonContainer" onClick={this.props.addNewPlayerToFirebase}>
                        <Button destination={this.state.playerNameReady ? 'game' : '/'} message='Play Game'/>
                    </div>
                    <div className="loginPageButtons__buttonContainer">
                        <Button destination='rules' />
                    </div>
                </div>
            </div>
        );
    }
};

export default Login;