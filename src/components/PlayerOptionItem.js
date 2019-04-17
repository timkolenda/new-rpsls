import React, { Component } from "react";

class PlayerOptionItem extends Component{
    
    state = {squareDimension: 0}

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }

    handleClick = () => {
        this.props.getPlayerChoice(this.props.type);
        this.props.disableButtonDuringAnimation();
    }

    
    
    updateDimensions = () => {
        const windowSize = window.innerWidth;
        const squareDimension = windowSize / 4;
        this.setState({ squareDimension });
    }


    render() {
        const squareStyle = {
            width: this.state.squareDimension,
            height: this.state.squareDimension
        }

        let disabled = false;
        if (this.props.tempDisabled) {
            disabled = true;
        } else {
            disabled = !this.props.playerCards[this.props.type];
        }

        return (
            <button 
                className={`playerOptionItem`}  
                onClick={this.handleClick} 
                style={window.innerWidth < 750 ? squareStyle : null} 
                disabled={disabled}>
                <div>
                    <img src={this.props.image} alt={this.props.alt} className={this.props.customClass}/>
                </div>
            </button>
        );
    }
}

export default PlayerOptionItem;