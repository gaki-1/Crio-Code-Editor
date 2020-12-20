import React, { useState } from 'react'

export default function Tempo() {
    const [count, setCount] = useState(1)

    const decrementCount = () => {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <div>
            <h1>hi there</h1>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button>+</button>
        </div>
    )
}
