import React from 'react';
import { Button } from '../Button/Button';
import s from './DisplayWindow.module.css';

type DisplayWindowPropsType = {
    counter?: number
    topCount?: number
    incFunction?: () => void
    resetFunction?: () => void
    setFunction?: () => void
    isSettings: boolean
}

export function DisplayWindow(props: DisplayWindowPropsType) {

    let incDisabled: boolean = false
    if(props.counter === props.topCount){
        incDisabled = true
    }
    let resetDisabled: boolean = false
    if(props.counter === 0){
        resetDisabled = true
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
                            <div><input type="text" /></div>
                            <div><input type="text" /></div> 
                            </div>
                            
                        </div>

    //Screen for Counter
    let counterScreen = <div className={s.mainScreenCounter}> 
                            <span>{props.counter}</span>
                        </div>


    // Button For Setting
    let settingsButtons = <div className={s.buttonScreen}>
                        <Button title={'Set'} callBack={props.incFunction} isDisable={incDisabled}/>
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