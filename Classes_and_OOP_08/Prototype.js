let myName = "Blaze    "

// console.log(myName.truelength)


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.blaze = function(){
    console.log(`blaze is present in all objects`)
}

Array.prototype.heyblaze = function(){
    console.log(`Blaze says hello`)
}

// heroPower.blaze()                                  /* Inner shell */
// myHeros.blaze()                                                                   /* This two are Outer */                                 
// myHeros.heyblaze()
// heroPower.heyblaze()                               /* Inner Shell */




const User = {
    name: "Chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiaurCode     "

String.prototype.truelength = function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.truelength()
"blaze".truelength()
"iceTea".truelength()