/*
Inheritance : allows a new class to inherit the properties and methods 
                from an existing class (parent => child)
                helps with code reusability.
*/

class Animal{

    eat(){
        console.log(`This ${this.name} is eating...`)
    }
    sleep(){
        console.log(`This ${this.name} is sleeping...`)
    }
}
class Dog extends Animal{
    name = "Dog";
    run(){
        console.log(`This ${this.name} is running...`)
    }

}
class Cat extends Animal{
    name = "Cat";
    drink(){
        console.log(`This ${this.name} is drinking...`)
    }
}

const dog = new Dog();
const cat = new Cat();

dog.eat();
dog.run();

cat.drink();
cat.eat();