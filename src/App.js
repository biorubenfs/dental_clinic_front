// import logo from './logo.svg';
import Home from './containers/home/Home';
import './App.css';
import NewAppointment from './containers/newAppointment/NewAppointment';
import Login from './containers/login/Login'
import ViewAppointments from './containers/viewAppointments/ViewAppointments';
import Signup from './containers/signup/Signup';
import logo from './logo.png';
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
      </header>
      <body className="App-body">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Home></Home> */}
        {/* <NewAppointment></NewAppointment> */}
        {/*<ViewAppointments></ViewAppointments>*/}
        {/* <Signup></Signup> */}
        {/*<ViewAppointments></ViewAppointments>*/}
        {/*<Signup></Signup>*/}
        {/* <Login></Login> */}
      </body>
      <footer className="App-footer">
        <Footer></Footer>
      </footer>
    </div>
  );

}

export default App;