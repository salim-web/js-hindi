const userEmail = "s@salim.ai"

if (userEmail) {
    // console.log("User has email");
}
else {
    // console.log("User doesn't has email");
}

// falsy values

// false, 0 , -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// "0", "false", " ", [], {}, function name() {}

arrayTest = []

if (arrayTest.length === 0) {
    // console.log("Array is empty");
}

const myObj = {}

if (Object.keys(myObj).length === 0) {      // Object.keys(myObj) => returns an array of all the keys of the obj
    // console.log("Object is empty");
}


// Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 10
val3 = undefined ?? 10 ?? 20


// console.log(val1); // 5
// console.log(val2); // 10
// console.log(val3); // 10
// console.log(val4); // 10


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");


