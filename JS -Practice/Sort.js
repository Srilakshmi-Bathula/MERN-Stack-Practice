/*
sort:

*/


/*let fruits = ["apple", "mango", "guava","banana", "coconut"];

fruits.sort();

console.log(fruits);
*/

/*let nums = [1, 3,4, 6, 1, 9, 5, 6, 8];

//nums.sort((a, b ) => (a - b)); //asending

nums.sort((a, b ) => (b - a));  // desending

console.log(nums);*/


let people = [{name: "Sri", age : 17, gpa : 9.6},
                {name: "Sravya", age : 12, gpa : 8.6},
                {name: "kavya", age : 19, gpa : 9.2},
                {name: "Siri", age : 15, gpa : 9.1}
]

//people.sort((a, b) => (a.gpa - b.gpa));
people.sort((a, b) => b.name.localeCompare(a.name));

console.log(people);