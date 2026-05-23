// console.log("This is node js");
// console.log("This is my first node js practice");
// console.log("I will cover all node js basics");
// //process.exitCode = 1;

const _ = require('lodash');
const arr = [1,2,3,4,5];
//console.log(_.chunk(arr));
//console.log(_.reverse(arr));
//console.log(_.last(arr));

// const cowsay = require('cowsay');
// console.log(cowsay.say({
//     text : "Hello, Im a cow!",
//     e : "oO",
//     t : "U",
// }));

const {mango, apple} = require('./fruit');
console.log(JSON.stringify(mango, null, 3));
console.log(JSON.stringify(apple, null, 2));