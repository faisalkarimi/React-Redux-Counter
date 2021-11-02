import './Counter.css'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { handleIncrement, handleDecrement } from '../redux/counterActions'


const CounterRedux = ({name}) => {
    const counterState = useSelector(state => state.counter)
    const dispatch = useDispatch()

    return (
        <>
            <h1>{name}</h1>
            <p className="container">
                <button className="btn" onClick={() => dispatch(handleDecrement())}>-</button>
                <span className="counter">{counterState.counter}</span>
                <button className="btn" onClick={() => dispatch(handleIncrement())}>+</button>
            </p>   
        </>
    )
}

export default CounterRedux
