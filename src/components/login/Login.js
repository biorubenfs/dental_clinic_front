import './Login.css';
import React, { Fragment, useState } from 'react';

const Login = (props) => {

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const getInputChange = (event) => {
        console.log(event);
        console.log(event.target.value);
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div>
            <form className="login-form container">
                <input
                    className="input"
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    onChange={getInputChange}>
                </input><br></br>

                <input
                    className="input"
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    onChange={getInputChange}>
                </input><br></br>

                <button className="login-button" type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;