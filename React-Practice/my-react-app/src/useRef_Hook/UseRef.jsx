// useState() = Re-renders the component when the state value changes.

// useRef() = "use Reference" Does not cause re-renders when its value changes.
//             When you want a component to 'remember' some information .
//             but you dont want that information to trigger new renders.

            // 1. Accessing/Interacting with DOM elements
            // 2. Handling Focus, Animations, and Transistions
            // 3. Managing Timers and Intervals.

import React, {useState, useEffect, useRef} from 'react';
function UseRef(){
    // let [number, setNumber] = useState(0); Instead of using this state variable we can use 'ref'.
    
    // const ref = useRef(0);
    // console.log(ref);

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("Component Rendered");
        //console.log(inputRef);
    });
    function handleClick1(){
        //setNumber(n => n + 1);
        // ref.current++;
        // console.log(ref.current);

        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick2(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
    }
    function handleClick3(){
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";
    }

    return(
        <>
        <button onClick={handleClick1}>Click me1!</button>
        <input ref = {inputRef1} />

        <button onClick={handleClick2}>Click me2!</button>
        <input ref = {inputRef2} />

        <button onClick={handleClick3}>Click me3!</button>
        <input ref = {inputRef3} />

        </>
    )
}
export default UseRef;