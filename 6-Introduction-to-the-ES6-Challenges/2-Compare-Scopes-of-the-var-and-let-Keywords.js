// I learned that when you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function. When you declare a variable with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression. With the var keyword, i is declared globally. So when i++ is executed, it updates the global variable. This behavior will cause problems if you were to create a function and store it for later use inside a for loop that uses the i variable. This is because the stored function will always refer to the value of the updated global i variable. The let keyword does not follow this behavior. This exercise is designed to illustrate the difference between how var and let keywords assign scope to the declared variable.

function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
   let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
