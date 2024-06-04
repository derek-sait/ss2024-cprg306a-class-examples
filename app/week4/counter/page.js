"use client"

import { useState } from "react";
import Counter from "./counter";


export default function CounterPage() {

    const [counter, setCounter] = useState(0);

    
    const incrementCounter = () => {
        let currentCount = counter;
        setCounter(currentCount + 1);
    }


    return(
        <main className="p-10">
            {/* <p>{counter}</p>
            <button onClick={incrementCounter}>Increment</button> */}
            <Counter currentCount={counter} incrementCountFunction={incrementCounter} />
        </main>
    )
}