let fs = require("fs");
// /dev/stdin
let input = fs.readFileSync("ex.txt").toString().trim().split("\n");

let cnt = 0;
let pointSum = 0;

const map = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

for (let i = 0; i < input.length; i++) {
  let [_, r, rank] = input[i].trim().split(/\s+/);
  let rating = parseFloat(r);
  if (rank === "P") {
    continue;
  } else if (rank !== "F") {
    let point = map[rank];
    pointSum += point * rating;
  }
  cnt += rating;
}

console.log((pointSum / cnt).toFixed(6));
