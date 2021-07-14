import logo from './dogicon.png';
import './App.css';
import './Components/Header/header.css';
import './Components/Nav/nav.css'


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        Hello!
        
      </header>
    </div>
  );
}

export default App;
