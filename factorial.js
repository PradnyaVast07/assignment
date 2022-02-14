function factorial(n) {
  let i = 1;
  let fact = 1;
  while (i <= n) {
    fact = fact * i;
    i = i + 1;
  }
  return "Factorial of " + n + "is:" + fact;
}
console.log(factorial(4));

function factorial(n) {
  let fact = 1;
  for (i = 1; i <= n; i++) {
    fact = fact * i;
  }
  console.log(fact);
}
factorial(4);
