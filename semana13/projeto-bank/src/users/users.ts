 export type user = {
  username: string,
  cpf: string,
  birthDate: string,
  balance: number,
  accinfo: extract[]
}

export type extract = {
  value: number,
  date: string,
  description: string
}

 export const users: user[] = [
  {
      username: "Daniel",
      cpf: "3764360897",
      birthDate: "01/03/1999",
      balance: 10,
      accinfo: []
  }
]

