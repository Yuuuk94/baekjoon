let fs = require("fs");
// /dev/stdin
let input = fs.readFileSync("ex.txt").toString().trim();
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const result = Array(alphabet.length).fill(-1);
for (let i = 0; i < input.length; i++) {
  const idx = alphabet.findIndex((a) => a === input[i]);
  if (idx >= 0 && result[idx] === -1) {
    result[idx] = i;
  }
}
console.log(result.join(" "));

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

// let resultArr = [];
// let result = '';

// for (let i = 97; i <= 122; i++) {
//   let alphabet = String.fromCharCode(i);

//   for (let j = 0; j < input.length; j++) {
//     resultArr.push(input[j].indexOf(alphabet));
//   }
// }

// result = resultArr.join(' ');
// console.log(result);
