const printCharacters = (
   text: string,
   index: number = 0
): void => {

   // caso base
   if (index === text.length ) return

   // lógicas
   console.log(text[index])

   // chamada recursiva
   printCharacters(text, index + 1)
}

printCharacters("Oi, Epps!")