/*
destructing: extract values from arrays and objects,
            than assign them to variables in a convenient way.
            [] = to perform array destructuring
            {} = to perform object destructoring
 */

//Example - 1
// SWAP THE VALUE OF TWO VARIABLES

let a = 10;
let b = 20;

console.log(a);
console.log(b);

[a, b] = [b, a];

console.log(a);
console.log(b);

//Example - 2
// SWAP TWO ELEMENTS IN AN ARRAY

let colors = ["White", "Red", "Black", "Yellow"];

console.log(colors);

[[colors[0], colors[3]] = [colors[3], colors[0]]];

console.log(colors);

//Example - 3
// ASSIGN ARRAY ELEMENTS TO VARIABLES

let colors2 = ["White", "Red", "Black", "Yellow"];

[firstColor, secondColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(extraColors);

//Example - 4
// ASSIGN OBJECT ELEMENTS TO VARIABLES

/*const person1 = {
    firstName : "Sri",
    lastName : "Bathula",
    age : 18,
    job : "Teacher"
}

const person2 = {
    firstName : "Lucky",
    lastName : "Bathula",
    age : 19
}

const {firstName, lastName, age, job = "Doctor"} = person2;


console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);
*/

//Example - 5
// ASSIGN OBJECT ELEMENTS TO VARIABLES

function displayPerson({firstName, lastName, age, job = "Doctor"}){
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
}
const person1 = {
    firstName : "Sri",
    lastName : "Bathula",
    age : 18,
    job : "Teacher"
}

const person2 = {
    firstName : "Lucky",
    lastName : "Bathula",
    age : 19
}


displayPerson(person1);
