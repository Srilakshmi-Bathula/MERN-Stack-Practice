// FOR PASSING AND READING ARGUMENTS

const minimist = require('minimist');
//console.log(process.argv); 
/*
node argument.js name=sri -- run
result: 
[
  'C:\\Program Files\\nodejs\\node.exe',
  'D:\\Web Dev\\Node Js\\argument.js',
  'name=sri'
]
*/
//console.log(process.argv.slice([2][0])); // result: [ 'name=sri' ]

// process.argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`);
// })

const newArg = minimist(process.argv.slice([2]));
console.log(newArg.name);
//run : node argument.js --name=sri    result: sri

