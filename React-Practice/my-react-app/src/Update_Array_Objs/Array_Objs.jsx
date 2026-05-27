import React, {useState} from 'react';

function Array_Objs(){
    const[fruits, setFruit] = useState([]);
    const[name, setName] = useState("Apple");
    const[color, setColor] = useState("Red");
    const[cost, setCost] = useState(100);

    function addFruit(){
        const newFruit = {fName : name, fColor : color,fCost : cost};

        setFruit(c => [...c, newFruit]);
    }
    function removeFruit(index){
        setFruit(fruits.filter((_, i) => i !== index));
    }
    function changeName(event){
        setName(event.target.value);
    }
    function changeColor(event){
        setColor(event.target.value);
    }
    function changeCost(event){
        setCost(event.target.value);
    }
    return(
        <div>
            <h2>List of Fruit Objects</h2>
             <ul>
              {fruits.map((fruit, index) => <li key={index} onClick={() => removeFruit(index)}>{fruit.fName} {fruit.fColor} (${fruit.fCost})</li>)}
            </ul> 
            <input type="text"  value={name} onChange={changeName} placeholder='Enter fruit name...'/><br /><br />
            <input type="text"  value={color} onChange={changeColor} placeholder='Enter fruit color...'/><br /><br />
            <input type="number" value={cost} onChange={changeCost}  placeholder='Enter fruit cost...'/><br /><br />
            <button onClick={addFruit}>Add Fruit</button>
        </div>
    );

}
export default Array_Objs;