import "./Signup.css";
import React, { Component } from 'react';
import fetchSignup from "../../services/fetchSignup";
import SignupMessage from "../../components/signupMessage/SignupMessage";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusCode: null,
            usernameIsValid: false,
            passwordIsValid: false
        }
        this.username = null;
        this.email = null;
        this.password = null;
    };


    getUsernameChange(event) {
        console.log(event);
        if (event.target.value.length < 5) {
            console.log("Username must be of minimum 6 characters");
        } else {
            this.username = event.target.value;
        }
    }

    getEmailChange(event) {
        this.email = event.target.value;
    }

    getPasswordChange(event) {
        if (event.target.value.length < 4) {
            console.log("Password not valid");
        } else {
            console.log("cambiamos el estado y debería renderizarse de nuevo");
            this.password = event.target.value;
            this.setState({ passwordIsValid: true });
        }
    }

    async signupHandler(e) {
        e.preventDefault();

        try {
            const res = await fetchSignup(this.username, this.email, this.password);

            if (res.status === 201) {
                this.setState({ statusCode: 2 })
            } else if (res.status === 400) {
                console.log(res);
                this.setState({ statusCode: 3 });
            }

        } catch (error) {
            // console.log(error);
            this.setState({ statusCode: 0 });
        }
    }

    render() {

        // let msg;

        // switch (this.state.statusCode) {
        //     case null:
        //         msg = <SignupMessage msg="Join us!" emoji=";-)"></SignupMessage>;
        //         break;
        //     case 0:
        //         msg = <SignupMessage msg="Something was wrong" emoji=":'‑("></SignupMessage>;
        //         break;
        //     case 2:
        //         msg = <SignupMessage msg="You signed up successfully!" emoji=":-)"></SignupMessage>;
        //         break;
        //     case 3:
        //         msg = <SignupMessage msg="Opps! User is already registered" emoji=":-o"></SignupMessage>;
        //         break;
        //     default:
        // }

        return (
            <>

                {/* <div>
                    {msg}
                </div> */}

                <form onSubmit={(e) => this.signupHandler(e)}>

                    {/* <input className="input" type="text" name="username" onChange={(e) => this.getInputChange(e)} required placeholder="Enter your username"></input><br></br>
                    <input className="input" type="email" name="email" onChange={(e) => this.getInputChange(e)} required placeholder="Enter your email"></input><br></br> */}
                    {/* <input className="input" type="password" name="password" onChange={(e) => this.getInputChange(e)} required placeholder="Enter your password"></input><br></br> */}
                    <input className="input" type="text" name="username" onInput={(e) => this.getUsernameChange(e)} required placeholder="Enter your username"></input><br></br>
                    <input className="input" type="email" name="email" onInput={(e) => this.getEmailChange(e)} required placeholder="Enter your email"></input><br></br>
                    <input className="input" type="password" name="password" onInput={(e) => this.getPasswordChange(e)} required placeholder="Enter your password"></input><br></br>
                    {/* <button className="button signup-button" onClick={(e) => this.signupHandler(e)}>Signup</button> */}
                    {!this.state.passwordIsValid && <span>Password is not valid</span>}<br></br>
                    <button className="button signup-button" type="submit">Signup</button>

                </form >


            </>
        )
    }
}


export default Signup;