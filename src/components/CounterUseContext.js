import { CounterContext } from '../context/CounterState'
import React, { useContext } from 'react'


const CounterCTX = ({name}) => {
    const {state, dispatch} = useContext(CounterContext)

    return (
        <>
            <h1>{name}</h1>
            <p className="container">
                <button  onClick={() => dispatch({type: 'DECREMENT', payload: 1})}>-</button>
                <span className="counter">{state.count}</span>
                <button  onClick={() => dispatch({type: 'INCREMENT', payload: 1})}>+</button>
            </p>   
        </>
    )
}

export default CounterCTX
