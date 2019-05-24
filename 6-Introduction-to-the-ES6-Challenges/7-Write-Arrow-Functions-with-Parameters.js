// I learned that just like a normal function, you can pass arguments into arrow functions. You can pass more than one argument into arrow functions as well.

const myConcat = (arr1, arr2) => {
  "use strict";
  return arr1.concat(arr2);
};
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));
