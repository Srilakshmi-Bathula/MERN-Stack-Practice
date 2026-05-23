// Date (year, month, day, hour, minute, second, ms)

//let date = new Date(2027, 3, 2, 12, 23, 45, 10);

//let date = new Date("2027-04-02T06:53:45.010Z");

//let date = new Date(17000000000000);

/*let date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const seconds = date.getSeconds();
const ms = date.getMilliseconds();
const dayOfWeek = date.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minute);
console.log(seconds);
console.log(ms);
console.log(dayOfWeek);
*/

/*let date = new Date();

date.setFullYear(2026);
date.setMonth(3);
date.setDate(2);
date.setHours(9);
date.setMinutes(24);
date.setMilliseconds(12);

console.log(date);
*/

let date1 = new Date("2025-12-31");
let date2 = new Date("2025-12-30");

if(date1 > date2){
    console.log("Happy Newyear!");
}