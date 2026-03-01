let fs = require("fs");
// /dev/stdin
const [cnt, ...arr] = fs
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

const solution = () => {
  const tatalArr = Array.from({ length: 100 }, () => Array(100).fill(0)); // 도화지 전체크기
  const numArr = arr.map((d) => d.split(" ").map((v) => parseInt(v))); // 색종이 정보
  let result = 0;
  console.log(numArr);

  for (let i = 0; i < cnt; i++) {
    // 색종이 갯수만큼 루프 돌리고
    const row = numArr[i][0]; // 각각 색종이 정보에서 첫 점 정보를 가져온다. 1
    const cell = numArr[i][1]; // 각각 색종이 정보에서 첫 점 정보를 가져온다. 2
    for (let j = row; j < row + 10; j++) {
      // 그 점들을 도화지에다가 너비만큼 찍는다 (10 * 10)
      for (let k = cell; k < cell + 10; k++) {
        if (tatalArr[j][k]) continue; // 이미 찍은 부분은 넘어가고
        tatalArr[j][k]++; // 안직은 부분만 1을 추가해주면 중복 피할 수 있다.
        result++; // 여기서 바로 result도 같이 더해줘서 답을 구할 수 도 있고.
      }
    }
  }
  console.log(result);
};

solution();
