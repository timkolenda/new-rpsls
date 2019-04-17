import React, { Component } from "react";

import PlayerOptionItem from './PlayerOptionItem';

class PlayerOptionList extends Component {
    state = {tempDisabled: false}
    
    disableButtonDuringAnimation = () => {
        this.setState({ tempDisabled: true });
        setTimeout((roundResult) => {
            this.setState({ tempDisabled: false });
        }, 3500);
    }
    
    renderPlayerOptions = () => {
        const playerOptions = this.props.options.map((option) => {
                return (
                    <PlayerOptionItem
                        key={option.index}
                        image={option.img}
                        alt={option.alt}
                        type={option.type}
                        getPlayerChoice={this.props.getPlayerChoice}
                        showCard={this.props.showCard}
                        customClass={option.customClass}
                        playerCards={this.props.playerCards}
                        disableButtonDuringAnimation={this.disableButtonDuringAnimation}
                        tempDisabled={this.state.tempDisabled}
                    />
                );     
            });
        return playerOptions
    } 


    render() {
        return (
            <div className="playerOptionList">
                {this.renderPlayerOptions()}
            </div>
        );
    }
};


export default PlayerOptionList;
