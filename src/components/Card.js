import React, { Component } from "react";

class Card extends Component {
    state = {squareDimension: 0}

    componentDidMount() {
        this.updateDimensions()
        window.addEventListener("resize", this.updateDimensions);
    }

    updateDimensions = () => {
        const windowSize = window.innerWidth;
        const squareDimension = windowSize / 1.55;
        this.setState({ squareDimension });
    }

    renderVictoryMessage = () => {
        return (
            <div className="card__victoryMessage">
                {this.props.winStatement}
            </div>
        );
    }

    render() {
        const squareStyle = {
            width: this.state.squareDimension,
            height: this.state.squareDimension
        }
        
        return (
            <div 
                className="card" 
                style={window.innerWidth < 750 ? squareStyle : null} 
            >
                <div 
                    className={`card__cardFlipper ${this.props.flipped ? 'card__cardFlipper--active' : ''}`} 
                    style={window.innerWidth < 750 ? squareStyle : null} 
                >
                    <div 
                        className={`card__display card__display--back`} 
                        style={window.innerWidth < 750 ? squareStyle : null} 
                    >
                        <img src='../../assets/background.png' alt='image for the back of the card' />
                    </div>
                    <div 
                        className={`card__display card__display--front`} 
                        style={window.innerWidth < 750 ? squareStyle : null} 
                    >
                        <img src={this.props.image} alt='played card image' />
                        {/* {setTimeout(() => {this.renderVictoryMessage()}, 500)} */}
                        {this.renderVictoryMessage()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;