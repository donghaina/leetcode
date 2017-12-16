/**
 * @param n: an integer
 * @return: an ineger f(n)
 */
const fibonacci = function (n) {
  var fibonacciArr = [];
  fibonacciArr[0] = 0;
  fibonacciArr[1] = 1;
  var i=2;
  for(i;i<n;i++){
    fibonacciArr[i]=fibonacciArr[i-1]+fibonacciArr[i-2];
  }
  console.log(fibonacciArr);
  return fibonacciArr[n-1];
};

console.log(fibonacci(3));