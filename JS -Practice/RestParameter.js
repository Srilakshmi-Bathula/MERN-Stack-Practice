/*
rest parameter : {...rest} allow function work with a variable 
                    number of arguments by bunding them into an array

                    spread : expand an array into saperate elements
                    rest : bundles saperate elements into an array.
*/

/*let food1 = "pizza";
let food2 = "milk";
let food3 = "eggs";
let food4 = "burger";

function openFridge(...foods){
    console.log(...foods);
}

let foods = openFridge(food1, food2, food3, food4);
*/

/*function sum(...nums){
    let result = 0;

    for(num of nums){
        result += num;
    }
    return result;
}


let sumNums = sum(1, 2, 3, 4, 5);

console.log(sumNums);
*/

/*function avg(...nums){
    let result = 0;

    for(num of nums){
        result += num;
    }
    return result / nums.length;
}

let avgNums = avg(10, 20, 30, 40, 50);

console.log(avgNums);
*/

function combineString(...strings){
    return strings.join("-");
}

let letters = combineString("Sri", "Lucky", "Swetha");

console.log(letters);
