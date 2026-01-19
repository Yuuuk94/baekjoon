# 백준 단계별 코딩테스트

// 문제
// Hello World!를 출력하시오.
// 입력
//
// 예제 출력
// Hello World!

//한 줄 입력
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let num = Number(input);

for (let i = 1; i <= num; i++) {
console.log(i);
}

//여러 줄 입력
let fs = require("fs");
let inputs = fs.readFileSync("/dev/stdin").toString().split("\n");

let count = inputs[0];
let numbers = [];

for (let i = 1; i < inputs.length; i++) {
if (inputs[i] !== "") {
numbers.push(inputs[i].split(" "));
}
}

for (let i = 0; i < numbers.length; i++) {
let num1 = Number(numbers[i][0]);
let num2 = Number(numbers[i][1]);

console.log(num1 + num2);
}
