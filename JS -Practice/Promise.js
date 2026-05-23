// Promise : An Object that manage asynchronous operations.
//             Wrap a promise Object around (asynchronous code)
//             "I promise to return a value"
//             PENDING -> RESOLVED or REJECTED
//             new Promise(resolve, reject) => {asynchronous code}

// DO THESE CHORES IN ORDER

// 1.WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3.TAKE OUT THE TRASH

function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            if(dogWalked){
                resolve("You walk the Dog 🦮");
            }
            else{
                reject("You did't walk the dog!");
            }
    }, 1500)
})
}
function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenClean = true;
            if(kitchenClean){
                resolve("You clean the Kitchen 🧹")
            }
            else{
                reject("You did't clean the kitchen!");
            }
        
    }, 2500)
})
}
function takeOutTrash(){
    return new Promise((resolve, reject => {
        setTimeout(() => {
            const trashTake = false;
            if(trashTake){
                resolve("You take out the trash ♻️")
            }
            else{
                reject("You did not take trash!");
            }
        }, 500)
    }))
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("all tasks completed!!")})
         .catch(error => console.error(error));