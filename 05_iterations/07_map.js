const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const returnNums  = myNums.map( (num) => num + 10 )
// console.log(returnNums);

const newNums = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num > 40);
console.log(newNums);
// filter returns only true/false values but map operates some conditions assigned to it