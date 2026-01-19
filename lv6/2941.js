let fs = require("fs");
// /dev/stdin
let input = fs.readFileSync("ex.txt").toString().trim();
const cAlphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
let str = input;
let result = 0;

for (let i = 0; i < cAlphabet.length; i++) {
  if (str.includes(cAlphabet[i])) {
    let crr = str.replaceAll(cAlphabet[i], " ");
    result +=
      (str.replaceAll(" ", "").length - crr.replaceAll(" ", "").length) /
      cAlphabet[i].length;
    str = crr;
  }
}

console.log(result + str.replaceAll(" ", "").length);
