function saymyname () {
    console.log("B"),
    console.log("l"),
    console.log("a"),
    console.log("z"),
    console.log("e")
}

// saymyname()

// function addTwoNumbers(number1, number2,) {
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2,) {
    // let result = number1 + number2
    // return result                              /* After return no other line or code will run */
    return number1 + number2                                  
}

// addTwoNumbers(3, 4)
// addTwoNumbers(3, "4")
// addTwoNumbers(3, null)

const result = addTwoNumbers(3, 4)

// console.log("Result: ", result)

function loginUserMessage(username) {
    if(username === undefined){                        /* People also use this (!username) */
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Blaze"));
// console.log(loginUserMessage())


// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500, 2000))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Blaze",
    price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
