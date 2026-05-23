/*
getter : 

setter :
*/

/*class Rectangle {

    constructor(width, height){
        this.width = width;
        this.height =height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("Width must be positive number!");
        }
    }
    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("Height must be positive number!");
        }
    }

    get width(){
        return `${this._width} cm`;
    }
    get height(){
        return `${this._height} cm`;
    }
    get area(){
        return  `${this._width * this._height} cm ^2`
    }
}

const rect1 = new Rectangle(10, 5);

console.log(rect1.width);
console.log(rect1.height);
console.log(rect1.area);
*/

class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
       
    }

    set firstName(newFirstname){
        if(typeof newFirstname == "string" && newFirstname.length > 0){
            this._firstName = newFirstname;
        }
        else{
            console.error("first name must be a non empty!")
        }
    }
    set lastName(newLastname){
        if(typeof newLastname == "string" && newLastname.length > 0){
            this._lastName = newLastname;
        }
        else{
            console.error("first name must be a non empty!")
        }
    }

    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
}

const p1 = new Person("Sri", "Lucky", 19);
console.log(p1.firstName);
console.log(p1.lastName);