const myObj = {
  js: "Javascript",
  cpp: "C++",
  rb: "Ruby",
};

for (const key in myObj) {
  //    console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming = ["js", "py", "rb", "cpp", "java"];

for (const key in programming) {
  // console.log(programming[key]);
}
// in forof loop key will give the values of the array instead of indexes
// but in forin loop key only gives the indexes of the array

const map = new Map();

map.set("In", "India");
map.set("Uk", "United Kingdom");
map.set("Fr", "France");
map.set("In", "India");
map.set("In", "India");

for (const key in map) {
  console.log(map); // map is not iterable in forin loop
}
