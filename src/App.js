import React, { useState } from 'react';
import TimeInput from "./components/TimeInput"
import './App.css';

function App() {

  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="App">
      <header className="App-header">      </header>
        <div className="container">
        <h1> The Timer</h1>
        {/* SET HOURS, MINS   */}
        <TimeInput unit="minutes"/>
        {/* TIMER SECTION  */}
        {/* START/STOP  */}
      </div>
    </div>
  );
}

export default App;
