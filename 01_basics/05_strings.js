const name = "Salim"
const repoCount = 50

// console.log(name + repoCount);  outdated syntax

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName =  new String('salimfc')

// console.log(gameName[2]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf("f"));

const newString = gameName.substring(0,3)
// console.log(newString);

anotherString = gameName.slice(-7,1)
// console.log(anotherString);

// anotherNewString = "    slain   "
// console.log(anotherNewString);
// console.log(anotherNewString.trim());
// console.log(anotherNewString.trimStart());
// console.log(anotherNewString.trimEnd());
// console.log(anotherNewString.trimRight());
// console.log(anotherNewString.trimLeft());

url = "https:/google.com/salim%10ahmed"
console.log(url.replace("%10","-"));
console.log(url.includes("salim"));

splitString = url.split("/")
console.log(splitString);


