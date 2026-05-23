//Sync Code
// console.log("task1");
// console.log("task2");
// console.log("task3");

// Blocking Code : it blocks the rest of the code until the  while loop execution done! - synchronous code (blocking code)
// console.log("Start operation");

// function sleep(milliseconds){
//     let startTime = new Date().getTime();

//     while(new Date().getTime() < startTime + milliseconds){
//         console.log("in Progress....");
//     }
//     console.log("operation is done!");
// }
// sleep(1000);
// console.log("do something else...");

// Non-Blocking Code : it does not block the rest of the code and allows other operations to continue - asynchronous code (non-blocking code)
console.log("Start operation");

function sleep(milliseconds){
    setTimeout(() => {
        console.log("Operation is done!");
    }, milliseconds);
    console.log("operation is done!");
}
sleep(1000);
console.log("do something else...");