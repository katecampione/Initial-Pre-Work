// I learned the conditional operator, also called the ternary operator, can be used as a one line if-else expression.

The syntax is:

condition ? statement-if-true : statement-if-false;

function checkEqual(a, b) {
  return a == b ? true : false;
}

checkEqual(1, 2);
