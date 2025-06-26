// Singleton

// const tinderUser = new Object() // singleton obj
// const tinderUser = {} // non-singleton obj

// Object.create

// Object literals 

mySym = Symbol("key1")

const jsUser = {
    name : "Salim",
    age : 19,
    gender : "M",
    [mySym] : "key1",
    email : "salim@google.com",
    isLoggedIn : false,
    lastLogInDays : ["Saturday", "Sunday"]
}

// console.log(jsUser);

// console.log(jsUser.email);
// console.log(jsUser["email"]); // more preffered  
// console.log(typeof jsUser[mySym]); // symbol should be acessed this way only
// console.log(typeof mySym);

jsUser.email = 'salim@chatgpt.com'

// Object.freeze(jsUser) // can't edit it anymore

jsUser.email = 'salim@microsoft.com'
// console.log(jsUser);

jsUser.greeting = function(){
    console.log('Hello JS user');
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // this => used to the current obj
    
}

// console.log(jsUser.greeting); // function returnback, fn is not executed
// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());




