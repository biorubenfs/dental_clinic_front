import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="App-header">
            <div className='navbar-bg'>
                <nav className='navbar'>
                    <Link to="/">Home</Link>
                    <Link to="/new-appointment">Get an Appointment</Link>
                    <Link to="/view-appointments">View Appointments</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Register</Link>
                </nav>
            </div>
        </header>
    )
}

export default Navbar