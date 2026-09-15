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
    if(username === undefined){                        /* People also use this(!username) */
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Blaze"));

console.log(loginUserMessage())


