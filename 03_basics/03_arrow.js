//  window is the most used global variable when js is run in windows
const user = {
    userName : 'Salim',
    price :  399,
    welcomeMessage : function() {
        console.log(`${this.userName}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage() // returns an object
user.userName = 'sam'
user.welcomeMessage() // returns an object
console.log(this.userName); // returns undefined
// this.userName is undefined and this function returns values


function cyber() {
    let userName = 'salim'
    console.log(this.userName);
}
// still this.userName is undefined and this function returns a value


const cyber = function() {
    let userName = 'salim'
    console.log(this.userName); // console.log(this)
}
cyber()
// // still console log is undefined  and this function returns values


const cyber = () => {
    let userName = 'salim'
    console.log(this); 
}   
// this function returns an empty set now and this.username is udefined



const addTwo = (num1, num2) => {
    return num1 + num2
}
// //basic arrow function

const addTwo = (num1, num2) => num1 + num2  // or const addTwo = (num1, num2) => ( num1 + num2 )

console.log(addTwo(2,4));
// //implicit return

const obj = (num1, num2) => ({userName : 'salmis'})

console.log(obj());

