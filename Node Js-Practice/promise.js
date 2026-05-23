// Promise =  A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// A Promise is in one of these states:
// 1. pending: initial state, neither fulfilled nor rejected.
// 2. fulfilled: meaning that the operation completed successfully.
// 3. rejected: meaning that the operation failed.
// const myPromise = new Promise((resolve, reject)

const promise = new Promise((resolve, reject) =>  {
    console.log("Async task excution!");
   
    if(false){
        const person = {name : "Sri"};
        resolve(person);
    }
    else{
        const err = {error : "1001"};
        reject(err);
    }
});

promise.then(
    (val) => {
        console.log(val);
    },
    // (err) => {
    //     console.log(err);
    // }
).catch((err) => console.log("failed!")) // it excute if not mension err block
.finally(() => console.log("clean up!")); // it excute in both case success and failure