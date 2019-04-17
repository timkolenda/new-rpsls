import React, { Component } from "react";
import { withRouter } from 'react-router-dom'

import LinkButton from './LinkButton';

const Result = ({ resetGame, playerWinCount=0, compWinCount=0, tieCount=0, playerName, history }) => {
    if (!playerName) {
        history.push('/');
    }
    return (
        <div className="results">
            <table className="ui celled large table padded unstackable">
                <thead>
                    <tr>
                        <th colSpan="2" className="center aligned">{playerName}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Games Won</td>
                        <td className="center aligned">{playerWinCount}</td>
                    </tr>
                    <tr>
                        <td>Games Lost</td>
                        <td className="center aligned">{compWinCount}</td>
                    </tr>
                    <tr>
                        <td>Games Tied</td>
                        <td className="center aligned">{tieCount}</td>
                    </tr>
                </tbody>
            </table>
            <LinkButton destination={"/"} message={'New Game'} action={resetGame} />
            <LinkButton destination={"/leaderboard"} message={'Leaderboard'} />
        </div>
    );
}



export default withRouter(Result);
