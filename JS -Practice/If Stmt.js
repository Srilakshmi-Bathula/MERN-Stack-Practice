// IF Statement = if a condition is true, excute some code
//                if not , do somthing else.

let age = 18;
let isMajor = true;

if(age >= 18){
    console.log("Your eligible for vote!");
    if(age >= 18){
        console.log("Your major that's why also eligible for vote!");
    }
    else{
        console.log("Your minor that's why not eligible for vote!");
    }
}
else if(age <= 0){
    console.log("Your not born at all.");
}
else{
    console.log("Your not eligible for vote!");
}              