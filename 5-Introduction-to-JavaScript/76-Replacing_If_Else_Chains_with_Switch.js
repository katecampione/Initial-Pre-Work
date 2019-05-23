// If you have many options to choose from, a switch statement can be easier to write than many chained if/else if statements.

function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line

  switch(val) {
    case "bob":
      return "Marley";
      break;
    case (42):
      return "The Answer";
      break;
    case (1):
      return "There is no #1";
      break;
    case (99):
      return "Missed me by this much!";
      break;
    case (7):
      return "Ate Nine";
      break;
    case "John":
      return "";
      break;
    case (156):
      return "";
      break;
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
chainToSwitch(7);
