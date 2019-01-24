import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

import Button from './Button';


class Login extends Component {
    state = { toGame: false }

    handleSubmit = (e) => {
        this.props.handleNewPlayerFormSubmit(e)
        this.setState({ toGame: true });
    }

    render() {
        if (this.state.toGame === true){
            return <Redirect to={'/game'} />
        }

        return (
            <div className="Login">
                <h2>RPSLS</h2>
                <form action="#"  onSubmit={this.handleSubmit} >
                    <label htmlFor="playerName">Please enter your nickname!</label>
                    <input type="text" id="playerName" value={this.props.playerName} onChange={this.props.handleChange} />
                    <div onClick={this.props.addNewPlayerToFirebase}>
                        <Button destination='game' />
                    </div>
                </form>
                <div>
                    <Button destination='rules' />
                </div>
            </div>
        );
    }
};

export default Login;