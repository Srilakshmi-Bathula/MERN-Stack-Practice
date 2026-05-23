// Error : An object that is created to represent a problem that occurs
//         Occur often with user input or establishing a connection.

//try { } = Encloses code that potentially cause an error.
// catch { } = Catch and handle any thrown Errors from try { }.
// finally { } = { optional} always executes, Used mostly for clean up .
//          ex. close files. close connections, release resources

// try{
//     console.log("Hello");
//     // NETWORK ERRORS
//     // PROMISE REJECTIONS
//     // SECURITY ERRORS
// }
// catch(error){
//     console.error(error);
// }
// finally{
//     // CLOSE FILES
//     // CLOSE CONNECTIONS
//     // RELEASE RESOURCES
//     console.log("This excutes always!");
// }
// console.log("You have reached the end!");

try{
    const dividend = 10;
    const diviser = 0;

    if(diviser == 0){
        throw new Error("You cant divide by zero!");
    }
    if(isNaN(dividend) || isNaN(diviser)){
        throw new Error("Value must be a Number!");
    }

    const result = dividend/diviser;
    console.log(result);
}
catch(error){
    console.error(error);
}

console.log("You have reached the end!");