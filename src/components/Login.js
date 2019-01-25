import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import SweetAlert from 'sweetalert-react';
import swal from '@sweetalert/with-react';

// import 'sweetalert/dist/sweetalert.css';
// import 'node_modules/sweetalert/src/sweetalert.scss';

import Button from './Button';


class Login extends Component {
    state = { 
        toGame: false, 
        show: false 
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
        this.setState({ show: true });
    }



    render() {  
        if (this.state.toGame === true){
            return <Redirect to={'/game'} />
        }
        
        return (
            <div className="Login">
                <SweetAlert
                    show={this.state.show}
                    title="Demo"
                    text={'hello world'}
                    onConfirm={() => this.setState({ show: false })}
                />
                <h2>RPSLS</h2>
                <form className="playerNameSubmissionForm" action="#"  onSubmit={this.handleSubmit} >
                    <label className="visuallyhidden" htmlFor="playerName">Please enter your nickname!</label>
                    <input className="playerNameSubmissionForm__input" type="text" id="playerName" value={this.props.playerName} onChange={(e) => this.props.handleChange(e, this.props.checkForPlayerNameReady)} />
                </form>
                <div className="loginPageButtons">
                    <div className="loginPageButtons__buttonContainer" onClick={this.handleClick}>
                        <Button destination={this.props.playerNameReady ? 'game' : '/'} message='Play Game'/>
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