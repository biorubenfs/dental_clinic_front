// import logo from './logo.svg';
import './App.css';
import NewAppointment from './containers/newAppointment/NewAppointment';
import Login from './containers/login/Login'
import ViewAppointments from './containers/viewAppointments/ViewAppointments';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Login></Login> */}
        {/* <NewAppointment></NewAppointment> */}
        <ViewAppointments></ViewAppointments>
      </header>
    </div>
  );
}

export default App;