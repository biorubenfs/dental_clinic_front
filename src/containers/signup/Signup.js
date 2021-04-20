import "./Signup.css";
import React, { Component } from 'react';
import fetchSignup from "../../services/fetchSignup";
import SignupMessage from "../../components/signupMessage/SignupMessage";
import { withRouter } from 'react-router-dom'

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
        this.textInput = React.createRef();
    };

    componentDidMount() {
        this.textInput.current.focus();
    }

    getUsernameChange(event) {
        if (event.target.value.length < 4) {
            this.setState({ usernameIsValid: false });
        } else {
            this.username = event.target.value;
            this.setState({ usernameIsValid: true });
        }
    }

    getEmailChange(event) {
        this.email = event.target.value;
    }

    getPasswordChange(event) {
        if (event.target.value.length < 4) {
            this.setState({ passwordIsValid: false });
        } else {
            this.password = event.target.value;
            this.setState({ passwordIsValid: true });
        }
    }

    async signupHandler(e) {
        e.preventDefault();

        if (this.state.usernameIsValid && this.state.passwordIsValid) {

            const res = await fetchSignup(this.username, this.email, this.password);

            if (res.status === 201) {
                this.setState({ statusCode: 2 })
                this.props.history.push("/login");
            } else if (res.status === 400) {
                this.setState({ statusCode: 3 });
            } else {
                this.setState({ statusCode: 0 });
            }
        } else {
            this.setState({ statusCode: 1 });
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
                msg = <SignupMessage msg="Form is not fill correctly" emoji=":'‑("></SignupMessage>;
                break;
            case 2:
                msg = <SignupMessage msg="You signed up successfully!" emoji=":-)"></SignupMessage>;
                break;
            case 3:
                msg = <SignupMessage msg="Opps! User is already registered" emoji=":-o"></SignupMessage>;
                break;
            default:
        }

        return (
            <>
                <div>
                    {msg}
                </div>

                <form onSubmit={(e) => this.signupHandler(e)}>

                    <input className="input" type="text" name="username" onInput={(e) => this.getUsernameChange(e)}
                        required placeholder="Enter your username" ref={this.textInput}></input><br></br>
                    {!this.state.usernameIsValid && <p>Username must be of minimum 4  characters</p>}<br></br>

                    <input className="input" type="email" name="email" onInput={(e) => this.getEmailChange(e)}
                        required placeholder="Enter your email"></input><br></br>

                    <input className="input" type="password" name="password" onInput={(e) => this.getPasswordChange(e)}
                        required placeholder="Enter your password"></input><br></br>
                    {!this.state.passwordIsValid && <p>Password must be of minimum 4 characters</p>}<br></br>

                    <button className="button signup-button" type="submit">Signup</button>

                </form >
            </>
        )
    }
}

export default withRouter(Signup);
// export default Signup;