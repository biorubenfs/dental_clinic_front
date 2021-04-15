// import logo from './logo.svg';
import './App.css';
import Login from './containers/login/Login'
import logo from './logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Login></Login>
      </header>
    </div>
  );
}

export default App;
