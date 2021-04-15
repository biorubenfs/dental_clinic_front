import "./Login.css";
import fetchLogin from "../../services/fetchLogin";
import React, { Component } from "react";
import Error from "../../components/error/Error";
import Success from "../../components/success/Success";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: [3],
            email: null,
            password: null,
            msg: null
        };
    }

    // Posibles estados:
    // 0 => Server Apagado
    // 1 => OK
    // 2 => wrong
    // 3 => Login

    getEmailChange(event) {
        this.setState({ email: event.target.value });
        console.log(this.state.email);
    }

    getPasswordChange(event) {
        this.setState({ password: event.target.value });
        console.log(this.state.password);
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
                localStorage.setItem('userData', JSON.stringify(res));
            }
        } catch (error) {
            this.setState({ error: [0] });
        }

    }
    render() {
        let msg;

        if (this.state.error[0] == 3) {
            msg = <Success msg="Enter your credentials"></Success>;
        }
        else if (this.state.error[0] === 2) {
            msg = <Error msg="Password or email invalids"></Error>;
        } else if (this.state.error[0] === 1) {
            msg = <Success msg="Successful login"></Success>;
        } else if (this.state.error[0] === 0) {
            msg = <Error msg="Internal server error"></Error>;
        }

        return (
            <>
                {/* {this.state.error && <Error msg="Credenciales erroneas"></Error>}
        {!this.state.error && <Success msg="Credenciales validas"></Success>} */}
                <div>
                    {msg}
                </div>
                <form>
                    <input
                        className="input input-email"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        onChange={(e) => this.getEmailChange(e)}
                    ></input>
                    <br></br>

                    <input
                        className="input input-password"
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        required
                        onChange={(e) => this.getPasswordChange(e)}
                    ></input>
                    <br></br>
                    <button onClick={(e) => this.handlerFetch(e)}>Login</button>
                </form>
            </>
        );
    }
}

export default Login;
// const Login = (props) => {

//     let email;
//     let password;
//     let token;

//     const getEmailChange = (event) => {
//         console.log(event.target.value);
//         email = event.target.value;
//     }

//     const getPasswordChange = (event) => {
//         console.log(event.target.value);
//         password = event.target.value;
//     }

//     const handlerLogin = async () => {
//         // const userData = await fetchLogin(email, password);
//         // localStorage.setItem('userData', JSON.stringify(userData));
//         token = await fetchLogin(email, password);

//         console.log(token);
//         console.log("We got the token!!");
//     }

//     return (
//         <div>
//             <form className="login-form container">

// <input className="input input-email" type="email" name="email" placeholder="Enter your email" required
//     onChange={(e) => getEmailChange(e)}></input><br></br>

//                 <input className="input input-password" type="password" name="password" placeholder="Enter your password" required
//                     onChange={(e) => getPasswordChange(e)}></input><br></br>

//                 <button className="button login-button" onClick={() => handlerLogin()}>Login</button>
//                 {/* <button className="button login-button" onClick={handlerLogin}>Login</button> */}
//                 {/* <button className="login-button" onClick={() => handlerLogin(encodeURI)}>Login</button> */}
//             </form>
//         </div>
//     )
// }
