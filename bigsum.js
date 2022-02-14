function arrfun(arr1) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum = sum + arr1[i];
  }
  return sum;
}
let Result = arrfun([10, 20, 13, 5, 18, 15]);
console.log(Result);
