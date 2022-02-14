// function diagArr() {
//   const length = arr.length;
//   let dig1 = 0;
//   let dig2 = 1;
//   for (let i = 0; i < arr.length; i++) {
//     dig1 += arr[i][i];
//     dig2 += arr[arr.length - 1 - i][i];
//   }
//   return Math.abs(dig1 - dig2);
// }
// let Result = diagArr();
// console.log(Result);

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [8, 8, 9],
];

function diagonalDifference() {
  let sum = 0;
  for (var i = 0; i <= arr.length - 1; i++) {
    sum += arr[i][i] - arr[i].reverse()[i];
  }
  return Math.abs(sum);
}
console.log(diagonalDifference());
console.log(arr.length);
