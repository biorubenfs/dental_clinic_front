import "./Login.css";
import fetchLogin from "../../services/fetchLogin";
import React, { Component } from "react";
import LoginMessage from "../../components/loginMessage/LoginMessage";
import { withRouter } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: [3],
            email: null,
            password: null,
            msg: null,
        };
    }

    // Posibles estados:
    // 0 => Server Apagado
    // 1 => OK
    // 2 => wrong
    // 3 => Login

    getEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    getPasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    async handlerFetch(e) {
        e.preventDefault();

        try {
            const res = await fetchLogin(this.state.email, this.state.password);
            // console.log(res);

            if (!res.token) {
                this.setState({ error: [2] });
            } else {
                this.setState({ error: [1] });

                // TODO: modificar el estado de app.js concretamente el isLogged 
                localStorage.setItem('userData', JSON.stringify(res));

                if (res.role === 'admin') {
                    this.props.setAdminApp(true);
                };

                this.props.setLoggedApp(true);
                this.props.history.push('/dashboard')
                // console.log(JSON.parse(localStorage.getItem('userData')).token);
            }
        } catch (error) {
            this.setState({ error: [0] });
        }

    }
    render() {
        let msg;

        if (this.state.error[0] === 3) {
            msg = <LoginMessage msg="Enter your credentials"></LoginMessage>;
        }
        else if (this.state.error[0] === 2) {
            msg = <LoginMessage msg="Password or email invalids"></LoginMessage>;
        } else if (this.state.error[0] === 1) {
            msg = <LoginMessage msg="Successful login"></LoginMessage>;
        } else if (this.state.error[0] === 0) {
            msg = <LoginMessage msg="Internal server error"></LoginMessage>;
        }

        return (
            <>
                {/* {this.state.error && <Error msg="Credenciales erroneas"></Error>}
        {!this.state.error && <Success msg="Credenciales validas"></Success>} */}
                <div>
                    {msg}
                </div>
                <form onSubmit={(e) => this.handlerFetch(e)}>
                    <input
                        className="input input-email" type="email" name="email"
                        placeholder="Enter your email" required onChange={(e) => this.getEmailChange(e)}
                    ></input>
                    <br></br>

                    <input
                        className="input input-password" type="password" name="password"
                        placeholder="Enter your password" required onChange={(e) => this.getPasswordChange(e)}
                    ></input>
                    <br></br>
                    <button className="button login-button" type="submit">Login</button>

                    {/* <button className="button login-button" onClick={(e) => this.handlerFetch(e)}>Login</button> */}
                </form>
            </>
        );
    }
}

export default withRouter(Login);