/*
object : A collection of related properties and/ or methods
        Can represent real world objects (people, products, places)
        object = (key : value
                function())
 */

const person1 = {
    firstName : "Sri",
    lastName : "Bathula",
    age : 18,
    isStudent : true,
    sayHello : function(){console.log("Hey Hello...");},
    eat : function(firstName){console.log(`${this.firstName} eating...`);}
}
const person2 = {
    firstName : "Swapna",
    lastName : "Bathula",
    age : 18,
    isStudent : false,
    sayHii : function(){console.log("Hey Hii..");},
    eat : function(firstName){console.log(`${this.firstName} eating...`)}
}

person1.sayHello();
person1.eat();
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isStudent);

person2.sayHii();
person2.eat();
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isStudent);