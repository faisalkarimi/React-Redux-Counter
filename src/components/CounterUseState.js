import React, { useState } from 'react'

const CounterUseState = () => {

    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        setCount(count - 1)
    }

    return (
        <>
            <h1>useState Counter</h1>
            <p className="container">
                <button  onClick={handleDecrement}>-</button>
                <span className="counter">{count}</span>
                <button onClick={handleIncrement}>+</button>
            </p>   
        </>
    )
}

export default CounterUseState
