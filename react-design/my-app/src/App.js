import React from 'react';
import logo from './logo.svg';
import './App.css';
import StopWatch2 from './StopWatch2';
import StopWatch from './StopWatch';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ display: 'none' }}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <StopWatch2></StopWatch2> */}
      <StopWatch></StopWatch>
    </div>
  );
}

export default App;
