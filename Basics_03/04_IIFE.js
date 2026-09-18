// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`)
})();                                           /* semi colon is a must for writing two IIFE */

( (name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED TWO${","} ${name}`);
    
})("Blaze")