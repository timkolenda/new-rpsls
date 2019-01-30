import React, { Component } from "react";

const Button = ({ onClickAction, description }) => {
    return (
        <div className="button">
            <button className="button__target" onClick={onClickAction}>{description}</button>
        </div>
    );
}

export default Button;