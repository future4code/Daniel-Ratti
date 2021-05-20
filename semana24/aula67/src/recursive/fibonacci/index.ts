const getFibonacciNumber = (
   integer: number
): number => {
   //caso base
   if (integer <= 2) return 1

   //chamada recursiva
   return getFibonacciNumber(integer - 1) + getFibonacciNumber(integer - 2)
}

console.log(getFibonacciNumber(-1));   // 1 (caso base)
console.log(getFibonacciNumber(0));    // 1 (caso base)
console.log(getFibonacciNumber(1));    // 1 (caso base)
console.log(getFibonacciNumber(2));    // 1 (caso base)
console.log(getFibonacciNumber(3));    // 2
console.log(getFibonacciNumber(4));    // 3
console.log(getFibonacciNumber(5));    // 5
console.log(getFibonacciNumber(6));    // 8

// console.log(getFibonacciNumber(90)); // quebra sem otimização

// versão otimizada:
// const getFibonacciNumber = (
//    integer: number,
//    previous: number = 1,
//    current: number = 1
// ): number => {
//    //caso base
//    if (integer <= 2) return current

//    //chamada recursiva
//    return getFibonacciNumber(
//       integer - 1,
//       current,
//       current + previous
//    )
// }

// console.log(getFibonacciNumber(6));
   // |_mesmo que -> getFibonacciNumber(5, 1, 2)
      // |_mesmo que -> getFibonacciNumber(4, 2, 3)
         // |_mesmo que -> getFibonacciNumber(3, 3, 5)
            // |_mesmo que -> getFibonacciNumber(2, 5, 8)
               // retorna 8