// for in //


// const myObject = {
//     js: 'Javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//     // console.log(`${key} shortcut is for ${myObject[key]}`)
    
    
// }



// const programming = ["js", "rb", "py", "java", "cpp"]

// for (const num in programming) {
//     // console.log(programming[num])    
// }


const map = new Map()
map.set('In', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('In', "India")

for (const key in map) {
    console.log(map[key])
    
}