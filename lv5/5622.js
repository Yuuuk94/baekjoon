let fs = require("fs");
// /dev/stdin
let input = fs.readFileSync("ex.txt").toString().trim();

const buffer = 1;
let phone = {
  2: "ABC",
  3: "DEF",
  4: "GHI",
  5: "JKL",
  6: "MNO",
  7: "PQRS",
  8: "TUV",
  9: "WXYZ",
};

let result = 0;
for (let i = 0; i < input.length; i++) {
  let crr = input[i];
  Object.entries(phone).forEach(([num, char]) => {
    if (char.includes(crr)) {
      result += Number(num) + buffer;
    }
  });
}
console.log(result);
