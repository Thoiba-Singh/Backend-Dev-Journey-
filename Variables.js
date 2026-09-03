const accountId = 1234
let accountEmail = "blah@gmail.com"
var accountPassword = "13579"
accountCity = "jorhat"
let accountState;
// accountId = 5 // not allowed

accountEmail = "Huh@gmail.com"
accountPassword = "11223344"
accountCity = "Bengaluru"

console.log(accountId)

/*
Prefer not to use var
Becoz of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
