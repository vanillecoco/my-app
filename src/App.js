import logo from './dogicon.png';
import './App.css';
import './Components/Header/header.css';
import './Components/Nav/nav.css';
import Users from './Components/User/Users';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        Hello!
        
        <Users />
      </header>
    </div>
  );
}

export default App;
