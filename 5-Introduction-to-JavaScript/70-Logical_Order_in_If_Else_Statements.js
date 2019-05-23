// I learned that the logical order is important and that function is executed from top to bottom so the order of your statements matters.

function orderMyLogic(val) {
   if (val < 5) {
    return "Less than 5";
   } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
orderMyLogic(7);
