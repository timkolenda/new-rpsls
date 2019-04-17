import React, { Component } from "react";

import Card from './Card';

const CardDisplay = ({ 
    playerCardFlipped, 
    compCardFlipped, 
    playerCardImage, 
    compCardImage, 
    playerChoice, 
    compChoice, 
    roundResult 
    }) => {
    
    

    const renderWinStatement = () => {
        const cards = [];
        cards.push(playerChoice, compChoice);
        if (cards.includes('rock') && cards.includes('paper')) {
            return 'Paper covers rock';
        } else if (cards.includes('rock') && cards.includes('scissors')) {
            return 'Rock smashes scissors';
        } else if (cards.includes('rock') && cards.includes('lizard')) {
            return 'Rock crushes lizard';
        } else if (cards.includes('rock') && cards.includes('spock')) {
            return 'Spock vaporizes rock';
        } else if (cards.includes('paper') && cards.includes('scissors')) {
            return 'Scissors cut paper';
        } else if (cards.includes('paper') && cards.includes('lizard')) {
            return 'Lizard eats paper';
        } else if (cards.includes('paper') && cards.includes('spock')) {
            return 'Paper disproves spock';
        } else if (cards.includes('scissors') && cards.includes('lizard')) {
            return 'Scissors decapitate lizard';
        } else if (cards.includes('scissors') && cards.includes('spock')) {
            return 'Spock smashes scissors';
        } else if (cards.includes('lizard') && cards.includes('spock')) {
            return 'Lizard bites spock';
        }
    }   
    
    return (
        <div className="cardDisplay">
            <Card 
                flipped={playerCardFlipped}
                image={playerCardImage}
                winStatement={roundResult === 'Win' ? renderWinStatement() : null}
            />
            <Card 
                flipped={compCardFlipped}
                image={compCardImage}
                winStatement={roundResult === 'Lose' ? renderWinStatement() : null}
            />
        </div>
    );

};

export default CardDisplay;
