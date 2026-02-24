//importing duplicate function and data
import { add,subtract,PI } from "./1_named_exports.ts";
import { add as sum,subtract as sub,PI as pi } from "./2_export_all.ts";

console.log("Addition: ", sum(5, 3));
console.log("Subtraction: ", sub(5, 3));
console.log("Value of PI: ", PI);