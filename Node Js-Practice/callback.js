//callback : callback is a function that is passed as an argument to another function and is executed
//           after some operation has been completed. It is a way to handle asynchronous operations in JavaScript.

// Example of a callback function

console.log("Start task");
function asyncTask(cb){
    console.log("Task running...");
    //cb();
    setTimeout(() => {
        cb();
    }, 1000);
}

asyncTask(() => console.log(name));
console.log("Task completed!");
const name = "Sri";

// Error back callback function : it is a callback function that is used to handle errors in asynchronous operations.
//                                 It is passed as the first argument to the callback function and is called when an error occurs.
function asyncTask(cb){
    setTimeout(() => {
        cb(null, "This is data from server!");
    }, 1000);
}

asyncTask((err, data) => {
    if(err){
        throw err;
    }else{
        console.log("data", data);
    }
})

// Callback Hell : it is a situation where multiple nested callback functions are used,
//                 making the code difficult to read and maintain. 
//                 It is also known as "Pyramid of Doom" because of the shape of the code structure.

function makeApiCall(cb){
    setTimeout(() => {
        console.log("This is Async task execution!");
    }, 0);
}

makeApiCall(()=> {
    makeApiCall(() => {
        asyncTask(() => {
            asyncTask(() => {
                asyncTask(() => {
                    console.log("This is callback hell!");
                })
            })
        })
    })
})