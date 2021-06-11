import React from 'react'
import { store } from './store'
const INC_VALUE = 'INC_VALUE'
const RESET_COUNTER = 'RESET_COUNTER'
const SET_START_VALUE = 'SET_START_VALUE'
const SET_MAX_VALUE = 'SET_MAX_VALUE'

const initialState = {
    maxValue: 6,
    startValue: 2,
    counter: 0
}

type InitialStateType = typeof initialState 

export const counterReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    
    switch(action.type){

        case INC_VALUE: {
            return {...state, counter: state.counter + 1}
        }

        case RESET_COUNTER: {
            return {...state, counter: state.startValue}
        }

        case SET_START_VALUE: {
            return {...state, startValue: action.newValue}
        }

        case SET_MAX_VALUE: {
            return {...state, maxValue: action.newValue}
        }

        default: 
            return state
    }
    
    
}

// Increment Action Creator
export const incCounterAC = () => ({
    type: INC_VALUE
} as const)

// Reset Counter Action Creator
export const resetCounterAC = () => ({
    type: RESET_COUNTER
} as const)

// Set Start Value Action Creator
export const setStartValueAC = (newValue: number) => ({
    type: SET_START_VALUE,
    newValue: newValue
} as const)

// Set Max Value Action Creator
export const setMaxValueAC = (newValue: number) => ({
    type: SET_MAX_VALUE,
    newValue: newValue
} as const)

export type IncValuesActionType = ReturnType<typeof incCounterAC>
export type ResetCounterType = ReturnType<typeof resetCounterAC>
export type SetStartValueType = ReturnType<typeof setStartValueAC>
export type SetMaxValueType = ReturnType<typeof setMaxValueAC>

export type ActionsType = IncValuesActionType | 
                          ResetCounterType | 
                          SetStartValueType |
                          SetMaxValueType