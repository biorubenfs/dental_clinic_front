import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar-bg'>
            <nav className='navbar'>
                <a href='http://localhost:3000/'>Treatments</a>
                <a href='http://localhost:3000/'>Get an Appointment</a>
                <a href='http://localhost:3000/'>Contact</a>
                <a href='http://localhost:3000/'>Login</a>
                <a href='http://localhost:3000/'>Register</a>
            </nav>
        </div>
    )
}

export default Navbar