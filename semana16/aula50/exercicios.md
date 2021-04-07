# EXERCÍCIO 01

a)

Sim, pois uma string pode conter números e letras juntos, tornando assim o token mais seguro.

b)

```
import { v4 } from 'uuid'
export function generate(): string {
    return v4()
}
```

# EXERCÍCIO 02

a)

O userTableName está chamando a tabela 'User'.

A connection é referente aos dados de acceso ao banco que dados que estão guardados no .env.

A query createUser está inserindo na tabela 'User' id, email e password.

b)

```
CREATE TABLE User (
		id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

# EXERCÍCIO 03

a)

as string está definindo que que o valor recebido será uma string.

# EXERCÍCIO 07

a)

o as any indica que pode ser passado qualquer valor.

b)

```
   export const getTokenData = (token: string): AuthenticationData => {
  return jwt.verify(token, process.env.JWT_KEY as string) as AuthenticationData;
};
```
