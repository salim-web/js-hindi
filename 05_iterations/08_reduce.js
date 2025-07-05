const myArr = [1, 2, 3];

// let totalNum = myArr.reduce(function (accumulator, currentvalue) {
//   console.log(`Accumulator: ${accumulator} and CurrentValue: ${currentvalue}`);
//   return accumulator + currentvalue;
// }, 0);

// let totalNum = myArr.reduce(
//   (accumulator, currentvalue) => accumulator + currentvalue,
//   0
// );

// console.log(totalNum);

const shoppingCart = [
  {
    courseName: "python",
    price: 999,
  },
  {
    courseName: "jsCourse",
    price: 2999,
  },
  {
    courseName: "python",
    price: 5999,
  },
  {
    courseName: "python",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce(
  (accumulator, item) => accumulator + item.price,
  0
);
console.log(priceToPay);

