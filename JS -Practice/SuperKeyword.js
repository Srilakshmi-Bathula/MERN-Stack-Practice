/*
super = 
*/

class Animal{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
class Dog extends Animal{
    
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }
    move(){
        console.log(`${this.name} is moveing...`);
    }

}
class Cat extends Animal{
    
    constructor(name, age, runsSpeed){
        super(name, age);
        this.runsSpeed = runsSpeed;
    }

}

const dog = new Dog("Dog", 15, 150);
const cat = new Cat("Cat", 12, 100);

console.log(dog.name);
console.log(dog.age);
console.log(dog.runSpeed);