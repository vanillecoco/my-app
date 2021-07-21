import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Headers from './Components/Header/header';
import Nav from './Components/Nav/nav';
import Function1 from './Components/Funtions/funtions1';



ReactDOM.render(
  <React.StrictMode>
    <Function1 />
    <Headers />
    <Nav />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
