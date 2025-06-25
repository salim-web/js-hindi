let myDate = new Date()
console.log(myDate.toString()); // Tue Jun 24 2025 11:18:30 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Tue Jun 24 2025
console.log(myDate.toISOString()); // 2025-06-24T05:49:19.244Z
console.log(myDate.toJSON()); // 2025-06-24T05:49:19.244Z
console.log(myDate.toLocaleDateString()); // 24/6/2025
console.log(myDate.toLocaleString()); // 24/6/2025, 11:18:30 am
console.log(myDate.toTimeString()); // Tue Jun 24 2025 11:18:30 GMT+0530 (India Standard Time)
console.log(typeof myDate);

let myCreatedDate1  = new Date(2025, 11, 8, 5, 2)
let myCreatedDate2 = new Date("2025-01-12")
let myCreatedDate3  = new Date("01-12-2025")
console.log(myCreatedDate1.toLocaleString());

let myTimeStamp  = Date.now()
console.log(myTimeStamp); // outputs the systems current time from jan 1 of 1970
console.log(myCreatedDate.getTime()); // converts the time into miliseconds from jan 1 of 1970 


console.log(Math.floor(Date.now()/1000)); // converts miliseconds into seconds

let newDate =  new Date()
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);
console.log(newDate.toLocaleDateString('default',{
    weekday : "long"
})); // prints only the weekday but in long form










 




