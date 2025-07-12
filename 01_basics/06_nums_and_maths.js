const balance = new Number(400)

console.log(balance.toString().length); // 3
console.log(balance.length); // undefined
console.log(balance.toFixed(2)); // returns the asked places after the decimal point without rounding off

const otherNumber = 23.8902
console.log( otherNumber.toPrecision(2)); // returns a string value after rounding off

hundreds = 10000000
console.log(hundreds.toLocaleString("en-IN"));


// ++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++


console.log(Math.PI);
console.log(Math.abs(-300));
console.log(Math.round(345.89));
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); //4
console.log(Math.min(2,4,5,1));
console.log(Math.max(2,4,5,1));

console.log(Math.random()); // 0-1
console.log(Math.random() * 10); // 1-10
console.log((Math.random() * 10) + 1); // 1 is added so that the min output no => 1
console.log(Math.floor(Math.random() * 10) + 1); 

const min = 0
const max = 6


console.log(Math.floor(Math.random() * (max - min + 1)) + min);