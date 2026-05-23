//Error Object

const CustomError = require("./CustomError");

const error = new Error("This is an error message!");
//console.log(error.stack);
//console.log(error.message);

//throw new Error("Im the error object!");

// const {CustomError} = require("./CustomError");
// throw new CustomError("This is a custom error!");

// Handle error using try and catch
// try{
//     doSomething();
// }catch(e){
//     console.log("Error occured!");
//     console.log(e);
// }

function doSomething(){
    //const data = fetch("localhost:300/api");
     console.log("This from do something function!");
//     const data = "This from do something function!";
//     return data;
 }

//Uncaught Exception
// process.on("uncaughtException", (err) => {
//     console.log("There was an error!");
//     process.exit(1);
// })

// Exceptions with Promises
// const promise = new Promise((resolve, reject) => {
//     if(true){
//         resolve(doSomething());
//     }else{
//         reject(doSomething());
//     }
// });

// promise.then((val) => {
//     console.log(val);
// }).catch((err) => {
//     console.log("Error occured.");
//     console.log(err);
// });

//Exception with async/await
const someFunction = async () => {
    try{
        await doSomething();
    }catch(err){
        throw new CustomError(err.message);
    }
};

someFunction();