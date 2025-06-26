const tinderUser = {} 
tinderUser.id = "123abc"
tinderUser.name = "Salmu"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : 'someone@gmail.com',
    fullName : {
        userFullName : {
            firstName : "Salim",
            lastName : "Ahmed"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);
// console.log(regularUser.fullName?.userFullName.firstName); // ? checks whether the key is prsnt or not

const obj1 = {1 : 'a', 2 : 'b'}
const obj2 = {3 : 'a', 4 : 'b'}
const obj3 = {5 : 'a', 6 : 'b'}

const finalObj1 = {...obj1, ...obj2, ...obj3}
// console.log(finalObj1); // more  preferrable way

const finalObj2 = Object.assign({}, obj1, obj2, obj3) // {} is the target and ibj are the sources
// console.log(finalObj2);

users = [
    {
        id : 1,
        email : 's@xyz.com'
    },
    {
        id : 1,
        email : 's@xyz.com'
    },
    {
        id : 1,
        email : 's@xyz.com'
    }
]

// console.log(users[1].email); // acessing in array of objs

// console.log(Object.keys(tinderUser)) // returns the keys of obj in array datatype
// console.log(Object.values(tinderUser)); // retuurns the values of obj in array datatype
// console.log(Object.entries(tinderUser)); // returns key value pair in array inside of an array

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true=> checks if the prop is present or 

// console.log(tinderUser.constructor); // [Function: Object]

const course = {
    courseName : 'js in hindi',
    price : '999',
    courseInstructor : 'Hitesh'
}

// console.log(course.courseInstructor); // more work

const {courseInstructor} = course
// console.log(courseInstructor);

const {courseInstructor : instructor} = course
console.log(instructor);

//JSON

// {
//     "name" : "salim",
//     "courseName" : "js in hindi",
//     "price" : "free"
// }

[
    {},
    {},
    {}
]