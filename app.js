require("./xyz.js");
//import { x,calculateSum } from "./sum.js";
//const {x,calculateSum} = require("./calculate/sum.js");
//const {calculateMultiply} = require("./calculate/multiply.js");
const {calculateSum,calculateMultiply}=require("./calculate");
const data =require("./data.json");
var a ='roopa';

var a=21;
var b=10;
calculateSum(a,b);
calculateMultiply(a,b);
console.log(data);
//console.log(x);

console.log(globalThis===global);