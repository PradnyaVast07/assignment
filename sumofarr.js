let arr = [1, 2, 3, 4, 10, 11];
function simpleArraySum() {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
let result = simpleArraySum();
console.log(result);
