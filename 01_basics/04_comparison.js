console.log("2" > 1); // output => true
console.log(2 > "1"); // output => true

console.log(null > 0); // output => false
console.log(null == 0); // output => false
console.log(null >= 0); // output => true

console.log(undefined > 0); // output => false
console.log(undefined == 0); // output => false
console.log(undefined >= 0); // output => false

// strict comparison => checks datatype and also compares them
console.log("2" === 2); // output => false

let x = false;
let y = "0";
let z = 0;

console.log(x == y); // true
console.log(x == z); // true
console.log(y == x); //true 


// avoid comparisons of different datatypes 
// coersion => when we use == it converts the datatypes, in this case it converts the string into number then number into boolean
 