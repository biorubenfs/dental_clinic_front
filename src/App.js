// import logo from './logo.svg';
import './App.css';
import NewAppointment from './containers/newAppointment/NewAppointment';
import Login from './containers/login/Login'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Login></Login> */}
        <NewAppointment></NewAppointment>
      </header>
    </div>
  );
}

export default App;