// I learned in order to help us create more flexible functions, ES6 introduces default parameters for functions. The default parameter kicks in when the argument is not specified (it is undefined). You can add default values for as many parameters as you want.

const increment = (function() {
  "use strict";
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
