// import logo from './logo.svg';
import Home from './containers/home/Home';
import './App.css';
import NewAppointment from './containers/newAppointment/NewAppointment';
import Login from './containers/login/Login'
import ViewAppointments from './containers/viewAppointments/ViewAppointments';
import Signup from './containers/signup/Signup';
import logo from './logo.png';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Dashboard from './containers/dashboard/Dashboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <body className="App-body">
            <img src={logo} className="App-logo" alt="logo"/>
            <Route path="/" component={Home} exact/>
            <Route path="/new-appointment" component={NewAppointment}/>
            <Route path="/view-appointments" component={ViewAppointments}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/login" component={Login}/>
            <Route path="/dashboard" component={Dashboard}/>
          </body>
        </Switch>
          <Footer></Footer>
      </div>
    </BrowserRouter>
  );

}

export default App;