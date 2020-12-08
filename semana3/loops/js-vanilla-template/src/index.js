// EXERC 1

// O codigo esta realizando uma soma e o resultado é 10

//EXERC 2

//a- O codigo esta puxando apenas os números maiores que 18.


//EXERC 3

//a- 

// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// for (let numeros of array) {
//     console.log(numeros)
// }

//b- 

// let array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let novoArray = []

// for (let i = 0; i <array.length; i++) {

//     novoArray.push(array[i]/10)
//     console.log(novoArray[i])
// }

//c-

// let array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let novoArray = []

// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0){
//         novoArray.push(array[i])
//     }
    
// }
// console.log(novoArray)
//d-

// let array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let novoArray = []

// for (let i = 0; i < array.length; i++) {
//     novoArray.push(`O elemento do index ${i} é: ${array[i]}`)
// }
// console.log(novoArray)

//e-

// let array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let maior = 0
// let menor = array[0]

// for (let i=0; i < array.length; i++){
//   if (array[i]>maior){
//     maior=array[i]
//   }
//   if (array[i]<menor) {
//     menor=array[i]
//   }
// }
// console.log(`O maior número é ${maior} e o menor número é ${menor}`)

// DESAFIO 1.

// 0
// 00
// 000
// 0000

// DESAFIO 2

// let escolha = Number (prompt ("Escolha um número!"))
// console.log('Vamos jogar!');
// let chute = Number (prompt ("Chute um número até acertar!"))
// console.log(`O número chutado foi ${chute}`);
// let erro = 0

// while (chute !== escolha) {

//     erro+=1

//     if (chute < escolha) {
//         console.log(`Errou, o número escolhido é menor.O número chutado foi ${chute}`);
//     }
//     else if (chute > escolha) {
//         console.log(`Errou, o número escolhido é menor.O número chutado foi ${chute}`);
//     }

//     chute = Number (prompt ("Chute um número até acertar!"))

// }

// console.log(`O número de tentativas foi: ${erro}`);
// console.log("Parabéns você acertou!");

// DESAFIO 3

// const robot = Math.floor(Math.random() * 100) + 1;  
// console.log('Vamos jogar!');
// let chute = Number (prompt ("Chute um número até acertar!"))
// console.log(`O número chutado foi ${chute}`);
// let erro = 0

// while (chute !== robot) {

//     erro+=1

//     if (chute < robot) {
//         console.log(`Errou, o número escolhido é menor.O número chutado foi ${chute}`);
//     }
//     else if (chute > robot) {
//         console.log(`Errou, o número escolhido é maior.O número chutado foi ${chute}`);
//     }

//     chute = Number (prompt ("Chute um número até acertar!"))

// }

// console.log(`O número de tentativas foi: ${erro}`);
// console.log("Parabéns você acertou!");

// Ate descobrir como fazer foi dificil, mas depois entendi tranquilo, e tive que mudar algumas poucas coisas no codigo só.
// Nao consegui pensar em nada que poderia ter deixado o exercicio mais facil.
