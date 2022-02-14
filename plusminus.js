//let n = [1, -3, 5, 0, 2, -7];

function plusminus(n) {
  var positive = 0;
  var negative = 0;
  var zero = 0;
  var length = n.length;
  for (let i = 0; i < length; i++) {
    let x = n[i];
    if (x > 0) {
      positive += 1;
    } else if (x < 0) {
      negative += 1;
    } else {
      zero += 1;
    }
  }
  var FactOfPositive = positive / length;
  var FactOfNegative = negative / length;
  var FactOfZeros = zero / length;
  return {
    FactOfPositive,
    FactOfNegative,
    FactOfZeros,
  };
}
console.log(plusminus([1, -2, 3, -5, 0, 3]));
