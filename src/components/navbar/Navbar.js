import './Navbar.css'
import logo from '../../logo.svg'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo' >
                <img src={logo} alt='logo'></img>
            </div>
            <div className='navlink'>
                <a href='http://localhost:3000/'>Treatments</a>
                <a href='http://localhost:3000/'>Get an Appointment</a>
                <a href='http://localhost:3000/'>Contact</a>
                <a href='http://localhost:3000/'>Login</a>
                <a href='http://localhost:3000/'>Register</a>
            </div>
        </div>
    )
}

export default Navbar