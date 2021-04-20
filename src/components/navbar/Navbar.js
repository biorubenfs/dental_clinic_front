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
        this.props.setAdminApp(false);
    }

    render() {

        return (
            <header className="App-header">
                <div className='navbar-bg'>
                    <nav className='navbar'>
                        <Link to="/">Home</Link>
                        {this.props.isAdmin && <Link to="/new-appointment">New Appointment</Link>}
                        {this.props.isAdmin && <Link to="/view-appointments">View Appointments</Link>}

                        {this.props.isLogged && !this.props.isAdmin && <Link to="/dashboard">Dashboard</Link>}

                        {this.props.isLogged && <Link to="" onClick={() => this.handleLogout()}>Logout</Link>}
                        {!this.props.isLogged && <Link to="/login">Login</Link>}

                        <Link to="/signup">Register</Link>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Navbar;