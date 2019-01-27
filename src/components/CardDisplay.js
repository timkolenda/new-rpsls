import React, { Component } from "react";

import Card from './Card';

const CardDisplay = (props) => {
    return (
        <div className="cardDisplay">
            <Card />
            <Card />
        </div>
    );
};

export default CardDisplay;
