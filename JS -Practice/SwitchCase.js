/*
SWITCH : can be an efficient replacement to many 'else if' statement.
*/

/*let day = 1;

switch(day){
    case 1: 
        console.log("Monday");
        break;
    case 2: 
        console.log("Tuesday");
        break;
    case 3: 
        console.log("Wednesday");
        break;
    case 4: 
        console.log("Thursday");
        break;
    case 5: 
        console.log("Friday");
        break;
    case 6: 
        console.log("Saturday");
        break;
    case 7: 
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Option")
}*/

let marks = 80;
let letterGrade;

switch(true){
    case marks >= 90:
        letterGrade = "A";
        break;
    case marks >= 70:
        letterGrade = "B";
        break;
    case marks >= 60:
        letterGrade = "C";
        break;
    case marks >= 40:
        letterGrade = "E";
        break;
    case marks < 40:
        letterGrade = "F";
        break;  
    default:
        console.log("Invalid marks!");
}
    console.log(letterGrade);