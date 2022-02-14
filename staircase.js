// function staircase(n) {
//   for (let i = 0; i <= n; i++) {
//     console.log("# ".repeat(n - i));
//   }
// }
// staircase(4);

// function staircase(n) {
//   for (let i = 0; i <= n; i++) {
//     console.log("".repeat(n - i) + "#".repeat(i));
//   }
// }
// staircase(4);

function staircase(n) {
  for (let i = 0; i < n; i++) {
    console.log(" ".repeat(n - 1 - i) + "#".repeat(i + 1));
  }
}
staircase(4);
