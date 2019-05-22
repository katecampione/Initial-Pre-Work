// I learned the inequality operator is the opposite of the equality operator, but like the equality operator it will convert data types when comparing.

// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testNotEqual(10);
