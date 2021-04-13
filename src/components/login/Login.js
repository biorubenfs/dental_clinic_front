import './Login.css';

const Login = (props) => {

    return (
        <div>

            <input className="input" type="email" placeholder="Enter your email"></input><br></br>
            <input className="input" type="password" placeholder="Enter your password"></input><br></br>
            <button className="login-button">Login</button>

        </div>
    )
}

export default Login;