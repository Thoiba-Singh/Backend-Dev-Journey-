let a = 300                                 /* Global Scope */
if (true){                                   
    let a = 10                              /* Inside the Object function is the block scope */
    const b = 20
    // console.log("INNER:", a)
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// console.log(a);
// console.log(b);
// console.log(c);




function one(){
    const username = "Blaze"

    function two(){
        const website = "youtube"              /* Child function can access the parent function */
        console.log(username);
        
    }
    // console.log(website);

    two()
    
}

// one()

if (true){
    const username = "Blaze"
    if (username === "Blaze"){
        const website = " Youtube"
        // console.log(username + website)
    }
    // console.log(website);
    
}

// console.log(username);


// +++++++++++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++++++


function addone (num){
    return num + 1
}
console.log(addone(5))                    /* This can be access before initialization */



console.log(addtwo(5))                    /* This cannot be accessed before initialization */
const addtwo = function(num){
    return num + 2
}
