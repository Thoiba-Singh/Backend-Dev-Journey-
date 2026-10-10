const user = {
    username: "Blaze",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database")
        console.log(`Username: ${this.username}`)
    }
}

// console.log(user.username)
// console.log(user.getUserDetails()) 



function User(username, loginCount, isloggedIn){
    this.username = username,
    this.loginCount = loginCount,
    this.isloggedIn = isloggedIn

    return this
}

const userOne = new User("Blaze", 12, true)
const userTwo = new User("ChaiaurCode", 11, false)
console.log(userOne)
console.log(userTwo)