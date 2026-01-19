let fs = require("fs");
// /dev/stdin
let input = fs.readFileSync("ex.txt").toString().trim();
const cnt = Number(input);
const maxSpace = (cnt - 1) * 2 + 1;
const maxLenth = cnt * 2 - 1;
let space = Array(maxLenth).fill("");

for (let i = 0; i < cnt; i++) {
  let need = i * 2 + 1;
  let star = "*".repeat(need);
  let empty = " ".repeat((maxSpace - need) / 2);
  let str = empty + star;
  space[i] = str;
  if (maxLenth - i > cnt) {
    space[maxLenth - i - 1] = str;
  }
}

console.log(space.join("\n"));
