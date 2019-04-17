import React, { Component } from "react";
import { Link } from 'react-router-dom';

import firebase from '../database/firebase/firebase';

import Modal from './Modal';
import history from '../utils/history';

const dbRef = firebase.database().ref();

class Leaderboard extends Component {

    state={ players: [] }

    componentDidMount(){
        this.pullDataFromFirebase();
    }
    
    pullDataFromFirebase = () => {
        dbRef.once('value').then((snapshot) => {
            const playerList = Object.values(snapshot.toJSON());
            this.sortPlayerList(playerList);
        });
    }

    sortPlayerList = (playerList) => {
        const sortedList = playerList.sort((a, b) => {
            if (a.win < b.win) return 1;
            if (a.win > b.win) return -1;
            if (a.win === b.win && a.lose > b.lose) return 1;
            if (a.win === b.win && a.lose < b.lose) return -1;
        });
        // console.log(sortedList);
        this.setState({ players: sortedList });
    }

    renderRankings = () => {
        const list = this.state.players.map((player, index) => {
            if ((player.win + player.lose + player.tie) === 25) {
                return (
                    <tr key={index}>
                        <td data-label="Rank">{index + 1}</td>
                        <td data-label="Name">{player.name}</td>
                        <td data-label="Wins">{player.win}</td>
                        <td data-label="Loses">{player.lose}</td>
                    </tr>
                )
            }
        });
        return list;
    }

    renderContent = () => { 
        return (
            <div className="leaderboard">
                <table className="ui celled large table unstackable">
                    <thead>
                        <tr>
                            <th className="rankColumn">Rank</th>
                            <th>Name</th>
                            <th>Wins</th>
                            <th>Loses</th>
                        </tr>
                    </thead>
                    <tbody className="rankList">
                        {this.renderRankings()}
                    </tbody>
                </table>
            </div>
        )
    }

    renderActions = () => {
        return (
            <React.Fragment>
                <button onClick={() => history.goBack()} className="ui button primary massive">Back</button>
            </React.Fragment>
        );
    }



    render(){
        return (
            <Modal
                title="Leaderboard"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.goBack()}
            />
        );
    }
};

export default Leaderboard;