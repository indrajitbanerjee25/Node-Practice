//require("./xyz.js");

//const calculateSum = require("./calculate/calculateSum.js");
//const calculateMultiply = require("./calculate/calculateMultiply.js");
const { calculateSum, calculateMultiply } = require("./calculate/index.js");
var name = "Namaste NodeJS";

var a = 10;
var b = 20;
//console.log(name);

calculateSum(a, b);
calculateMultiply(a, b);
// console.log(a + b);

//console.log(global);
