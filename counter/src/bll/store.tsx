import React from 'react'
import {combineReducers, createStore} from 'redux'
import { counterReducer } from './counter-reducer'

const rootReducer = combineReducers( {
    counter: counterReducer
})

let preloadedState
const stateFromLocalStorage = localStorage.getItem('app-state')
if(stateFromLocalStorage){
    preloadedState = JSON.parse(stateFromLocalStorage)
}

export const store = createStore(rootReducer, preloadedState)

store.subscribe( () => {
    localStorage.setItem('app-state', JSON.stringify(store.getState()))
})

export type AppStateType = ReturnType<typeof rootReducer>
type AppStoreType = typeof store
