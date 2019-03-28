import React, { Component } from "react";

class Card extends Component {

    const setWidthandHeight = () => {
        console.log(window.innerWidth);
        const windowSize = window.innerWidth;
        const widthOfSquare = windowSize / 1.5;
        console.log(widthOfSquare);
        return widthOfSquare
    }

    const squareStyle = {
        width: setWidthandHeight(),
        height: setWidthandHeight()
    }

    render() {
        return (
            <div className="card">
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