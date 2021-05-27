const getFactorial = ( // versão otimizada ("tail-call")
   integer: number,
   result: number = 1   // parâmetro acumulador
): number => {

   // caso base
   if (integer <= 1) return result

   // chamada recursiva
   return getFactorial(integer - 1, integer * result) 
}


console.log(getFactorial(5));   
//|_mesma coisa que -> getFactorial(4, 5)
   //  |_ mesma coisa que -> getFactorial(3, 20)
      //  |_ mesma coisa que -> getFactorial(2, 60)
         //  |_ mesma coisa que -> getFactorial(1, 120)
            //  |_ retorna 120


// implementação no navegador -> ../../../index.html
const input = document.querySelector("input")!
const span = document.querySelector("span")!

input.onchange = function (event: any) {
   span.innerHTML = String(getFactorial(event.target.value))
}