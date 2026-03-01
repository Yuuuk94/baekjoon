let fs = require("fs");
// /dev/stdin
let input = fs.readFileSync("ex.txt").toString().trim().split("\n");

let result = "";
for (let i = 0; i < 15; i++) {
  const target = input.map((crr) => crr[i] || "").join("");
  if (target === "") break;
  result += target;
}

console.log(result);
