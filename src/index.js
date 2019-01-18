import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from './Login';
import Game from './Game';
import Rules from './Rules';
import Scoreboard from './Scoreboard';

import options from './options';

class App extends Component {
    // state = {

    // }


    render() {
        return (
            <Router>
                <div className="app">
                    <Route exact path="/" render={(props) => ( <Login /> )}/>
                    <Route path="/game" render={(props) => ( <Game /> )}/>
                    <Route path="/rules" render={(props) => ( <Rules /> )}/>
                    <Route path="/scoreboard" render={(props) => ( <Scoreboard /> )}/>
                </div>
            </Router>
        );
    };
}

ReactDOM.render(<App />, document.querySelector('#root'));