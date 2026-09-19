// if
const isUserLoggedIn =  true
const temperature = 41

// if( 2 != "2"){
//     console.log("Executed");
    
// }
// else
// console.log("Error")


// if (temperature < 50){
//     console.log("less than 50");
    
// }
// else
// console.log("temperatur is greater than 50");
// console.log("Blaze")



// const score = 200
// if (score > 100){
//     let power = "fly"
//     console.log(`User power: ${power}`)
// }
// console.log(`User power: ${power}`);



// const balance = 1000
// if (balance > 500)console.log("test"), console.log("test2");    /* Not a good practice */


// if (balance < 500){
//     console.log("les than 500");
    
// }
// else if (balance < 750){
//     console.log("less than 750");
    
// }
// else if (balance < 900){
//     console.log("less than 900");
    
// }
// else if (balance < 1200){
//     console.log("less than 1200")
// }
// else if (balance< 1300){
//     console.log("None")
// }



const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (UserLoggedIn && debitCard && 2 != 2){
    console.log("Allow to buy course");
    
}
if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
    
}
else{
    console.log("Fuck you Idiot");
    
}