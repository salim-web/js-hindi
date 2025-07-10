let score = "33"
let scoreTwo = "33abc"

// const {score} = req.body // user input so we don't know the datatype

console.log(typeof score)
console.log(typeof(score));

let valueInNumber = Number(score) // converts string to number(should be written in upper case)

console.log(typeof(valueInNumber));

let valueInNumberTwo = Number(scoreTwo)
console.log(typeof(valueInNumberTwo)); // datatype => number
console.log(valueInNumberTwo);  // value => NaN 

/* "33" => 33
"33abc" => NaN (type of NaN is number)
true/false => 1/0  
Type of null is object */

let isLoggenIn = 1
let booleanIsLoggenIn =  Boolean(isLoggenIn)
console.log(booleanIsLoggenIn);

/* 1 => true; 0 = false
"" => false
"xyz" => true */    

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


// ************************************Operations*************************************************

let value = 3
let negValue = -value
console.log(negValue);

let str1 = "hello"
let str2 = " salim"
let str3 = str1 + str2 // str1 - str2 => NaN
console.log(str3);

console.log("1" + 2); // => 12
console.log(1 + "2"); // => 12
console.log("1" + 2 + 2); // => 122
console.log(1 + 2 + "2"); // => 32

console.log(+true); // => 1
console.log(+"xyz"); // => 1
console.log(+false); // => 0
console.log(+""); // => 0










