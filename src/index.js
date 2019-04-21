import './styles/App.css';
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link, Redirect } from "react-router-dom";

import App from './components/App';

import * as serviceWorker from './serviceWorker';



ReactDOM.render(
    <Router>
        <App />
    </Router>, 
document.querySelector('#root'));