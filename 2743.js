let fs = require("fs");
// /dev/stdin
let input = fs.readFileSync("ex.txt").toString().trim();
console.log(input.length);
