import React, { Component } from "react";

import firebase from './firebase';

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
            return (
                <div className="rankingRow">
                    <div className="column column--short">{index + 1}</div>
                    <div className="column column--long column--name">{player.name}</div>
                    <div className="column column--long">{player.win}</div>
                    <div className="column column--long">{player.tie}</div>
                    <div className="column column--long">{player.lose}</div>
                </div>
            )
        });
        console.log(list);
        return list;
    }



    render(){
        return (
            <div className="leaderboard">
                <div className="title">
                    <h2>Leaderboard</h2>
                </div>
                <div className="rankings">
                    {this.renderRankings()}
                </div>
            </div>
        );
    }
};

export default Leaderboard;