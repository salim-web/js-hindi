const myArr = [0, 1, 2, 3, 4, 5, true, null, 'salim']
console.log(myArr[7]);

const myArr2 = new Array(0, 1, 2, 3, 4)

myArr.push(6)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr2.unshift(0) // adds at the starting of the array
console.log(myArr2);
myArr2.shift() // removes from the first position
console.log(myArr2);

console.log(myArr2.includes(9)); // boolean
console.log(myArr2.indexOf(3)); // 2
console.log(myArr2.indexOf(7)); //if not in range ouputs -1 

const newArr = myArr2.join() // datatype string
console.log(myArr2);
console.log(newArr);

// slice, splice


console.log("Before slicing ", myArr2);
const myn1 = myArr2.slice(1,3) // doesn't include the last index also doesn't manipulate the array
console.log("Slicing", myn1);
console.log("After slicing ", myArr2);

console.log("Before splicing ", myArr2);
const myn2 = myArr2.splice(1,3) // includes the last index and manipulates the array
console.log("Splicing", myn2);
console.log("After splicing", myArr2);





