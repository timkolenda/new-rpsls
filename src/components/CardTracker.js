import React, { Component } from "react";

import options from './options';

const CardTracker = ({ compCardsArray, playerCards }) => {

    const renderCounter = (deck, type) => {
        const list = options.map((item, index) => <div key={index} className={`bubble ${deck[type] >= (index + 1) ? 'filled' : ''}`}></div>); 
        return list;
    }

    const renderCounterList = (deck) => {
        const list = options.map(option => {
            return (
                <div className="listItem" key={option.type}>
                    <div className="listItem__image">
                        <img src={option.img} alt={option.alt}/>
                    </div>
                    <div className="listItem__counter">
                        {renderCounter(deck, option.type)}
                    </div>
                </div>
            );
        });
        return list;
    }

    const convertCompCardsArrayToObject = () => {
        const compCards = {};
        compCardsArray.map(item => {
            const newArray = Object.entries(item);
            compCards[newArray[0][0]] = newArray[0][1];
        });
        return compCards;
    }
    
    return (
        <div className="cardTracker">                
            <div className="counterList">
                {renderCounterList(playerCards)}
            </div>
            <div className="counterList">
                {renderCounterList(convertCompCardsArrayToObject())}
            </div>
        </div>
    );
}


export default CardTracker;