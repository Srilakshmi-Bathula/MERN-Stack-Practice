// Async/Await = Async = makes a function return a Promise
//               Await = make a async function wait for a Promise

//               Allows you write asynchronous code in a synchronous manner
//               Async does't have resolve or reject parameters
//               Everything after Await is placed in an event queue


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
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTake = true;
            if(trashTake){
                resolve("You take out the trash ♻️");
            }
            else{
                reject("You did not take trash!");
            }
        }, 500)
    })
}

async function doChores(){
    try{
        const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);

    console.log("You finished all chores!!");
    }
    catch(error){
        console.log(error);
    }
}

doChores();

// walkDog().then(value => {console.log(value); return cleanKitchen()})
//          .then(value => {console.log(value); return takeOutTrash()})
//          .then(value => {console.log(value); console.log("all tasks completed!!")})
//          .catch(error => console.error(error));