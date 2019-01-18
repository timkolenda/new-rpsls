import React, { Component } from "react";
import Button from './Button';


const Login = () => {
    return (
        <div className="login">
            <div>This is the login page</div>
            <h2>RPSLS</h2>

            <Button destination='game' />
            <Button destination='rules' />
        </div>
    );
};

export default Login;