// JSON = (Javascript Object Notation) data-interchange format 
//         Used for exchangeing data between a server and a web application
//         JSON files {key : value} OR [value1, value2, value3]

//         JSON.stringify() = convert a JS object to a JSON string.
//         JSON.parse() = convert a JSON string to a JS object.

// const names = ["Sri", "Vaishu", "Kavya", "Swetha"];
// const person = {
//     "name" : "Sri",
//     "age" : 20,
//     "isEmployed" :true,
//     "hobbies": ["Eating", "Sleeping"]
// }

// const jsonString = JSON.stringify(person);
// console.log(jsonString);

// const jsonNames = `["Sri", "Vaishu", "Kavya", "Swetha"];`
// const jsonPerson = `{
//     "name" : "Sri",
//     "age" : 20,
//     "isEmployed" :true,
//     "hobbies": ["Eating", "Sleeping"]
// }`
// const jsonPeople = `[{
//     "name" : "Sri",
//     "age" : 20,
//     "isEmployed" :true,
//     "hobbies": ["Eating", "Sleeping"]
// },
// {
//     "name" : "Kavya",
//     "age" : 23,
//     "isEmployed" :false,
//     "hobbies": ["reading", "Sleeping"]
// },
// {
//     "name" : "Sravya",
//     "age" : 28,
//     "isEmployed" :false,
//     "hobbies": ["playing", "Sleeping"]
// }
// ]`

// //const jsonString = JSON.stringify(person);
// const jsonString = JSON.parse(people);
// console.log(jsonString);

fetch("names.json")
    .then(response => response.json())
    .then(value => console.log(value))