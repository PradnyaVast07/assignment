function compareTriplets() {
  let a = [2, 2, 6];
  let b = [2, 3, 4];
  let apoint = 0;
  let bpoint = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      apoint = apoint + 1;
    } else if (a[i] < b[i]) {
      bpoint = bpoint + 1;
    } else if (a[i] == b[i]) {
      apoint = apoint + 1;
      bpoint = bpoint + 1;
    }
  }
  return `${apoint},${bpoint}`;
}
let result = compareTriplets();
console.log(result);
