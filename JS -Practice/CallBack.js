/*
callback: a function that is  passed as an argument of another function.

            used to handle asynchronous operations:
            1. Reading a file
            2. Network requests
            3. Interacting with databases

            "Hey, when your done, call this next."

*/

/*hello(leave);


function hello(callback){
    console.log("Hello!");
    callback();
}
function goodbye(){
    console.log("Goodbye");
}
function leave(){
    console.log("Leave");
}*/

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}
function displaySum(result){
    console.log(result);
}
sum(displaySum, 1, 2);   // callback = displaySum