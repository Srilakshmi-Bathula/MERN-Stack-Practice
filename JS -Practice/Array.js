/*
array : a variable like structure that can hold more than 1 variable
*/

let fruits = ["apple", "orange", "mango", "coconut"];

/*console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits.push("banana");
fruits.unshift("beetroot");
fruits.pop();

console.log(fruits[3]);
console.log(fruits[4]);

fruits.pop();
*/

/*let fruitsLength = fruits.length;
let fruitsIndex = fruits.indexOf("apple");

console.log(fruitsIndex);
console.log(fruitsLength);
*/

//console.log(fruits);

/*for(let i = 0; i <= fruits.length - 1; i++ ){
    console.log(fruits[i]);
}
*/

/*for(let i = fruits.length -1; i >= 0; i--){
    console.log(fruits[i]);
}
*/
//fruits.sort();

fruits.sort().reverse();
for(fr of fruits){
    console.log(fr);
}