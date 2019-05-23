// I learned you can chain else statements together if you have multiple conditions that need to be addressed.

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
  return "Between 5 and 10";
}
}
// Change this value to test
testElseIf(7);
