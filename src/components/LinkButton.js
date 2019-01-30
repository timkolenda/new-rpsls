import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const LinkButton = ({ destination, message }) => {
    return (
        <div className="button" >
            <Link className="button__target" to={destination}>{message || destination}</Link>        
        </div>
    );
};

export default LinkButton;