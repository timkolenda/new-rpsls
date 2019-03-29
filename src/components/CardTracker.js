import React, { Component } from "react";



class CardTracker extends Component {
    state={ playerCardsArray: [], compCardsArray: [] }    

    componentDidMount() {
        this.setPlayerCardsArray();

    }

    setPlayerCardsArray = () => {
        const newArray = Object.entries(this.props.playerCards);
        this.setState({ playerCardsArray: newArray });
    }

    

    render() {
        return (
            <div className="cardTracker">                
                <div className="counterList">
                    player
                </div>
                <div className="counterList">
                    comp
                </div>
            </div>
        );
    }
}


export default CardTracker;