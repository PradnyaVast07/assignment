arr = [2, 3, 1, 5, 8, 4];
function maxmin() {
  arr.sort(function (a, b) {
    return a - b;
  });
  //console.log(arr);
  let sum = 0;
  for (let i = 1; i < arr.length; i++) {
    sum = arr[i] + sum;
  }
  let sum1 = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    sum1 = arr[i] + sum1;
  }
  return `The minimum sum is ${sum1} and maxmium sum is ${sum}`;
}

let Result = maxmin();
console.log(Result);
