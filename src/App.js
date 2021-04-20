// import logo from './logo.svg';
import Home from './containers/home/Home';
import './App.css';
import NewAppointment from './containers/newAppointment/NewAppointment';
import Login from './containers/login/Login'
import ViewAppointments from './containers/viewAppointments/ViewAppointments';
import Signup from './containers/signup/Signup';
import Footer from './components/footer/Footer';
import Dashboard from './containers/dashboard/Dashboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Logo from './components/logo/Logo';
import Navbar from './components/navbar/Navbar';
import { useState } from 'react'


function App() {

  const [isLogged, setLogged] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar isLogged={isLogged} setLoggedApp={setLogged}></Navbar>
        <div className="App-body">
          <Logo></Logo>
          <Switch>
            {/* <div className="App-body"> */}
            {/* <Logo></Logo> */}
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <Route path="/" component={Home} exact />
            <Route path="/new-appointment" component={NewAppointment} />
            <Route path="/view-appointments" component={ViewAppointments} />
            <Route path="/signup" component={Signup} />
            <Route path="/login">
              <Login setLoggedApp={setLogged} />
            </Route>
            <Route path="/dashboard" component={Dashboard} />
            {/* </div> */}
          </Switch>
        </div>
        <Footer></Footer>
      </div>
    </BrowserRouter >
  );

}

export default App;