let fs = require("fs");
// /dev/stdin
let input = fs.readFileSync("ex.txt").toString().trim().split(" ");

let a = "";
let b = "";
for (let i = 2; i > -1; i--) {
  a += input[0][i];
  b += input[1][i];
}
let result = Number(a) > Number(b) ? a : b;
console.log(result);
