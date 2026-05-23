/*
spread operator : ... allows an iterable such as an array or string to be expanded
                    into saperate elements (unpacks the elements).
 */

/*let nums = [1, 2, 3, 4, 5];

let minimum = Math.min(...nums);
let maximum = Math.max(...nums);

console.log(minimum);
console.log(maximum);
*/

/*let name = "Bro code";

let letters = [...name].join("-");

console.log(letters);
*/

let fruits = ["apple", "banana","mango"];
let vegetables = ["carrot", "brinjal", "tamoto"];

let food = [...fruits , ...vegetables, "egg", "milk"];

console.log(food);