import React, { Component } from "react";
import Button from './Button';


const Login = (props) => {
    return (
        <div className="login">
            <div>This is the login page</div>
            <h2>RPSLS</h2>
            <form action="#">
                <label htmlFor="playerName">Please enter your nickname!</label>
                <input type="text" id="playerName" value={props.playerName} onChange={props.handleChange} />
                <Button destination='game' />
                <Button destination='rules' />
            </form>
        </div>
    );
};

export default Login;