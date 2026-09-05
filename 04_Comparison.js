// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);
// console.log(null <= 0);


/*
The reason is that an equality check '==' and comparison '>, < , >= , <=' works differently
Comparison convert null to a number, treating it as 0.
That's why null >= 0 is true, and null > 0 is false
*/

// console.log(undefined == 0);

// '==='  In Triple Equal to symbol their the function check the equation as well as the data type

console.log ("2" === 2)