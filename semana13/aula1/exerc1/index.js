const name = process.argv[2];
const age = Number(process.argv[3]);

if (name && age) {
  console.log('\x1b[36m%s\x1b[0m', `Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${age + 7}.`)
} else (
  console.log('\x1b[31m%s\x1b[0m', `Digite o seu nome e a sua idade`)
)