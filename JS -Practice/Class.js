/*
class = (ES6 features) provides a structured and clearer way to
            work with objects compared to trditionl constructor function
            ex : static keyword, encapsultion, inheritance.
*/


class Product{                  //Class
    constructor(name, price){   // Constructor
        this.name = name;
        this.price = price;
    }
 
    display(){                  // Function
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price}`);
    }
}

const product1 = new Product("Soap", 190);
const product2 = new Product("Sampoo",20);

product1.display();
product2.display();