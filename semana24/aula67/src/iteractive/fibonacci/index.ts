export { }

const fibonacciNumbers: number[] = [0, 1, 1]

const getFibonacciNumber = (
   integer: number
): number => {


   while (fibonacciNumbers.length <= integer) {
      let index = fibonacciNumbers.length

      fibonacciNumbers[index] = fibonacciNumbers[index - 1] + fibonacciNumbers[index - 2]
   }

   return fibonacciNumbers[integer]
}

console.log(getFibonacciNumber(1));
console.log(getFibonacciNumber(2));
console.log(getFibonacciNumber(3));
console.log(getFibonacciNumber(4));
console.log(getFibonacciNumber(5));
console.log(getFibonacciNumber(6));
console.log(getFibonacciNumber(7));