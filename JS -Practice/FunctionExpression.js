/*
 function declaration : defined a reusable block of code that 
                            perform a specific task.
*/

/* Ex: function hello(){
    console.log("Hello");
}
hello();
*/

/*
 function expression : a way to define functions as values or variables.

        1. Callbacks in asynchronous operations
        2. Higher order functions
        3. Closures
        4. Event Listners
*/

//Ex :
/*const hello = function(){
    console.log("Hello");
}


setTimeout(hello, 3000);
*/

/*setTimeout(function(){
    console.log("Hello");
}, 3000);
*/

let nums = [1, 2, 3, 4, 5];

//function square(element){
//    return Math.pow(element, 2);
//}

let squares = nums.map(function(element){
   return Math.pow(element, 2);
});


let cubes = nums.map(function cube(element){
    return Math.pow(element, 3);
});

let nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let even = nums1.filter(function isEven(element){
    return element % 2 === 0;
});
let odd = nums1.filter(function isOdd(element){
    return element % 2 !== 0;
}
);

let prices = [10, 20, 30, 40, 50, 50];

const sum = prices.reduce(function priceSum(accumulator, element){ 
    return accumulator + element;
});

console.log(sum);
console.log(even);
console.log(odd);
console.log(squares);
console.log(cubes);