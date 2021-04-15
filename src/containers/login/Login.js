import './Login.css';
import fetchLogin from '../../services/fetchLogin'

const Login = (props) => {

    let email;
    let password;
    let token;

    const getEmailChange = (event) => {
        console.log(event.target.value);
        email = event.target.value;
    }

    const getPasswordChange = (event) => {
        console.log(event.target.value);
        password = event.target.value;
    }

    const handlerLogin = async () => {
        // const userData = await fetchLogin(email, password);
        // localStorage.setItem('userData', JSON.stringify(userData));
        token = await fetchLogin(email, password);

        console.log(token);
        console.log("We got the token!!");
    }

    return (
        <div>
            <form className="login-form container">

                <input className="input" type="email" name="email" placeholder="Enter your email" required
                    onChange={(e) => getEmailChange(e)}></input><br></br>

                <input className="input" type="password" name="password" placeholder="Enter your password" required
                    onChange={(e) => getPasswordChange(e)}></input><br></br>

                <button className="login-button" onClick={handlerLogin}>Login</button>
                {/* <button className="login-button" onClick={() => handlerLogin(encodeURI)}>Login</button> */}
            </form>
        </div>
    )
}

export default Login;