/* 
function : A section of reusable code.
            Declare code once, use whenever you want.
            Call the function to execute that code. 
*/

/*function happyBirthday(username, age){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday dear ${username}!`);
    console.log("Happy Birthday to you!");
    console.log(`Your ${age} years old!`);
}
happyBirthday("Sri", 18);*/

function add(x, y){
    return x + y;
}
function sub(x, y){
    return x - y;
}
function mul(x, y){
    return x * y;
}
function divide(x, y){
    return x / y;
}

function isEven(x){
    /*if(x % 2 == 0){
        return true;
    }
    else{
        return false;
    }*/

    return x % 2 === 0 ? true : false;
}

function isValidEmail(email){
    /*if(email.includes("@")){
        return "Valid Email!";
    }
    else{
        return "Invalid Email";
    }*/

    return email.includes("@") ? "Valid mail!" : "Invalid mail!";
}
console.log(isValidEmail("Sri12"));