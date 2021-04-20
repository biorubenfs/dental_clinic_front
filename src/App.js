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
  const [isAdmin, setAdmin] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar isLogged={isLogged} setLoggedApp={setLogged} isAdmin={isAdmin} setAdminApp={setAdmin}></Navbar>
        <div className="App-body">
          <Logo></Logo>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/new-appointment" component={NewAppointment} />
            <Route path="/view-appointments" component={ViewAppointments} />
            <Route path="/signup" component={Signup} />
            <Route path="/login">
              <Login setLoggedApp={setLogged} setAdminApp={setAdmin} />
            </Route>
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
        <Footer></Footer>
      </div>
    </BrowserRouter >
  );

}

export default App;