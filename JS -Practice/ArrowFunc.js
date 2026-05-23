/*
arrow function : a concise why to write function expressions
                good for simple functions that you use only once
                (parameter) => some code
*/

/*function hello(){
    console.log("hello");
}
hello();
*/

/*const hello = function(){
    console.log("hello");
}
hello();
*/
//const hii = () => console.log("Hii"); // for single line output
//hii();

/*const hello = () => {           //for multiple line output
    console.log("hello");
    console.log("This is sri!");
}
hello();

const details = (name, age) => {console.log(`This is ${name}!`);
                           console.log(`Your ${age} years old!`);
                        }

details("Swapna", 18);
*/

// Nrml Function
function hello(){
    console.log("Hello");
}

setTimeout(hello, 2000)

//Function Expression
setTimeout(function (){
    console.log("Hii");
}, 2000)


//arrow Function
setTimeout( () => {
    console.log("Hey");
}, 2000)

// Using Arrow function
const nums = [1, 2, 3, 4, 5, 6];


let squares = nums.map((element) => Math.pow(element, 2));
let cubes = nums.map((element) => Math.pow(element, 3));


let even = nums.filter((element) => element % 2 === 0);
let odd = nums.filter((element) => element % 2 !== 0);

const sum = nums.reduce((accumulator, element) => accumulator + element);

console.log(sum);
console.log(even);
console.log(odd);
console.log(squares);
console.log(cubes);