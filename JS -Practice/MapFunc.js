/*
.map = accepts a callback and applies that function to each element 
        of an array, then returns a new array.
*/



/*let nums = [1, 2, 3, 4, 5];

function square(element){
    return Math.pow(element, 2);
}
function cube(element){
    return Math.pow(element, 3);
}

let squares = nums.map(square);
let cubes = nums.map(cube);

console.log(squares);
console.log(cubes);
*/

/*let stds = ["Sri", "Kavya", "Sruyhi"];

function upper(element){
    return element.toUpperCase();
}
function lower(element){
    return element.toLowerCase();
}

let stdUpper = stds.map(upper);
console.log(stdUpper);

let stdLower = stds.map(lower);
console.log(stdLower);
*/

let dates = ["2025-01-18", "2026-02-17", "2028-03-14"];

function formatDate(element){
    let parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

let formatDates = dates.map(formatDate);

console.log(formatDates);