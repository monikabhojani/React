import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './person';
import InputLogger from './InputLogger';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
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
      <Person name="Monika" age="28" weight="70" height="5&apos;1&quot;"/>
      <Person name="Munir" age="18" weight="90" height="6&apos;0&quot;"/>
      <hr/>
      <InputLogger/>
    </div>
  );
}

export default App;
