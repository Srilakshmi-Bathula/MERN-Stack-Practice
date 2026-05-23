/*
this = reference to the object where THIS is used
        (the object depends on the immediate context)
        person.name = this.name
 */

person1 = {
    name : "Sri",
    favFood : "Biryani",
    sayHello : function(){console.log(`Hey! This is ${this.name}!`);},
    eat : function(){console.log(`My Fav Food is ${this.favFood}!`);}
}

person2 = {
    name : "Swapna",
    favFood : "Chicken",
    sayHello : function(){console.log(`Hey ! This is ${this.name}!`);},
    eat : function(){console.log(`My Fav Food is ${this.favFood}!`);}
}

person1.sayHello();
person1.eat();
person2.sayHello();
person2.eat();