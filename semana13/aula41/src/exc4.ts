// a)
// para transpilar o esse arquivo para .js basta rodar o comando tsc nome-do-arquivo.ts
type pokemon = {
	name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// b) se estivesse numa pasta src, o processo seria o mesmo. basta rodar tsc nome-do-arquivo.ts

// c) Para transpilar múltiplos arquivos rodamos o comando tsc e em seguida os nomes dos arquivos separados por espaço ou o comando tsc, na pasta raíz, sem parâmetros para converter todos os arquivos .ts encontrados

// d)
// target de es5 para es6
// outDir de ./ para ./build
// rootDir de ./ para ./src