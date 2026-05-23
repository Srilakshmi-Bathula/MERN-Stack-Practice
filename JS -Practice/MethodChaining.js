

let username = "  SriTech  ";

//  Without Method Chaining

/*username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();

username = letter + extraChars;

console.log(username);*/



// With Method Chaining

let fullname = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();;

console.log(fullname);