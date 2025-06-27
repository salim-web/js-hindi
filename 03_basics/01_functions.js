function sayMyName(){
    console.log('S');
    console.log('A');
    console.log('L');
    console.log('I');
    console.log('M');
}

// sayMyName()

// sayMyName() //function execution
// sayMyName //function reference

// function addTwoNumbers(num1,num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1,num2){
    // result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNumbers(2,4)
// console.log(result);

function loginUserMessage(username){  // username = 'sam' => sam will be the default name now
     if(username === undefined){  // or => if(!username)
        console.log('Please enter a username');
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage('Salim')); // Salim just logged in
// console.log(loginUserMessage()); // undefined just logged in

function calculateCartPrice(...num1){      // if there are more than one value in the arguement then the rest operator will put it in an arary
    return num1
} 
// console.log(calculateCartPrice(2, 2 ,4)); // [ 2, 2, 4 ]

function calculateCartPrice(val1, val2, ...num1){    
    return num1
} 
// console.log(calculateCartPrice(2, 2, 4));  //[ 4 ]

const user = {
    name : 'salim',
    age : 19
}

function handleObject(anyObject){
    return `Username is ${anyObject.name} and age is ${anyObject.age}`
}

// console.log(handleObject(user));

const myArray = [100, 200, 300 , 400]

function returnSecondValue(anyArray){
    return anyArray[1]
}

console.log(returnSecondValue(myArray));
