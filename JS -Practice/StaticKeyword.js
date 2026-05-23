/*
static = keyword that defines properties or methods that belongs
        to a class itself rather than the objects created 
        from that class (class owns anything static , not the Objects)
*/

/*class User{
    
    static userCount = 0;

    constructor(userName){
        this.userName = userName;
        User.userCount ++;
    }

    static getUserCount(){
        console.log(`The ${User.userCount} users in online!`);
    }
    sayHello(){
        console.log(`Hey! This is ${this.userName}`);
    }
}
const user1 = new User("Sri");
const user2 = new User("Swapna");
const user3 = new User("Lucky");

User.getUserCount();

user1.sayHello();
user2.sayHello();
user3.sayHello();
*/

class MathUtil{
    static PI = 3.14;

    static getDiameter(radius){
        return radius * 2;
    }
    static getCircumerence(radius){
        return 2 * this.PI *radius;
    }
    static getArea(radius){
        return this.PI * radius * radius;

    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(5));
console.log(MathUtil.getCircumerence(5).toFixed(2));
console.log(MathUtil.getArea(5));