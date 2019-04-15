import React, { Component } from "react";
import { withRouter } from 'react-router-dom'

import LinkButton from './LinkButton';

const Result = ({ resetGame }) => {
    return (
        <div>
            <div>
                Result
            </div>
            <LinkButton destination={"/"} message={'New Game'} action={resetGame} />
            <LinkButton destination={"/leaderboard"} message={'Leaderboard'} />
        </div>
    );
}



export default withRouter(Result);
