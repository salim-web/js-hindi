const accountId = 144553
let accountEmail = "salim@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 // NOT ALLOWED 

console.log(accountId);

accountEmail = "salimghy@gmail.com"
accountPassword = "4567"
accountCity = "Raipur"

/*
Prefer not to use var
because of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity])
