import './styles/App.css';
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link, Redirect } from "react-router-dom";

import App from './components/App';
import Test from './components/Test';



ReactDOM.render(
    <Router basename="new-rpsls" style={'background: red'}>
        <App />
    </Router>, 
document.querySelector('#root'));