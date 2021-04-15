import "./Signup.css";
const Signup = () => {


    return (
        <form>

            <h4>Signup</h4>
            <input className="input" placeholder="Enter your username"></input><br></br>
            <input className="input" placeholder="Enter your email"></input><br></br>
            <input className="input" placeholder="Enter your password"></input><br></br>
            <button className="button signup-button">Signup</button>

        </form>
    )

}

export default Signup;