/*ES6 MODULE: An external file that contains reusable code that can be run imported 
                into other Javascript files. Write reusable code for many different apps
                Can contain variables, classes, functions ... and more Introduced as part of ECMAScript 2025 update. */

const {PI, getCircumference, getArea, getVolume} = require("./mathUtil.js");

console.log(PI);
const circumference = getCircumference(5);
const area = getArea(6);
const volume = getVolume(7);


console.log(`circumference: ${circumference.toFixed(2)} cm`);
console.log(`area: ${area.toFixed(2)} cm^2`);
console.log(`volume: ${volume.toFixed(2)} cm^3`);