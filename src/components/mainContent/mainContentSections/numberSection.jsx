import { useState } from "react";

export const NumberSection = ({ navText }) => {
    const [count, setCount] = useState(0)


    function increment() {
        setCount(count + 1)
    }

    let randomNumber = Math.round(Math.random() * 100 + 1);
    return (
        <div className="container padding-8">
            <button onClick={increment}>Increment</button>
            <p>{count}</p>
            <h1>{randomNumber}</h1>
            <h2>{navText}</h2>
        </div>
    )
}