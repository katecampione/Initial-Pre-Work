/* I learned that the parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.
The function call looks like:
parseInt(string, radix);
    And here's an example:
      var a = parseInt("11", 2); */

function convertToInteger(str) {
   var a = parseInt(str,2) ;
 return a;
}

convertToInteger("10011");
