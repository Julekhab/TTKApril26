const { totalmem } = require("node:os");

function sum(param1, param2) {
    let total = param1 + param2
   // console.log("total is :", total);  
   return total;
}

function mult(param1, param2) {
    let multip = param1 * param2
   // console.log("Multiplication is :", mult);
    return multip
}

// let result = sum (3,4)
// console.log(result);
 console.log(mult(5,5));
 