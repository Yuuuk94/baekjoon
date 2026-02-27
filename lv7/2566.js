let fs = require("fs");
// /dev/stdin
let input = fs.readFileSync("ex.txt").toString().trim().split("\n");

let max = 0;
let pointer = [0, 0];
for (let i = 0; i < input.length; i++) {
  const list = input[i].split(" ");
  for (let j = 0; j < list.length; j++) {
    const crr = Number(list[j]);
    if (max < crr) {
      max = crr;
      pointer = [i, j];
    }
  }
}

console.log(`${max}\n${pointer[0] + 1} ${pointer[1] + 1}`);
