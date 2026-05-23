/*
forEach : method used to iterate over the elements
            of an array and apply a specific function (callback)
            to each element

            array.forEach(callback)
            element, index, array are provided.
*/

/*let nums = [1, 2, 3, 4, 5];

function double(element, index, array){
    array[index] = element * 2;
}
function triple(element, index, array){
    array[index] = element * 3;
}
function displayNums(element){
    console.log(element);
}
function square(element, index, array){
    array[index] = Math.pow(element, 2);
}
function cube(element, index, array){
    array[index] = Math.pow(element, 3);
}
nums.forEach(cube);
//nums.forEach(square);
//nums.forEach(double);
//nums.forEach(triple);
nums.forEach(displayNums);
//nums.forEach(square);
*/

let fruits = ["apple", "mango", "orange"];

function lowerCase(element, index, array){
    array[index] = element.toLowerCase();
}
function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}
function capatalize(element, index, array){
   array[index] = element.charAt(0).toUpperCase() + element.slice(1); 
}
function display(element){
    console.log(element);
}

//fruits.forEach(lowerCase);
//fruits.forEach(upperCase);
fruits.forEach(capatalize);
fruits.forEach(display);
