import React, { Component } from "react";

class PlayerOptionItem extends Component{
    
    state = {squareDimension: 0}

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }

    handleClick = () => {
        this.props.getPlayerChoice(this.props.type);
        this.props.showCard('player');
    }
    
    updateDimensions = () => {
        const windowSize = window.innerWidth;
        const squareDimension = windowSize / 4;
        console.log(squareDimension);
        this.setState({ squareDimension });
    }


    render() {

        const squareStyle = {
            width: this.state.squareDimension,
            height: this.state.squareDimension
        }

        return (
            <button className="playerOptionItem" onClick={this.handleClick} style={squareStyle} >
                <div>
                    <img src={this.props.image} alt={this.props.alt} class={this.props.customClass}/>
                </div>
            </button>
        );
    }
}

export default PlayerOptionItem;