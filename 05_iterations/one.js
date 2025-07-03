// for

for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element);
}

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer Loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner Loop value: ${j} and inner loop ${i}`);
    }
}

for (let i = 1; i <= 10; i++) {
    // console.log(`\nTable of ${i}\n`)
    for(let j = 1; j <= 10; j++) {
        // console.log(`${i} x ${j} = ${i*j}`);
    }
}

myArray = ["Ron", "Toto", "Eliot", "Winter"]
// console.log(`Length of the Array: ${myArray.length}`);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

//break and continue

for (let index = 1; index < 20; index++) {
    // console.log(`Value of index is: ${index}`);
    if (index == 5) {
        // console.log("5 detected");
        break;
    }    
}
for (let index = 1; index < 20; index++) {
    if (index == 5) {
        console.log("5 detected");
        continue
    }    
    console.log(`Value of index is: ${index}`);
}

// here 5 detected will get printed but value of index: 5 will not get printed and the program will continue
// if value of index: 5 line was written above the if condition then nothing would've happened
// i.e, if we use continue then it will come out of the loop for once but will continue iterating again