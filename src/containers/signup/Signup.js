import "./Signup.css";
import React, { Component } from 'react';
import fetchSignup from "../../services/fetchSignup";
import SignupMessage from "../../components/signupMessage/SignupMessage";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusCode: null,
            username: null,
            email: null,
            password: null,
            formIsValid: false
        }
    };

    getInputChange(event) {
        const attribute = event.target.name;
        // this.setState({ [event.target.name]: event.target.value });
        this.setState({ [attribute]: event.target.value });
    }

    async signupHandler(e) {
        e.preventDefault();

        if (!this.state.username || !this.state.email || !this.state.password) {
            return this.setState({ statusCode: 1 })
        };

        if (this.state.email) {
            let numAts = this.state.email.split('@').length - 1;
            let lastAtPos = this.state.email.lastIndexOf('@');
            let lastDotPos = this.state.email.lastIndexOf('.');

            // NOTE: Review email validation
            if (!(numAts === 1 && lastAtPos < lastDotPos && lastAtPos > 0 && lastDotPos > 2 && (this.state.email.length - lastDotPos) > 2)) {
                // this.setState({ formIsValid: false });
                return this.setState({ statusCode: 4 })
            }
        }

        try {
            const res = await fetchSignup(this.state.username, this.state.email, this.state.password);

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

        let msg;

        switch (this.state.statusCode) {
            case null:
                msg = <SignupMessage msg="Join us!" emoji=";-)"></SignupMessage>;
                break;
            case 0:
                msg = <SignupMessage msg="Something was wrong" emoji=":'‑("></SignupMessage>;
                break;
            case 1:
                msg = <SignupMessage msg="All fields must be completed" emoji=":‑/"></SignupMessage>;
                break;
            case 2:
                msg = <SignupMessage msg="You signed up successfully!" emoji=":-)"></SignupMessage>;
                break;
            case 3:
                msg = <SignupMessage msg="Opps! User is already registered" emoji=":-o"></SignupMessage>;
                break;
            case 4:
                msg = <SignupMessage msg="Email is not valid" emoji="x-("></SignupMessage>;
                break;
            default:
        }

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