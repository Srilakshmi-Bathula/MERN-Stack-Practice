// FOR INPUT 

const readLine = require('readline');
const prompt = require('prompt-sync')();

const rl = readLine.createInterface({
    input: process.stdin,
    output:process.stdout,
});

// rl.question("What is your name?", (name) => {
//     console.log("Hi", `${name}`);
//     rl.close();
// })

// PROMPT THROUGH ASK QUESTION - "npm i prompt-sync"


const name = prompt("What is your name?");
console.log("Hi", `${name}`);