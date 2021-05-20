export { }

const printCharacters = (
   text: string
): void => {
   for (let char of text) 
      console.log(char)
}

printCharacters("Hello, Epps!")