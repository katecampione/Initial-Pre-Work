// For testing more than one thing at a time : The logical and operator (&&) returns true if and only if the operands to the left and right of it are true. The same effect could be achieved by nesting an if statement inside another.

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
      return "Yes";

  }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);
