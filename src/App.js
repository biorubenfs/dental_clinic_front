// import logo from './logo.svg';
import './App.css';
import NewAppointment from './containers/newAppointment/NewAppointment';
import Login from './containers/login/Login'
import Signup from './containers/signup/Signup';
import logo from './logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body className="App-body">
        <img src={logo} className="App-logo" alt="logo" />
        <NewAppointment></NewAppointment>
        <Signup></Signup>
        {/* <Login></Login> */}
      </body>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;