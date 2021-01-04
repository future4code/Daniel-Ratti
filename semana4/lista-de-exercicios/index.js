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

// EXERCICIOS DE OBJETOS 

//1. Utilizamos arrays e objetos para organizar opções como uma lista.

//2.

// let criaRetangulo = (lado1, lado2) => {
//     let retornaObjeto = {
//         largura: lado1,
//         altura: lado2,
//         perímetro: 2*(lado1 + lado2),
//         área: (lado1*lado2)
//     }
//     return retornaObjeto
// }
// console.log(criaRetangulo(20,30));

//3.

// const filme = {
//     titulo: "Creed",
//     ano:2015,
//     diretor:"Ryan Coogler",
//     atores:[ "Michael B. Jordan", "Sylvester Stallone", "Tessa Thompson"]
// }
// console.log(`Venha assistir ao filme ${filme.titulo}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}`);

//4.

// const pessoa = {
//     nome: "Daniel Ratti",
//     idade: "21",
//     email: "danielpr55rr@gmail.com",
//     endereco: "Rua Mont Royal, Jardim Montreal Residence, Indaiatuba"
// }

// const anon = (pessoa) => {
//     pessoa.nome = "ANÔNIMO"
//     return pessoa.nome
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//EXERCICIOS FUNÇÕES DE ARRAY

//1.

// const pessoas = [
//     { nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]

// function returnAdults(array) {
//     const maiorDeidade = array.filter((maior) =>{
//         return maior.idade >= 20
//     }
//     )
//     return maiorDeidade
// }

// console.log(returnAdults(pessoas))

// function returnKids(array){
//     const menorDeIdade = array.filter((menor) => {
//         return menor.idade < 20
//     }
//     )
//     return menorDeIdade
// }
// console.log(returnKids(pessoas))

//2.

// const array = [1, 2, 3, 4, 5, 6]

// function returnDois (array){
//     const novo = array.map((mult)=>{
//         return mult*2
//     }
//     )
//     return novo
// }
// console.log(returnDois(array));


// function returnTres (array){
//     const novo2 = array.map((mult2)=>{
//         return `${mult2 * 3}`
//     }
//     )
//     return novo2
// }
// console.log(returnTres(array));

// function parOuImpar (array) {
//     const par = array.map((valor) =>
//         {
//             if(valor % 2 === 0)
//             {
//                 return `${valor} par`
//             }else{
//                 return `${valor} ímpar`
//             }
//         }
//     )
//     return par
// }

// console.log(parOuImpar(array))

//3.

// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]

// function podeEntrar(array){
//     const check = array.filter((valor) =>{
//         return valor.altura >= 1.5 && valor.idade > 14 && valor.idade < 60
//     }
//     )
//     return check
// }
// console.log(podeEntrar(pessoas));

// function naoPodeEntrar(array) {
//     const check2 = array.filter((valor) =>{
//         return valor.altura < 1.5 || valor.idade < 14 || valor.idade > 60
//     }
//     )
//     return check2
// }
// console.log(naoPodeEntrar(pessoas));

//4.
// const consultas = [
// 	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
// 	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
// 	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
// 	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
// ]

// const checkConsulta = (array) => {
//     const check = array.map ((elemento,) => {
//                 if (elemento.cancelada === false) {
//                     return `Olá, ${elemento.genero === 'masculino'? 'Sr.': 'Sra'} ${elemento.nome}. Estamos enviando esta mensagem para ${elemento.genero === 'masculino'? 'lembrá-lo': 'lembrá-la'} da sua consulta no dia ${elemento.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`
//                 }
//                 else if (elemento.cancelada === true) {
//                     return `Olá, ${elemento.genero === 'masculino'? 'Sr.': 'Sra' } ${elemento.nome}. Infelizmente, sua consulta marcada para o dia ${elemento.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`
//                 }        
//             }
//             )
//             return check
//         }
        
//         console.log(checkConsulta(consultas));

// const contas = [
// 	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
// 	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
// 	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
// 	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
// 	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
// 	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
// ]

// const saldoAtualizado = (array) =>{
//     contas.forEach((conta) => {
//         conta.compras.forEach((compra)=> {
//             conta.saldoTotal -=compra
//         }
//         )
//     }
//     )
//     return contas
// }
// console.log(saldoAtualizado(contas));