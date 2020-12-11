//INTERPRETAÇÃO DE CÓDIGO

//1. Esta fazendo a conversão de real para dolar.

//2. É uma função para escolher um tipo de carteira de investimento,
// ele recebe um tipo e um valor e multiplica por um valor ja definido.
// o primero logo esta fazendo a multiplicaçao dos valores e da o resultado,
// ja o segundo log da "tipo de ivestimento incorreto" pois tesouro direto não,
// é um tipo de investimento.

//3. o array1 esta guardando somente os numeros pares e o array2 os numeros impares,
// os 3 consoles.log estao mostrando a quantidade total de numeros e o tamanho do array1 e 2.

//4. O console.log(numero1) retorna o menor numero do array: -10 e o conle.log(numero2) retorna o maior numero do array.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EXERCICIOS LÓGICA DA PROGAMAÇÃO

//1.
// for, for of, for each

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for(let i= 0; i < array.length; i++){
//     console.log(array[i]);
// }

// for(numeros of array){
//     console.log(numeros);
// }

// array.forEach(elemento => {
//     console.log(elemento);
// })

//2.

//a. False
//b. False
//c. True
//d. True
//e. True

//3.

// const quantidadeDeNumerosPares = 3
// let i = 0
// while(i <= quantidadeDeNumerosPares*2-1) {
//     if ( i % 2 === 0){
//      console.log(i)
//      i+=1
//     }
//     else {
//         i+=1
//     }
// }

//4.

// function triangulo (a, b, c){
//     let resultado = ""

//     if(a === b && a === c && b === c){
//         resultado = "Equilátero"
//     }
//     else if(a === b || a === c || b === c ){
//         resultado = "Isósceles"
//     }else {
//         resultado = "Escaleno"
//     }

//     return resultado
// }

//5.

// const numero1 = 20
// const numero2 = 10

// let maiorNumero = 0
// let diferenca = (numero1 - numero2)

// if(numero1 > numero2){
//     maiorNumero = numero1
//     console.log(`O maior número é: ${maiorNumero}`);
// }else {
//     maiorNumero = numero2
//     console.log(`O maior número é: ${maiorNumero}`);
// }

// if(numero1 % numero2 === 0){
//     console.log(`${numero1} é divisivel por ${numero2}`);
// }else{
//     console.log(`${numero1} não é divisivel por ${numero2}`);
// }

// if(diferenca < 0){
//     diferenca *= -1
// }
// console.log(`A diferença entre eles é: ${diferenca}`);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//EXERCICIOS DE FUNÇÕES

//1.

// const array = [1, 3, 4, 5, 6, 7, 8, 9, 10]

// function  

//2.

// const alerta = () =>{
//     return alert("Hello labenu!")
// }
// alerta ()