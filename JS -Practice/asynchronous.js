// asynchronous : allow multiple operations to be performed concurently without waiting 
//                  Doesn't block the execution flow and allows the program to continous
//                  (I/O operations, network requests, fetching data)
//                  Handled with : Callbacks, Promises, Async/await.


// setTimeout(() =>  console.log("Task1") , 3000);

// console.log("Task2");
// console.log("Task3");
// console.log("Task4");


// Using Callbacks convert async to sync code
function func1(callback){
    setTimeout(() => {console.log("Task1");
                      callback();}, 3000);
}

function func2(){
    console.log("Task2");
    console.log("Task3");
    console.log("Task4");
}

func1(func2);

