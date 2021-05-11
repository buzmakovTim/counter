import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { DisplayWindow } from './Components/DisplayWindow/DisplayWindow';

function App() {
  
  
  let [counter, setCount] = useState<number>(0)
  let [topCounter, setTopCount] = useState<number>(10)

  
  let inctementFunc = () => {
    setCount(counter = counter + 1)
  }
  let resetCounter = () => {
    setCount(0)
  }

  
  return (
    <div className="App">
      <div>
        <DisplayWindow isSettings={true}
                       counter={counter} 
                       incFunction={inctementFunc} 
                       resetFunction={resetCounter}
                       topCount={topCounter}/>
      </div>
      <div>
        <DisplayWindow isSettings={false}
                       counter={counter} 
                       incFunction={inctementFunc} 
                       resetFunction={resetCounter}
                       topCount={topCounter}/>
      </div>
      

    </div>
  );
}

export default App;
