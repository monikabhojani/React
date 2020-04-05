import React from 'react';

import './App.css';
import Person from './person';
import InputLogger from './InputLogger';
import Increment from './Increment';
import CountClickChild from './CountClickChild';
import CountClickParent from './CountClickParent';

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
      <InputLogger/><InputLogger/>
      <hr/>
      <Increment initVal={3}/>
      <hr/>
      <CountClickParent />
      <p></p>
    </div>
  );
}

export default App;
