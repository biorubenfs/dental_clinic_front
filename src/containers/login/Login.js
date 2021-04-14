import './Login.css';
import React, { Fragment, useState } from 'react';
import fetchLogin from '../../services/fetchLogin'

const Login = (props) => {

    let email;
    let password;

    const getEmailChange = (event) => {
        console.log(event);
        email = event.target.value;
    }

    const getPasswordChange = (event) => {
        console.log(event);
        password = event.target.value;
    }

    const handlerLogin = () => {
        console.log(email, password);
        fetchLogin(email, password);
    }

    return (
        <div>
            <form className="login-form container">
                <input className="input" type="email" name="email" placeholder="Enter your email" required onChange={getEmailChange}></input><br></br>
                <input className="input" type="password" name="password" placeholder="Enter your password" required onChange={getPasswordChange}></input><br></br>

                <button className="login-button" onClick={handlerLogin()}>Login</button>
            </form>
        </div>
    )
}

export default Login;