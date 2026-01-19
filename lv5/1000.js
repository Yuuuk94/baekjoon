let fs = require("fs");
// /dev/stdin
let input = fs.readFileSync("ex.txt").toString().split(" ");

let sum = 0;
for (let i = 0; i < input.length; i++) {
  let num = Number(input[i]);
  sum += num;
}
console.log(sum);
