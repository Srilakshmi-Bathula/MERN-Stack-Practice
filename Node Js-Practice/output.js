// FOR PRINTING OUTPUT ON CONSOLE

// const x =1;
// const y =2;

// console.log(x,y);

// %s - format variable to string
// %d - format variable to number
// %i - format variable to integer
// %o - format variable to object

// console.log("This is %s and my ag is %d", "Sri", 19);
// console.clear(); // to clear console
// console.count("This is sri!");
// console.count("This is sri!");
// console.count("This is lucky!");
// console.countReset("This is sri!");
// console.count("This is sri!");

// const function1 = () => console.trace("This is function 1");
// const function2 = () => function1();

// function2();

// const sum = () => console.log("The sum of 2 and 3 is : ", `${2+3}`);
// const mul = () => console.log("The multiplication of 2 and 3 is : ", `${2*3}`);

// // Time take of each function
// const measureTime = () => {
//     console.time("sum");
//     sum();
//     console.timeEnd("sum");

//     console.time("mul");
//     mul();
//     console.timeEnd("mul");
// }
// measureTime();


// // FOR PROGRESS BAR
// const progressBar = require('progress');

// const bar = new progressBar('downloading [:bar] :rate/bps :percent :etas', {
//     total: 20,
// });

// const timer = setInterval(() => {
//     bar.tick();
//     if(bar.complete){
//         clearInterval(timer);
//         console.log("Download complete!");
//     }
// })

// FOR GETTING OUTPUT IN DIFFERENT COLORS = 'npm i chalk@4'
const chalk = require('chalk');

console.log(chalk.blue("This is blue color"));
console.log(chalk.red("This is red color"));
console.log(chalk.green("This is green color"));
