let fs = require("fs");
// /dev/stdin
let input = fs.readFileSync("ex.txt").toString().trim();

const str = input.toUpperCase().split("");
let checker = {};
let max = 0;
let result = "";

for (let i = 0; i < str.length; i++) {
  let crr = str[i];
  let cnt = !checker[crr] ? 1 : checker[crr] + 1;
  checker[crr] = cnt;
  if (max < cnt) {
    max = cnt;
    result = crr;
  } else if (max === cnt) {
    result += crr;
  }
}
console.log(result.length === 1 ? result : "?");
