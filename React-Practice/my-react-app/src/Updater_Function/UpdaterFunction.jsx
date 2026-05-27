// updater function = A function passed as an arguement to setState() usually.
//                     ex. setYear(arrow function) - setYear(year + 1)
//                     Allow for safe updates based on the previous state. 
//                     Used with multiple state updates and asynchronous functions .
//                     Good practice to use updater functions.

import React, { useState } from 'react';

function UpadaterFunction(){
    const [count, setCount] = useState(0);

    function increment(){
        // Uses the PENDING state to calculate the NEXT state. 
        // set functions do not trigger an UpadaterFunction.
        // React batches together state updates for performance reasons.
        // NEXT state becomes the CURRENT state after an update.

        
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
       
    }
    function decrement(){
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }
    function reset(){
        setCount(0);
    }

    return(
        <div>
            <p>Count : {count}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </div>
    );
}
export default UpadaterFunction;