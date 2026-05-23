const fruits = [{name: "apple", color : "red", price : 80},
                {name: "banana", color : "yellow", price : 90},
                {name: "orange", color : "orange", price : 180}
               ]

fruits.push({name: "mango", color:"yellow", price: 190})
fruits.pop();
//fruits.splice(0,1);

//console.log(fruits);

// ------------forEach()------------

/*fruits.forEach(fr => console.log(fr.name));
fruits.forEach(fr => console.log(fr.color));
fruits.forEach(fr => console.log(fr.price));
*/



// ------------map------------

/*const names = fruits.map(fr => fr.name);
const colors = fruits.map(fr => fr.color);
const prices = fruits.map(fr => fr.price);

console.log(names);
console.log(colors);
console.log(prices);*/

// ------------filter------------

/*const yellowFruit = fruits.filter(fr => fr.color === "yellow");
const lowCost = fruits.filter(fr => fr.price < 100);

console.log(yellowFruit);
console.log(lowCost)
*/

