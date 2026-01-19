let fs = require("fs");
// /dev/stdin
let input = fs.readFileSync("ex.txt").toString().split("\n");

const cnt = Number(input[0]);
for (let i = 1; i <= cnt; i++) {
  const string = input[i];
  console.log(string[0] + string[string.length - 1]);
}
