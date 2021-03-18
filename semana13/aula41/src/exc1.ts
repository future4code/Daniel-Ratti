// a) 
const minhaString : string = "Daniel"; //tentando atribuir um tipo number recebemos um erro, pois não é possível atribuir um number à uma variável definida como string

// b) 
const meuNumero : number = 1; 
//para fazer com que a variavel acima possa também receber uma string, usamos a sintaxe de union type:
const meuNumero2 : number | string = "1"

// c)
const objPessoa : {nome: string, idade: number, corFavorita: string} = {
    nome: "Pessoa",
    idade: 43,
    corFavorita: "preto"
}


// d)
 enum CoresArcoIris {
    VIOLETA = "Violeta",
    ANIL = "Anil",
    AZUL = "Azul",
    VERDE = "Verde",
    AMARELO = "Amarelo",
    LARANJA = "Laranja",
    VERMELHO = "Vermelho"
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: CoresArcoIris
}

const daniel : pessoa = {
    nome: "Daniel",
    idade: 21,
    corFavorita: CoresArcoIris.AMARELO
}

const jose : pessoa = {
    nome: "Jose",
    idade: 20,
    corFavorita: CoresArcoIris.AZUL
}

const luan : pessoa = {
    nome: "Luan",
    idade: 21,
    corFavorita: CoresArcoIris.VERMELHO
}