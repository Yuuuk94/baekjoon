let fs = require("fs");
// /dev/stdin
let input = fs.readFileSync("ex.txt").toString().trim().split(" ");
const correct = [1, 1, 2, 2, 2, 8];
let result = Array(correct.length).fill(0);
for (let i = 0; i < input.length; i++) {
  let crr = Number(input[i]);
  let needCrr = correct[i];
  result[i] = needCrr - crr;
}
console.log(result.join(" "));
