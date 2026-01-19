let fs = require("fs");
// /dev/stdin
let input = fs.readFileSync("ex.txt").toString().split("\n");

const cnt = Number(input[0]);
let result = cnt;

for (let i = 0; i < cnt; i++) {
  let check = "";
  let last = "";
  let crr = input[1 + i];
  for (let j = 0; j < crr.length; j++) {
    if (last !== crr[j] && check.includes(crr[j])) {
      result -= 1;
      break;
    }
    check += crr[j];
    last = crr[j];
  }
}
console.log(result);
