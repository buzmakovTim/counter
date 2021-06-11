import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { DisplayWindow } from './Components/DisplayWindow/DisplayWindow';
import { networkInterfaces } from 'os';

import { AppStateType } from './bll/store';
import { useDispatch, useSelector } from 'react-redux';
import { incCounterAC, resetCounterAC, setMaxValueAC, setStartValueAC } from './bll/counter-reducer';


function App() {
 
  const counter = useSelector<AppStateType, number>(state => state.counter.counter)
  const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
  const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue) 
  const dispatch = useDispatch()


  
  //Save Data in local Storage
  const saveMaxValueToLocalStorage = (newTopCountValue: number, newStartCountValue: number) => {
    // setTopCount(newTopCountValue)
    // setStartCount(newStartCountValue)
    // localStorage.setItem('topValue', JSON.stringify(newTopCountValue))
    // localStorage.setItem('startValue', JSON.stringify(newStartCountValue))
  }

  //let [topInputValue, setTopInputValue] = useState<number>(0) // Value for Top Input
  //let [startInputValue, setStartInputValue] = useState<number>(0) // Value for Max Input
  //let [counter, setCount] = useState<number>(0)
  //let [topCount, setTopCount] = useState<number>(0)
  //let [startCount, setStartCount] = useState<number>(0)
  

  

//   useEffect(() => {
//     let maxValueFromLocalStorage = 0
//     let startValueFromLocalStorage = 0
//     let maxStringFromLocalStorage  = localStorage.getItem('topValue')
//      if(maxStringFromLocalStorage)
//     {
//       maxValueFromLocalStorage = JSON.parse(maxStringFromLocalStorage)
//     }

//     let startStringFromLocalStorage = localStorage.getItem('startValue')
//     if(startStringFromLocalStorage){
//       startValueFromLocalStorage = JSON.parse(startStringFromLocalStorage)
//     }

//     //setStartInputValue(startValueFromLocalStorage)
//     setStartCount(startValueFromLocalStorage)
//     setTopInputValue(maxValueFromLocalStorage)
//     setTopCount(maxValueFromLocalStorage)
//     //setCount(startCount)
// }, [topCount])

  // Function to Set Top Value in settings window
  let setTopValueFunc = (newValue: number) => {
    if(newValue >= 0) {

      dispatch(setMaxValueAC(newValue))
      //setTopInputValue(newValue)
    }
    if(newValue < startValue && newValue >= 0){
      //setStartInputValue(newValue)
      dispatch(setStartValueAC(newValue))
    }
    
  }
  // Function to Set Start Value in settings window
  let setStartValueFunc = (newValue: number) => {
    
    console.log(newValue)
    if(newValue >= 0) {
      //setStartInputValue(newValue)
      
      dispatch(setStartValueAC(newValue))
      if(newValue > maxValue){
        //setTopInputValue(newValue)
        dispatch(setMaxValueAC(newValue))
      }     
    }
    
  }
  
  let incrementFunc = () => {
    //setCount(counter + 1)
    dispatch(incCounterAC()) // New
  }
  let resetCounter = () => {
    //setCount(startCount)
    dispatch(resetCounterAC()) // New
  }

  
  return (
    <div className="App">
      <div>
        {/* Settings Window */}
        <DisplayWindow isSettings={true}
                       counter={counter}  
                       resetFunction={resetCounter}
                       topCount={maxValue}
                       startInputValue={startValue}
                       topInputValue={maxValue}
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
                       topCount={maxValue}
                       startCount={startValue}/>
      </div>
      

    </div>
  );
}

export default App;
