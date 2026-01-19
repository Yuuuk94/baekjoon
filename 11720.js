let fs = require("fs");
// /dev/stdin
let input = fs.readFileSync("ex.txt").toString().split("\n");
const cnt = Number(input[0]);
let sum = 0;
for (let i = 0; i < cnt; i++) {
  sum += Number(input[1][i]);
}
console.log(sum);
