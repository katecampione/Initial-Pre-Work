// I learned you can chain conditional statements together to check for multiple conditions.

function checkSign(num) {
  return (num < 0) ? "negative": (num == 0) ? "zero": "positive";
}

checkSign(10);
