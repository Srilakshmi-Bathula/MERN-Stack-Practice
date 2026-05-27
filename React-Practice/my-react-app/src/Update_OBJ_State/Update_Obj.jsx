import React, {useState} from 'react';
function Update_Obj(){
    const [fruit, setFruit] = useState({name : "Apple", color : "red", cost : 100});

    function updateName(event){
        // setFruit({...fruit, name : event.target.value});
        setFruit(f => ({...f, name : event.target.value})); // Using updater  function
    }
    function updateColor(event){
        // setFruit({...fruit, color: event.target.value});
        setFruit(f => ({...f, color: event.target.value})); // Using updater  function
    }
    function updateCost(event){
        // setFruit({...fruit, cost : event.target.value});
        setFruit(f => ({...f, color: event.target.value})); // Using updater  function
    }

    return(
        <div>
            <p>Your Favourite Fruit is : {fruit.name} {fruit.color} {fruit.cost}</p>
            <input type="text" value = {fruit.name} onChange={updateName}/>
            <input type="text"  value = {fruit.color} onChange={updateColor}/>
            <input type="number"  value = {fruit.cost} onChange={updateCost}/>

        </div>
    )
}


export default Update_Obj;