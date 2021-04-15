import "./Signup.css";
import React, { Component } from 'react';
import fetchSignup from "../../services/fetchSignup";
import SignupMessage from "../../components/signupMessage/SignupMessage";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: 1,
            test: null,
            username: null,
            email: null,
            password: null
        }
    };

    getInputChange(event) {
        const attribute = event.target.name;
        // this.setState({ [event.target.name]: event.target.value });
        this.setState({ [attribute]: event.target.value });
    }

    async signupHandler(e) {
        e.preventDefault();

        try {
            const res = await fetchSignup(this.state.username, this.state.email, this.state.password);
            console.log(res);
        } catch (error) {
            this.setState({ error: 0 });
        }
    }

    render() {

        let msg;

        switch (this.state.error) {
            case null:
                msg = <SignupMessage msg="Join us!"></SignupMessage>;
                break;
            case 1:
                msg = <SignupMessage msg="Signup!"></SignupMessage>;
                break;
            default:
        }

        // if (this.state.error == null) {

        // }
        // else if (this.state.error === 2) {
        //     msg = <SignupMessage msg="Password or email invalids"></SignupMessage>;
        // } else if (this.state.error[0] === 1) {
        //     msg = <SignupMessage msg="Successful login"></SignupMessage>;
        // } else if (this.state.error[0] === 0) {
        //     msg = <SignupMessage msg="Internal server error"></SignupMessage>;
        // }

        return (
            <>
                <div>
                    {msg}
                </div>

                <form>
                    <input className="input" type="text" name="username" onChange={(e) => this.getInputChange(e)} required placeholder="Enter your username"></input><br></br>
                    <input className="input" type="email" name="email" onChange={(e) => this.getInputChange(e)} required placeholder="Enter your email"></input><br></br>
                    <input className="input" type="password" name="password" onChange={(e) => this.getInputChange(e)} required placeholder="Enter your password"></input><br></br>
                    <button className="button signup-button" onClick={(e) => this.signupHandler(e)}>Signup</button>
                </form >
            </>
        )
    }
}


export default Signup;