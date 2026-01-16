const fs = require("fs");
const input = fs.readFileSync("ex.txt").toString().split("\n");

for (let i = 0; i < input.length; i++) {
  console.log(typeof input[i], input[i]);
}
