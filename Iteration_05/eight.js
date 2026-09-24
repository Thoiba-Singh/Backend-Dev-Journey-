const myNums = [1, 2, 3, 4, 5]

// const myTotal = myNums.reduce(function (acc, currentvalue) {
//     console.log(`acc: ${acc} and currval: ${currentvalue}`);
//     return acc + currentvalue
// }, 0)                                                                     /* Initial value */

// console.log(myTotal);


// const myTotal = myNums.reduce( (acc, curravl) => acc + curravl, 0)
// console.log(myTotal)


const shoppingCart = [
    {
        itemName: "js Course",
        price: 2999
    },
    {
        itemName: "Mobile Dev Course",
        price: 5999
    },
    {
        itemName: "Data Science Course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);
