arr = [10, 4, 2, 1, 6, 7];

function birthdayCakeCandles() {
  //let max = 0;
  let count = 0;
  maxsum = Math.max(...arr);
  //console.log(maxsum);
  //max = maxsum;
  for (let i = 0; i < arr.length; i++) {
    if (maxsum == arr[i]) {
      count = count + 1;
    }
  }
  return `The maximum no is ${maxsum} and is repeted ${count}`;
}
let Result = birthdayCakeCandles();
console.log(Result);
