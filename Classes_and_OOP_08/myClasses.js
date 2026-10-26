// ESP

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encrpytPassword(){
//         return `${this.password}abc`
//     }
//     chageUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai", "chai@gmail.com", "123")

// console.log(chai.encrpytPassword())
// console.log(chai.chageUsername());



// Behind the scene

function User(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
}

User.prototype.encrpytPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encrpytPassword())
console.log(tea.changeUsername())