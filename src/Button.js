import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Button = (props) => {
    return (
        <div className="button">
            <Link to={props.destination}>{props.message || props.destination}</Link>        
        </div>
    );
};

export default Button;