import React, { Component } from "react";
import { Link } from 'react-router-dom';

import Modal from './Modal';
import LinkButton from './LinkButton';

import history from '../utils/history';

const Menu = ({ recoverCurrentGameData, resetGame }) => {

    const renderContent = () => {
        return (
            <div className="menu">
                <div className="menuOptions">
                    <LinkButton destination={"/"} message={'New Game'} action={resetGame} />
                    <LinkButton destination={"/instructions"} message={'Instructions'}/>
                    <LinkButton destination={"/leaderboard"} message={'Leaderboard'} />
                </div>
            </div>
        )
    }

    const renderActions = () => {
        return (
            <React.Fragment>
                <Link to="/game" className="ui button primary massive">Back</Link>
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