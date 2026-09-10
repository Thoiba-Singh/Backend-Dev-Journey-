// Singleton
// Object.create

// Object literals

const mySym = Symbol("Key1")


const JsUser ={
    name: "Blaze",
    "Full name": "Blaze Hatori",
    [mySym]: "mykey1",                                /* Syntax for symbol is [] */
    age: 18,
    location: "Jaipur",
    email: "blaze@gmail.com",
    isloggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full name"]);                /* This one works only by this syntax */
// console.log(JsUser[mySym]);                


JsUser.email = "blaze@chatgpt.com"
// Object.freeze(JsUser)                               /* Used to freeze a required value */
JsUser.email = "blaze@microsoft.com"
// console.log (JsUser)

JsUser.greeting = function(){
    console.log("Hello JS User")
}
JsUser.greetingTwo = function(){
    console.log(`hello JS User, ${this.name}`);    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo())