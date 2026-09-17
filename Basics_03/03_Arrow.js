const user = {
    username: "Blaze",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
    // let username = "Blaze"
    // console.log(this.username);
    
// }
// chai()


// const chai = function(){
//      let username = "Blaze"
//     console.log(this.username);
// }


// const chai = () => {
//      let username = "Blaze"
//     console.log(this);
// }

// chai()


// const addTwo = (num1, num2) => {                       /* First Technique */
    // return num1 + num2                                  
// }                                                       
                                                           
// const addTwo = (num1, num2) => num1 + num2               /* Second Technique */

// const addTwo = (num1, num2) => (num1 + num2)                /* Third Technique */

const addTwo = (num1, num2) => ({username: "Blaze"})
console.log(addTwo(3,4))



const myArray = [2, 5, 3, 7, 8]
myArray.forEach()