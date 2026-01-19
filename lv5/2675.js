let fs = require("fs");
// /dev/stdin
let input = fs.readFileSync("ex.txt").toString().split("\n");

const cnt = Number(input[0]);

for (let i = 1; i <= cnt; i++) {
  let crr = input[i].split(" ");
  let repeat = Number(crr[0]);
  let str = crr[1];
  let result = "";
  for (let j = 0; j < str.length; j++) {
    result += Array(repeat).fill(str[j]).join("");
  }
  console.log(result);
}
