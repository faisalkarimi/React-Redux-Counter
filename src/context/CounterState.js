import { createContext, useReducer } from 'react'
import counterReducer from './counterReducer'

const initialState = { count: 0 }
export const CounterContext = createContext(initialState)

export const CounterProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(counterReducer, initialState)
    
    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            {children}
        </CounterContext.Provider>
    )

}


