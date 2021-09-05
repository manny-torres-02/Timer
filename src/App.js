import React, { useState } from 'react';
import { useEffect } from 'react';
// import TimeInput from "./components/TimeInput"
import './App.css';

function App() {

  const [minutes, setMinutes] = useState(2)
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [total, setTotal] = useState((minutes * 60))

  function increment() {
    setMinutes(prevMinutes => prevMinutes + 1)
  }

  function decrement() {
    setMinutes(prevMinutes => prevMinutes - 1)
  }

  function start() {
    setIsActive(prevIsActive => !prevIsActive)
    console.log(isActive)
  }

  useEffect(() => {
    
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        console.log("rendered")
        setTotal(prevTotal => prevTotal - 1);
        // console.log(minutes)
        if(total%60===0) {
          console.log("thisworks") 
          setMinutes(prevMinutes => prevMinutes -1)
        }
        // run the total so that we can subtract seconds
        // once the value hits 0- revert back to 59 
        // continue to decrease until minutes turns to 0
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, total]);

  // function calculateTimeLeft() {

  // }
  return (
    <div className="App">
      <header className="App-header">      </header>
      <div className="container">
        <h1> The Timer</h1>
        {/* SET HOURS, MINS   */}
        <div className="input-time">
          <button onClick={increment}>+</button>
      
          {/* <span>{seconds}</span> */}
          <button onClick={decrement}>-</button>
        </div>
        {/* TIMER SECTION  */}
        <div className="display">
        <h2> Total Seconds </h2>
          <span>{total}</span>
          {/* <p>{runningMinutes}</p> */}
        </div>
        <h2> time </h2> 
        <span>{minutes} : {seconds}</span>
        {/* START/STOP  */}
        <button onClick={start}> Start</button>
      </div>
    </div>
  );
}

export default App;
