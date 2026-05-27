import React, {useState} from 'react';

function Update_Array(){
    const[foods, setFoods] = useState(["Apple", "Mango", "Banana"]);

    function updateFruit(){
        const newFruit = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = " ";

        setFoods([...foods, newFruit])
    }
    function removeFruit(index){
        setFoods(foods.filter((_, i) => i != index));
    }

    return(
        <div>
            <h2>List of Fruits</h2>
            <ul>
                {foods.map((food, index) => <li key={index} onClick={() => removeFruit(index)}>{food}</li>)}
            </ul>
            <input type="text" id='foodInput' placeholder='Enter food name' />
            <button onClick={updateFruit}>Add Food</button>
        </div>
    );
}
export default Update_Array;