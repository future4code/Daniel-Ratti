```sh
CREATE TABLE Actor (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
```

## Exercício 1

A)
VARCHAR(255) : limite de 255 caracteres.
PRIMARY KEY : representa os identificadores únicos daquela tabela.
NOT NULL : o campo não pode estar vazio.
DATE : data em formato YYYY/MM/DD.
VARCHAR(6) : limite de 6 caracteres.

B) SHOW DATABASE : mostra todos os bancos de dados disponíveis.
SHOW TABLES nos mostra as tabelas disponíveis.

C) DESCRIBE : Mostra as informações de cada coluna.

