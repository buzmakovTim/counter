import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { DisplayWindow } from './Components/DisplayWindow/DisplayWindow';
import { networkInterfaces } from 'os';

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
    let maxValueFromLocalStorage = 0
    let startValueFromLocalStorage = 0
    let maxStringFromLocalStorage  = localStorage.getItem('topValue')
     if(maxStringFromLocalStorage)
    {
      maxValueFromLocalStorage = JSON.parse(maxStringFromLocalStorage)
    }

    let startStringFromLocalStorage = localStorage.getItem('startValue')
    if(startStringFromLocalStorage){
      startValueFromLocalStorage = JSON.parse(startStringFromLocalStorage)
    }

    setStartInputValue(startValueFromLocalStorage)
    setStartCount(startValueFromLocalStorage)
    setTopInputValue(maxValueFromLocalStorage)
    setTopCount(maxValueFromLocalStorage)
    setCount(startCount)
}, [topCount])

  // Function to Set Top Value in settings window
  let setTopValueFunc = (newValue: number) => {
    if(newValue >= 0) {
      setTopInputValue(newValue)
    }
    if(newValue < startInputValue && newValue >= 0){
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
                       topCount={topCount}
                       startCount={startCount}/>
      </div>
      

    </div>
  );
}

export default App;
