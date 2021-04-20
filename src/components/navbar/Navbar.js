import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
    };

    handleLogout() {
        localStorage.removeItem('userData');
        this.props.setLoggedApp(false);

    }

    render() {

        return (
            <header className="App-header">
                <div className='navbar-bg'>
                    <nav className='navbar'>
                        <Link to="/">Home</Link>
                        <Link to="/new-appointment">Get an Appointment</Link>
                        <Link to="/view-appointments">View Appointments</Link>
                        <Link to="/dashboard">Dashboard</Link>

                        {this.props.isLogged && <Link to="" onClick={() => this.handleLogout()}>Logout</Link>}
                        {!this.props.isLogged && <Link to="/login">Login</Link>}
                        {/* {this.estado && <Link to="">Logout</Link>} */}
                        {/* {!this.estado && <Link to="/login">Login</Link>} */}

                        <Link to="/signup">Register</Link>
                        {/* <a onClick={() => this.doLogin()}>Comprobando Login</a> */}
                    </nav>
                </div>
            </header>
        )
    }
}

export default Navbar;