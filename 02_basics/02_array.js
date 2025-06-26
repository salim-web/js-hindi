const marvelHeroes = ["Thor", "Ironman", "Loki"]
const dcHeroes = ["Superman", "Batman", "Flash"]

marvelHeros.push(dcHeroes) // inserts the whole array inside the first array
console.log(marvelHeroes);
console.log(marvelHeroes[3][1]); // accessing an array elements inside another array

 const allHeroes = marvelHeroes.concat(dcHeroes) // adds both the heroes
console.log(allHeroes);

const allNewHeroes1 = [marvelHeroes, dcHeroes] // array inside array
const allNewHeroes2 = [...marvelHeroes, ...dcHeroes] // spread operator
console.log(allNewHeroes1);
console.log(allNewHeroes2);


const anotherArray = [1, 2, 3, [4 , 5, 6,], 7, [6, 7, [1, 2, 3]]]
const realAnotherArray = anotherArray.flat(Infinity) //combines all the sub-arrays and make it one array
console.log(realAnotherArray);

console.log(Array.from('Salim')); // coverts to array from given element
console.log(Array.isArray('Salim')); 
console.log(Array.from({"name" : "Salim"})); // objects if not specified key/value returns null array   

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // converts from set of elements

