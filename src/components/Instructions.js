import React, { Component } from "react";
import { Link } from 'react-router-dom';

import Modal from './Modal';
import history from './history';


class Instructions extends Component {
    state = {
        instruction: undefined
    }

    handleClick = (e) => {
        const triggers = document.querySelectorAll('.interactiveOverlay__trigger');
        triggers.forEach(trigger => trigger.classList.remove('active'));
        e.target.classList.add('active');
        this.setState({ instruction: e.target.dataset.instruction });
    }

    renderActions = () => {
        return (
            <React.Fragment>
                <button onClick={() => history.goBack()} className="ui button primary">Back</button>
            </React.Fragment>
        );
    }

    renderMessage = () => {
        switch (this.state.instruction) {
            case 'options':
                return <div className="ui green message">Begin each round by choosing which card your are going to play.</div>
            case 'userCard':
                return <div className="ui green message">Cards you play will be displayed here.</div>
            case 'compCard':
                return <div className="ui green message">Cards the computer plays will be displayed here.</div>
            case 'cardTracker':
                return <div className="ui green message">Keep track of the remaining cards in your deck and your opponents deck using this tracker.</div>
            case 'scoreTracker':
                return <div className="ui green message">Track your current score here.</div>
            case 'menu':
                return <div className="ui green message">Navigate to the menu for more actions.</div>
            default: 
                return;
        }
    }

    renderContent = () => {
        return (
            <div className="ruleContent">
                <div className="ui big message">
                    Click form more information.
                </div>
                <div className="instructions">
                    <div className="gameDisplay">
                        <img src="../assets/game-display-desktop.png" alt="Image of gameboard."/>
                        <div className="interactiveOverlay">
                            <div 
                                onClick={(e) => this.handleClick(e)} 
                                className="interactiveOverlay__trigger interactiveOverlay__trigger--options"
                                data-instruction="options"
                            ></div>
                            <div className="interactiveOverlay__container">
                                <div className="interactiveOverlay__cardDisplay">
                                    <div 
                                        onClick={(e) => this.handleClick(e)} 
                                        className="interactiveOverlay__trigger interactiveOverlay__trigger--userCard"
                                        data-instruction="userCard"
                                    ></div>
                                    <div 
                                        onClick={(e) => this.handleClick(e)} 
                                        className="interactiveOverlay__trigger interactiveOverlay__trigger--compCard"
                                        data-instruction="compCard"
                                    ></div>
                                </div>
                                <div className="interactiveOverlay__adminArea">
                                    <div 
                                        onClick={(e) => this.handleClick(e)} 
                                        className="interactiveOverlay__trigger interactiveOverlay__trigger--cardTracker"
                                        data-instruction="cardTracker"
                                    ></div>
                                    <div 
                                        onClick={(e) => this.handleClick(e)} 
                                        className="interactiveOverlay__trigger interactiveOverlay__trigger--scoreTracker"
                                        data-instruction="scoreTracker"
                                    ></div>
                                    <div 
                                        onClick={(e) => this.handleClick(e)} 
                                        className="interactiveOverlay__trigger interactiveOverlay__trigger--menu"
                                        data-instruction="menu"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.renderMessage()}
            </div>
        )
    }

    render() {
        return (
            <Modal
                title="Instructions"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/game')}
            />
        );
    }
};

export default Instructions;