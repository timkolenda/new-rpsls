import React, { Component } from "react";
import Button from './Button';


const Login = (props) => {
    return (
        <div className="login">
            <div>This is the login page</div>
            <h2>RPSLS</h2>
            <form action="#" id="newPlayerCreationForm" onSubmit={props.handleSubmit} >
                <label htmlFor="playerName">Please enter your nickname!</label>
                <input type="text" id="playerName" value={props.playerName} onChange={props.handleChange} />
                <button>
                    <Button destination='game' onClickAction={props.formSubmit} />
                </button>
            </form>
            <Button destination='rules' />
        </div>
    );
};

export default Login;