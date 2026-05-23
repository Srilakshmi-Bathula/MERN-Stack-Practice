/*
closures : A function is defined inside of another function,
            the inner function has access to the variables and scope of the 
            outer function.
            Allow private variables and state maintainance 
            Used frequently in JS frameworks : React, Vue, Angular.
*/

/*function Outer(){
    let message = "Hello";

    function Inner(){
        console.log(message);
    }

    Inner();
}

Outer();
*/

/*function createCounter(){
let count = 0;

function increment(){
    count++;
    console.log(`Conter increased : ${count}`);
}

function getCount(){
    return count;
}

return {increment, getCount};
}

let count = createCounter();

count.increment();
count.increment();

console.log(`Current count : ${count.getCount()}`);
*/

let score = 0;

function increaseScore(points){
    score += points;
    console.log(`+ ${points}pts`);
}
function decreaseScore(points){
    score -= points;
    console.log(`- ${points}pts`);
}
function getScore(){
    return score;
}

increaseScore(8);
decreaseScore(2);

console.log(`The final score : ${score}`);

