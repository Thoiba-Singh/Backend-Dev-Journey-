// Dates

let mydate = new Date()

// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleTimeString());

// console.log(typeof mydate);

let myCreatedDate = new Date(2026,0,23)
// console.log(myCreatedDate)
// console.log(myCreatedDate.toDateString())

// let newCreatedDate = new Date(2026, 0, 23, 5, 4, 12)
let newCreatedDate = new Date("2026-01-15")
// console.log(newCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(newCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth() + 1)
// console.log(newDate.getDay())
// console.log(newDate.getDate())


newDate.toLocaleString('default', {
    weekday: "long",
})