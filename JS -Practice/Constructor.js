/*
constructor : special method for defining the 
                properties and methods of objects.
*/

/*function Car(model, year, color){
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive =function(){console.log("This driven by driver!");}
}

const car1 = new Car("Tata" , 2025, "Red");
const car2 = new Car("Benz", 2024, "Blue");
const car3 = new Car("Nano", 2023, "SkyBlue");

car1.drive();
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

car2.drive();
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

car3.drive();
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);
*/

function Product(name, price) {  //constructor
    
    this.name = name; //variable in constructor
    this.price = price;

    this.display = function(){       // function in constructor
        console.log(`Product: ${name}`);
        console.log(`Price: ${price.toFixed(1)}`);
    }
}

const product1 = new Product("Soap", 100);
const product2 = new Product("Sampoo", 200);

product1.display();
product2.display();