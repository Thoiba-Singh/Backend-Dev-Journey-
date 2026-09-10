// Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["IronMan", "SpiderMan", "Thor"]

const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myHeros[0])                      /* Names the value at that given index */

// Array methods

myArr.push(6,7)                        /* Adds value at the end */  
myArr.pop()                            /* Delete the end value */
// console.log(myArr);

myArr.unshift(9,8)                     /* Adds value at the start */
myArr.shift()                          /* Delete the start value */ 
// console.log(myArr)

// console.log(myArr.includes(9))          /* Finds whether the given value is in the array or not(Boolean value) */
// console.log(myArr.indexOf(2))

const newArr = myArr.join()

// console.log(myArr)

// console.log(newArr)
// console.log(typeof newArr);


// Slics, Splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)                        
console.log(myn1);                        /* Creats a copy of the portion of an array (doesn't add the last index value)*/

console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);                        /* Cuts out a portion of and array(adds the last index value) */


