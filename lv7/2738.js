let fs = require("fs");
// /dev/stdin
let input = fs.readFileSync("ex.txt").toString().trim().split("\n");

const cnt = input[0].split(" ");
const n = Number(cnt[0]);
const m = Number(cnt[1]);

let result = Array.from({ length: n }, () => Array(m).fill(0));
// 배열로 채우면 주소 공유됨

for (let i = 1; i <= n; i++) {
  const a = input[i].split(" ");
  const b = input[i + n].split(" ");
  for (let j = 0; j < m; j++) {
    result[i - 1][j] = Number(a[j]) + Number(b[j]);
  }
}

console.log(result.map((r) => r.join(" ")).join("\n"));
