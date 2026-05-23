/*
variable scope : where a variable is recongnized
                and accessible (local & scope).
*/


//let x =30;

function function1(){
    let x =10;
    console.log(x);
}
function function2(){
    let x = 20;
    console.log(x);
}
function1();
function2();