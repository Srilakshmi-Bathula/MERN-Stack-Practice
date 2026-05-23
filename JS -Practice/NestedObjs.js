/*
nested objects : objects inside of other objects.
                Allows you to reprsent more complex data structures
                Child object is enclosed by a parent object.

                Person{Address{} ContactInfo{}}
                ShoppingCart{Keybord{}, Monitor{}, Mouse{}}
*/

/*const person1 = {
    fullName : "Sri Lakshmi Bathula",
    age : 18,
    hobbies : ["read", "write", "sleep"],
    address:{
        street : "Near Mill",
        city : "Guntur",
        country : "AP"
    }
}
*/
/*console.log(person1.fullName);
console.log(person1.age);
console.log(person1.hobbies[1]);
console.log(person1.address.country);
*/
/*
for(const property in person1.address){
    console.log(person1.address[property])
}
*/
class Person{
    constructor(fullName, age, ...address){
        this.fullName = fullName;
        this.age = age;
        this.address = new Adress(...address);
    }
}
class Adress{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Sri Lakshmi", 18, "Near Mill",
                                                "Sap",
                                                "Guntur"
)

console.log(person1.address.street);