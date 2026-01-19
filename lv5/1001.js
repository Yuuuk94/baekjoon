let fs = require("fs");
// /dev/stdin
let input = fs.readFileSync("ex.txt").toString().split(" ");

console.log(input[0] - input[1]);
