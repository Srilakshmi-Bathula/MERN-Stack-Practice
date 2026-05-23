/*
string sliceing = creating a substring 
                    from a portion of another string

                    string.slice(start, end)
*/

/* const fullname = "Sri Tech";

//let firstName = fullname.slice(0, 3);
//let lastName = fullname.slice(4, 8);
let firstName = fullname.slice(0, fullname.indexOf(" "));
let lastName = fullname.slice(fullname.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);

let firstChar = fullname.slice(0, 1);
let lastChar = fullname.slice(-1);

console.log(lastChar);
console.log(firstChar);
*/

let email = "Sritech@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(extension);