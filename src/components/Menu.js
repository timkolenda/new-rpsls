import React, { Component } from "react";
import { Link } from 'react-router-dom';

import Modal from './Modal';
import LinkButton from './LinkButton';

import history from './history';

const Menu = () => {


    const renderContent = () => {
        return (
            <div className="menu">
                <div className="menuOptions">
                    <LinkButton destination={"/"} message={'New Game'} />
                    <LinkButton destination={"/rules"} message={'Rules'}/>
                    <LinkButton destination={"/leaderboard"} message={'Leaderboard'}/>
                </div>
            </div>
        )
    }

    const renderActions = () => {
        return (
            <React.Fragment>
                <button onClick={() => history.goBack()} className="ui button primary">Back</button>
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