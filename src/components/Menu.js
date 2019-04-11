import React, { Component } from "react";
import { Link } from 'react-router-dom';

import Modal from './Modal';
import LinkButton from './LinkButton';

import history from './history';

const Menu = ({ recoverCurrentGameData, resetGame }) => {

    const handleClick = () => {
        history.goBack();
    }

    const renderContent = () => {
        return (
            <div className="menu">
                <div className="menuOptions">
                    <LinkButton destination={"/"} message={'New Game'} action={resetGame} />
                    <LinkButton destination={"/rules"} message={'Rules'}/>
                    <LinkButton destination={"/leaderboard"} message={'Leaderboard'} />
                </div>
            </div>
        )
    }

    const renderActions = () => {
        return (
            <React.Fragment>
                <button onClick={() => handleClick()} className="ui button primary">Back</button>
            </React.Fragment>
        );
    }




    return (
        <Modal
            title="Menu"
            content={renderContent()}
            actions={renderActions()}
            onDismiss={() => history.goBack()}
        />
    )
}


export default Menu;