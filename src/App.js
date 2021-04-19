// import logo from './logo.svg';
import Home from './containers/home/Home';
import './App.css';
import NewAppointment from './containers/newAppointment/NewAppointment';
import Login from './containers/login/Login'
import ViewAppointments from './containers/viewAppointments/ViewAppointments';
import Signup from './containers/signup/Signup';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Dashboard from './containers/dashboard/Dashboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Logo from './components/logo/Logo';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <div className="App-body">
          <Logo></Logo>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/new-appointment" component={NewAppointment} />
            <Route path="/view-appointments" component={ViewAppointments} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
        <Footer></Footer>
      </div>
    </BrowserRouter >
  );

}

export default App;