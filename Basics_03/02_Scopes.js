let a = 300                                 /* Global Scope */
if (true){                                   
    let a = 10                              /* Inside the Object function is the block scope */
    const b = 20
    console.log("INNER:", a)
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

console.log(a);
// console.log(b);
// console.log(c);
