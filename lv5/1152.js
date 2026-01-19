let fs = require("fs");
// /dev/stdin
let input = fs.readFileSync("ex.txt").toString().trim().trimStart();

const result = input === "" ? 0 : input.split(" ").length;
console.log(result);

// 첫 번째 소스 코드의 경우 공백만 입력되었을 때 0이 나와야하는데 1이 출력되어 틀린 경우다. (속상..ㅡㅠ)
// 공백을 입력하여 input.trim().split(' ')을 출력해보면 ['']이 출력된다.
// 이 때문에 1이 출력되는 것이다.
// 따라서 입력된 값이 ''인 경우를 제외하고 순수 단어만 갯수를 파악하여 출력하였다.
