const promiseOne = new Promise(function(resolve, reject){                              /* 1st */
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})



new Promise(function(resolve, reject){                                                /* 2nd */
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolve")
})



const promiseThree = new Promise(function(resolve, reject){                          /* 3rd */
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})



const promiseFour = new  Promise(function(resolve, reject){                         /* 4th */
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: 'Blaze', password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user)
    return user.username
}) .then((username) => {
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally((username) => {
    console.log("The promise is resolved or rejected");
})



const promiseFive = new Promise(function(resolve, reject){                          /* 5th */
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: "JavaScript", password: "123"})
        } else{
            reject('ERROR: JS Something  went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()