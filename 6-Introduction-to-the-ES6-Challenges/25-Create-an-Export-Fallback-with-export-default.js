// I learned that usually you will use the export default syntax if only one value is being exported from a file. It is also used to create a fallback value for a file or module. Note: Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use export default with var, let, or const .

"use strict";
export default function subtract(x,y) {return x - y;}
