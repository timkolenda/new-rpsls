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

    render() {
        const squareStyle = {
            width: this.state.squareDimension,
            height: this.state.squareDimension
        }
        const width = {
            width: this.state.squareDimension
        }
        return (
            <div className="card" style={width}>
                <div className={`card__cardFlipper ${this.props.flipped ? 'card__cardFlipper--active' : ''}`} style={squareStyle}>
                    <div className={`card__display card__display--back`} style={squareStyle}>
                        <img src='' alt='' />
                    </div>
                    <div className={`card__display card__display--front`} style={squareStyle}>
                        <img src={this.props.image} alt='' />
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;