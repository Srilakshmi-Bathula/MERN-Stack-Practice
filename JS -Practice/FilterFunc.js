/*
.filter() = create a new array by filtering out elements.

*/

/*let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isEven(element){
    return element % 2 === 0;
}
function isOdd(element){
    return element % 2 !== 0;
}

let even = nums.filter(isEven);
let odd = nums.filter(isOdd);

console.log(even);
console.log(odd);
*/

/*let age = [15, 14, 13, 19, 18, 17, 20];

function isAdult(element){
    return element >= 18 ;
}
function isChild(element){
    return element < 18;
}

let adult = age.filter(isAdult);
let child = age.filter(isChild);

console.log(adult);
console.log(child);
*/

let words = ["apple", "banana", "coconut","orange"];

function getShortWord(element){
    return element.length < 6;
}
function getLongWord(element){
    return element.length >=6;
}

let sword = words.filter(getShortWord);
let lword = words.filter(getLongWord);

console.log(sword);
console.log(lword);