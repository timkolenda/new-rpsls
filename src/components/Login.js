import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import swal from 'sweetalert';

import LinkButton from './LinkButton';


class Login extends Component {
    state = { 
        toGame: false, 
    }

    handleSubmit = (e) => {
        if (this.props.playerNameReady) {
            this.props.handleNewPlayerFormSubmit(e)
            this.setState({ toGame: true });
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
        if (this.state.toGame === true){
            return <Redirect to={'/game'} />
        }
        
        return (
            <div className="login">
                <h2>RPSLS</h2>
                <form className="playerNameSubmissionForm" action="#"  onSubmit={this.handleSubmit} >
                    <label className="visuallyhidden" htmlFor="playerName">Please enter your nickname!</label>
                    <input className="playerNameSubmissionForm__input" type="text" id="playerName" value={this.props.playerName} onChange={(e) => this.props.handleChange(e, this.props.checkForPlayerNameReady)} />
                </form>
                <div className="loginPageButtons">
                    <div className="loginPageButtons__buttonContainer" onClick={this.handleClick}>
                        <LinkButton destination={this.props.playerNameReady ? 'game' : '/'} message='Play Game'/>
                    </div>
                    <div className="loginPageButtons__buttonContainer">
                        <LinkButton destination='rules' />
                    </div>
                </div>
                
            </div>
        );
    }
};

export default Login;