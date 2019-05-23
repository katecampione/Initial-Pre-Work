// I learned that with an else statement an alternative block of code can be executed if the condition for the if statement is false.

function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";}
    else {
      return "5 or Smaller"
    }

  // Only change code above this line
  return result;
}

// Change this value to test
testElse(4);
