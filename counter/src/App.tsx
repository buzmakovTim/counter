import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { DisplayWindow } from './Components/DisplayWindow/DisplayWindow';

function App() {
  
 
  //Save Data in local Storage
  const saveMaxValueToLocalStorage = (newTopCountValue: number, newStartCountValue: number) => {
    setTopCount(newTopCountValue)
    setStartCount(newStartCountValue)
    localStorage.setItem('topValue', JSON.stringify(newTopCountValue))
    localStorage.setItem('startValue', JSON.stringify(newStartCountValue))
    
  }

  let [topInputValue, setTopInputValue] = useState<number>(0) // Value for Top Input
  let [startInputValue, setStartInputValue] = useState<number>(0) // Value for Max Input
  let [counter, setCount] = useState<number>(0)
  let [topCount, setTopCount] = useState<number>(0)
  let [startCount, setStartCount] = useState<number>(0)
  

  

  useEffect(() => {
    let getFromLocalStorage = 0
    let stringFromLocalStorage  = localStorage.getItem('topValue')
     if(stringFromLocalStorage)
    {
      getFromLocalStorage = JSON.parse(stringFromLocalStorage)
    }
    setTopInputValue(getFromLocalStorage)
    setTopCount(getFromLocalStorage)
}, [topCount])

  // Function to Set Top Value in settings window
  let setTopValueFunc = (newValue: number) => {
    if(newValue >= 0) {
      setTopInputValue(newValue)
    }
    if(newValue < startInputValue){
      setStartInputValue(newValue)
    }
    
  }
  // Function to Set Start Value in settings window
  let setStartValueFunc = (newValue: number) => {
    if(newValue >= 0) {
      setStartInputValue(newValue)
      if(newValue > topInputValue){
        setTopInputValue(newValue)
      }     
    }
    
  }
  
  let incrementFunc = () => {
    setCount(counter + 1)
  }
  let resetCounter = () => {
    setCount(startCount)
  }

  
  return (
    <div className="App">
      <div>
        {/* Settings Window */}
        <DisplayWindow isSettings={true}
                       counter={counter}  
                       resetFunction={resetCounter}
                       topCount={topCount}
                       startInputValue={startInputValue}
                       topInputValue={topInputValue}
                       setTopValueFunc={setTopValueFunc}
                       setStartValueFunc={setStartValueFunc}
                       saveMaxValueToLocalStorage={saveMaxValueToLocalStorage}/>
                       
      </div>
      <div>
        {/* Counter Window */}
        <DisplayWindow isSettings={false}
                       counter={counter} 
                       incFunction={incrementFunc} 
                       resetFunction={resetCounter}
                       topCount={topCount}/>
      </div>
      

    </div>
  );
}

export default App;
