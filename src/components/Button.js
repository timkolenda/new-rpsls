import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Button = (props) => {
    return (
        <div className="Button" >
            <Link to={props.destination} onClick={props.onClickAction || {}} >{props.message || props.destination} </Link>        
        </div>
    );
};

export default Button;