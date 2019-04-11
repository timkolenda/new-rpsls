import React, { Component } from "react";
import { Link } from 'react-router-dom';

import Modal from './Modal';
import history from './history';

const Rules = () => {

    const renderActions = () => {
        return (
            <React.Fragment>
                <Link to="" onClick={() => history.goBack()} className="ui button primary">Back</Link>
            </React.Fragment>
        );
    }

    const renderContent = () => {
        return `Are you sure you want to delete the stream with title:?`
    }


    return (
        <Modal
            title="Rules"
            content={renderContent()}
            actions={renderActions()}
            onDismiss={() => history.goBack()}
        />
    );
};

export default Rules;