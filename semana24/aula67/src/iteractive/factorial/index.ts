export { }

const getFactorial = (integer: number) => {

   let result = 1

   for (let i = 1; i <= integer; i++) {
      result *= i
   }

   return result
}

console.log(getFactorial(3));
console.log(getFactorial(4));
console.log(getFactorial(5));
console.log(getFactorial(6));
