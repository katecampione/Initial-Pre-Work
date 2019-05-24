// I learned that in ES6, you can also declare variables using the const keyword. Once a variable is assigned with const, it cannot be reassigned - it will throw an error if a reassignment is attempted. A common practice when naming constants is to use all uppercase letters, with words separated by an underscore.

function printManyTimes(str) {
  "use strict";

  // change code below this line

  const SENTENCE = str + " is cool!";
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");
