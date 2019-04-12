import React, { Component } from "react";
import { Link } from 'react-router-dom';

import Modal from './Modal';
import history from './history';

const Instructions = () => {

    const handleClick = (e) => {
        const triggers = document.querySelectorAll('.interactiveOverlay__trigger');
        triggers.forEach(trigger => trigger.classList.remove('active'));
        e.target.classList.add('active');
        console.log(triggers);
    }

    const renderActions = () => {
        return (
            <React.Fragment>
                <button onClick={() => history.goBack()} className="ui button primary">Back</button>
            </React.Fragment>
        );
    }

    const renderContent = () => {
        return (
            <div className="ruleContent">
                <div className="ui big message">
                    Click form more information.
                </div>
                <div className="instructions">
                    <div className="gameDisplay">
                        <img src="../assets/game-display-desktop.png" alt="Image of gameboard."/>
                        <div className="interactiveOverlay">
                            <div onClick={(e) => handleClick(e)} className="interactiveOverlay__trigger interactiveOverlay__trigger--options"></div>
                            <div className="interactiveOverlay__container">
                                <div className="interactiveOverlay__cardDisplay">
                                    <div onClick={(e) => handleClick(e)} className="interactiveOverlay__trigger interactiveOverlay__trigger--userCard"></div>
                                    <div onClick={(e) => handleClick(e)} className="interactiveOverlay__trigger interactiveOverlay__trigger--compCard"></div>
                                </div>
                                <div className="interactiveOverlay__adminArea">
                                    <div onClick={(e) => handleClick(e)} className="interactiveOverlay__trigger interactiveOverlay__trigger--cardTracker"></div>
                                    <div onClick={(e) => handleClick(e)} className="interactiveOverlay__trigger interactiveOverlay__trigger--scoreTracker"></div>
                                    <div onClick={(e) => handleClick(e)} className="interactiveOverlay__trigger interactiveOverlay__trigger--menu"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <Modal
            title="Instructions"
            content={renderContent()}
            actions={renderActions()}
            onDismiss={() => history.push('/game')}
        />
    );
};

export default Instructions;