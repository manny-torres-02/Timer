import React, { useState } from 'react';
// import TimeInput from "./components/TimeInput"
import './App.css';

function App() {

  const [minutes, setMinutes] = useState(10)
  const [isActive, setIsActive] = useState(false)

  function increment (minutes) { 
    console.log(1)
    setMinutes(prevMinutes => prevMinutes+1)
  }

  function decrement (minutes) {
    console.log(1)
    setMinutes(prevMinutes => prevMinutes -1)
  }

  return (
    <div className="App">
      <header className="App-header">      </header>
        <div className="container">
        <h1> The Timer</h1>
        {/* SET HOURS, MINS   */}
        <div className="input-time">
        <button onClick={increment}>+</button>
        <span>{minutes}</span>
        <button onClick={decrement}>-</button>
        </div>
        {/* TIMER SECTION  */}
        <div className="display">
        {/* <p>{runningMinutes}</p> */}
          </div>        
        {/* START/STOP  */}
        <button onClick={start}> Start</button>
      </div>
    </div>
  );
}

export default App;
