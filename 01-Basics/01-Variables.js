const accountID = 111
let accountEmail = "mahendra@gmail.com"
var acccountPass = "12345"
accountCity = "Pune"
let accountState;
// accountID = 2 // Not allowed

accountEmail = "ms@gmail.com"
acccountPass = "2121"
accountCity = "Mumbai"

console.log(accountID);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountID, accountEmail, acccountPass, accountCity, accountState])
