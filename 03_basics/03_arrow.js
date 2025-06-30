//  window is the most used global variable when js is run in windows
const user = {
    userName : 'Salim',
    price :  399,
    welcomeMessage : function() {
        console.log(`${this.userName}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage()
user.userName = 'sam'
user.welcomeMessage()
console.log(this.userName); // returns empty obj
// still console log is undefined and this function returns values


function cyber() {
    let userName = 'salim'
    console.log(this.userName);
}
// still console log is undefined and this function returns values


const cyber = function() {
    let userName = 'salim'
    console.log(this.userName);
}
// still console log is undefined and this function returns values


const cyber = () => {
    let userName = 'salim'
    console.log(this.userName); 
    
}
// still console log is undefined but this function returns an empty set now

// cyber()

const addTwo = (num1, num2) => {
    return num1 + num2
}
//basic arrow function

const addTwo = (num1, num2) => num1 + num2

const addTwo = (num1, num2) => ( num1 + num2 )

console.log(addTwo(2,4));

const obj = (num1, num2) => ({userName : 'salmis'})

console.log(obj());

//implicit return