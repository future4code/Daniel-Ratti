// EXERC 1

// O codigo testa um  numero e imprime no console "passou no teste" se o numero for par e se for impar "nao passou no teste."

// EXERC 2

// a- O código serve para indicar os preços das frutas.
// b- O preço da fruta maça é R$ 2.25
// c- se retirarmos o break o preço ira aparecer como o preço do default que é 5.

//EXERC 3

// a- A primeira linha esta pedindo para o usuario digitar um numero.
// b- se o numero for maior que zero a resposta sera positiva, se o numero for negativo seria uma resposta negativa
// c- esta tendo um erro pois console.log(mensagem) esta fora do bloco / escopo.

// EXERC 4

// const perguntaIdade = Number(prompt("Qual a sua idade?"))
// const idade = 18

// if (perguntaIdade >= 18){
//     console.log("você pode dirigir")
// }

// else {
//     console.log("você não pode dirigir")
// }

//EXERC 5 

// const perguntaTurno = prompt("Qual periodo você estuda? M para matutino, V para vespertino ou N para noturno")

// if (perguntaTurno === "M") {
//     console.log("Bom dia!")
// }

// else if (perguntaTurno === "V") {
//     console.log("Bom tarde!")
// }

// else if (perguntaTurno === "N") {
//     console.log("Bom noite!")
// }

// else {
//     console.log("Coloque um turno válido!")
// }   


// EXERC 6

// const perguntaTurno = prompt("Qual periodo você estuda? M para matutino, V para vespertino ou N para noturno")

// switch (perguntaTurno) {
//     case "M":
//         console.log("Bom dia!")
//         break

//     case "V":
//         console.log("Boa tarde!")
//         break
    
//     case "N":
//         console.log("Boa noite!")
//         break

//     default:
//         console.log("Coloque um turno válido!")
//         break
// }

// EXERC 7

// const filme = prompt("Qual gênero de filme você irá assistir?")
// const ingresso = prompt("Quanto quer pagar no ingreso?")

// if (filme === "fantasia" && ingresso <= 15) {
//     console.log("Bom filme!")
// }

// else {
//     console.log("escolha outro filme :(")
// }

// DESAFIO 1

// const filme = prompt("Qual gênero de filme você irá assistir?")
// const ingresso = prompt("Quanto quer pagar no ingreso?")
// const snack = prompt ("Qual snack deseja comprar?")

// if (filme === "fantasia" && ingresso <= 15) {
//     console.log("Bom filme!")
//     console.log(`... com ${snack}`)
// }

// else {
//     console.log("escolha outro filme :(")
// }

// DESAFIO 2

// const nome = prompt("Qual o seu nome completo?")
// const tipoJogo = prompt("Qual o tipo do jogo? escreva IN para internacional ou DO para doméstico")
// const etapa = prompt ("Qual a etapa do jogo? SF para semi-final, DT pra decisão de terceiro lugar ou FI para final")
// const categoria = prompt ("Qual a categoria? entre 1, 2, 3 ou 4")
// const quantidade = prompt("Qual a quantidade de ingressos?")

// console.log("---Dados da compra---")
// console.log(`Nome do cliente: ${nome}`)

// if (tipoJogo === "DO"){
//     console.log("Tipo de jogo: Nacional")
// }

// else if (tipoJogo === "IN") {
//     console.log("Tipo de jogo: Internacional")
// }

