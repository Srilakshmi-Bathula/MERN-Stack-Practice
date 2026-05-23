/*
while loop : repeat some code WHILE some condition is true.
*/



        let username = "my";
        let password = "my";
        let loggedIn = true;

            while(loggedIn){

                if(username == "myUser" && password == "myPass"){
                    loggedIn = true;
                    console.log (`${username} are Logged In!`);
                }
                else{
                    console.log(`Invalid credentials ! Try again`); 
                }
            }