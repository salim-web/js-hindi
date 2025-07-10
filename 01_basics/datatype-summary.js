//  Primitive(copy/immutable)

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n



// Reference/immutable (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

// let anotherHeros = myObj
// anotherHeros.age = 20

// console.log(myObj);  // produces a shallow copy
// console.log(anotherHeros); 

//Exceptions(destructured/spread operator)

// let anotherHeros = {...myObj} // produces a deep copy, no reference wll be there/passed as a new
// anotherHeros.age = 20

// console.log(myObj);
// console.log(anotherHeros);


let myObj1 = {
    name: "hitesh",
    age: 22, 
    ball :{
            type : "leather"     // destructioring can also be done in json but it will create reference
          } 
}


let anotherHeros = {...myObj1} 
anotherHeros.ball.type = "tennis"

console.log(myObj1);
console.log(anotherHeros);
// gives same output => reference


const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof heros);

// https://262.ecma-international.org/5.1/#sec-11.4.3




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "saliiim"

let anotherName = myYoutubeName
anotherName = "salim"

// console.log(myYoutubeName);
// console.log(anotherName);

let userOne = {
    user : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne
userTwo.email = "salim@google.com"

// console.log(userOne);
// console.log(userTwo);

