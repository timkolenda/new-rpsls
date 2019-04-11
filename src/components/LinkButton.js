import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const LinkButton = ({ destination, message, action=null }) => {
    return (
        <div className="linkButton" >
            <Link className="button__target" to={destination} onClick={action} >{message || destination}</Link>        
        </div>
    );
};

export default LinkButton;