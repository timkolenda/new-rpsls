import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const LinkButton = ({ destination, message }) => {
    return (
        <div className="linkButton" >
            <Link className="button__link" to={destination}>{message || destination} </Link>        
        </div>
    );
};

export default LinkButton;