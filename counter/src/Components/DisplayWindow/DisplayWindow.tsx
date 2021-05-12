import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
import React, { ChangeEvent } from 'react';
import { Button } from '../Button/Button';
import s from './DisplayWindow.module.css';

type DisplayWindowPropsType = {
    counter?: number
    topCount?: number
    incFunction?: () => void
    resetFunction?: () => void
    setFunction?: () => void
    isSettings: boolean
    topInputValue?: number
    startInputValue?: number
    setTopValueFunc?: (newValue: number) => void
    setStartValueFunc?: (newValue: number) => void
    saveMaxValueToLocalStorage?: (newTopCountValue: number, newStartCountValue: number) => void
}

export function DisplayWindow(props: DisplayWindowPropsType) {

    let incDisabled: boolean
    if(props.counter === props.topCount){
        incDisabled = true
    } else {
        incDisabled = false
    }


    let resetDisabled: boolean = false
    if(props.counter === 0){
        resetDisabled = true
    }  
    
    let setMaxValueFuncHandler = (e: ChangeEvent<HTMLInputElement>) => {    
        if(props.setTopValueFunc)
        {
            props.setTopValueFunc(parseInt(e.currentTarget.value))
        }
    }

    let setStartValueFuncHandler = (e: ChangeEvent<HTMLInputElement>) => {    
        if(props.setStartValueFunc)
        {
            props.setStartValueFunc(parseInt(e.currentTarget.value))
        }
    }

    let saveToLocalStorageHandler = () => {
        let topVal = 0;
        let startVal = 0;
        
        if(props.saveMaxValueToLocalStorage){
            
            if(props.topInputValue){
                if(props.topInputValue != 0){
                    topVal = props.topInputValue
                }
            }
            if(props.startInputValue){
                if(props.startInputValue != 0){
                    startVal = props.startInputValue
                }
            }       
            props.saveMaxValueToLocalStorage(topVal, startVal)
        }
    }

    //Screen for Settings
    let settingsScreen = <div className={s.mainScreenSettings}>
                            {/* Title */}
                            <div className={s.titleSettings}>
                                <div>Max Value: </div>
                                <div>Start Value: </div>
                            </div>
                            {/* Inputs */}
                            <div>
                            <div><input type="number" onChange={setMaxValueFuncHandler} value={props.topInputValue}/></div>
                            <div><input type="number" onChange={setStartValueFuncHandler} value={props.startInputValue}/></div> 
                            </div>
                            
                        </div>

    //Screen for Counter
    let counterScreen = <div className={s.mainScreenCounter}> 
                            <span>{props.counter}</span>
                        </div>


    // Button For Setting
    let settingsButtons = <div className={s.buttonScreen}>
                        <Button title={'Set'} callBack={saveToLocalStorageHandler} isDisable={false}/>
                        </div>
        
    // Buttons For Counter
    let counterButtons = <div className={s.buttonScreen}>
                         <Button title={'Inc'} callBack={props.incFunction} isDisable={incDisabled}/>
                         <Button title={'Reset'} callBack={props.resetFunction} isDisable={resetDisabled}/>
                         </div>

    let buttonsToShow = props.isSettings ? settingsButtons : counterButtons;
    let screenToShow =  props.isSettings ? settingsScreen : counterScreen;

    return (
        
        // Display
        <div className={s.window}>
            {/* Main top section */}
            <div> 
                {screenToShow}
            </div>
            
            {/* Buttons section */}
            <div> 
                {buttonsToShow}
            </div>
        </div>
    )
}