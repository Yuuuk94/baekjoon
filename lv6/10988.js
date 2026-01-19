let fs = require("fs");
// /dev/stdin
let input = fs.readFileSync("ex.txt").toString().trim().split("");
let result = 1;
const max = input.length;
for (let i = 0; i < max / 2; i++) {
  if (input[i] !== input[max - i - 1]) {
    result = 0;
    break;
  }
}
console.log(result);
