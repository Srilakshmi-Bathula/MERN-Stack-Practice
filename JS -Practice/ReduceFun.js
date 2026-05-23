/*
.reduce() = reduce the elements of an array to a single value.
*/

/*let prices = [10, 20, 30, 40, 50, 50];

function priceSum(accumulator, element){ // accumulator = previos ele , element = next ele
    return accumulator + element;
}

let sum = prices.reduce(priceSum);
console.log(sum);
*/

let grades = [20, 30, 78, 90, 100];

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}

function getMin(accumulator, element){
    return Math.min(accumulator, element);
}

let max = grades.reduce(getMax);
let min = grades.reduce(getMin);

console.log(max);
console.log(min);