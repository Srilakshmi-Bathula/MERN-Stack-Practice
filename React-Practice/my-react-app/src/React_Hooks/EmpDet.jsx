// React hook = Special function that allows functional components 
//              to use React features without writing class components (React v16.8)
//              (useState, useEffect, useContent, useReducer, useCallBack, and more...)

//useState() = A React hook that allows the creation of a stateful variable
//              AND a setter function to update its value in the Virtual DOM.
//              [name, setName]

import React, {useState} from 'react';

function EmpDet(){
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, ToggleEmp] = useState(false);

    const updateName = () => {
        setName("Sri");
    }
    const updateAge = () => {
        setAge(age + 1);
    }
    const EmpStatusChange = () => {
        ToggleEmp(!isEmployed);
    }



    return(
        <div>
            <p>Name : {name}</p>
            <button onClick = {updateName}>Set Name</button>
            <p>Age : {age}</p>
            <button onClick = {updateAge}>Set Age</button>
            <p>Employed : {isEmployed ? "Yes" : "No"}</p>
            <button onClick = {EmpStatusChange}>Emp Status</button>
        </div>
    );
}
export default EmpDet;