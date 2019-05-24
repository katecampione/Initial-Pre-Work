// I learned that when declaring variables with the var keyword is that you can overwrite variable declarations without an error. If you were to replace var with let in the variable declarations of the code above, the result would be an error.

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
