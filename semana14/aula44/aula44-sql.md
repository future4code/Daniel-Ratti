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
SHOW TABLES : mostra as tabelas disponíveis.

C) DESCRIBE : Mostra as informações de cada coluna.

## Exercício 2

A)

```sh
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
"002",
"Glória Pires",
1200,
"1963-08-23",
"female"
);
```

B)

```sh
Código de erro: 1062. Entrada duplicada '001' para a chave 'PRIMARY'
```

O erro ocorre pois setamos o id como PRIMARY KEY.

C)

```sh
Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1
INSERT INTO Actor (id, name, salary)
VALUES(
  "003",
  "Fernanda Montenegro",
  300000,
  "1929-10-19",
  "female"
);
```

faltam algumas colunas que não foram citadas

```sh
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003",
  "Fernanda Montenegro",
  300000,
  "1929-10-19",
  "female"
);
```

D)

```sh
Código de erro: 1364. O campo 'nome' não tem um valor padrão
INSERT INTO Actor (id, salary, birth_date, gender)
 VALUES(
   "004",
   400000,
   "1949-04-18",
   "male"
 )	Error Code: 1364. Field 'name' doesn't have a default value	0.156 sec
```

o name está definido como NOT NULL ou seja não pode estar vazio.

```sh
INSERT INTO Actor (id,name, salary, birth_date, gender)
VALUES(
  "004",
  "JAX TELLER",
  400000,
  "1949-04-18",
  "male"
);
```

E)

```sh
Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1
INSERT INTO Actor (id, name, salary, birth_date, gender)
 VALUES(
   "005",
   "Juliana Paes",
   719333.33,
   1979-03-26,
   "female"
 )	Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1	0.156 sec
```

O date deve ser do formato YYYY/MM/DD em string.

F) criar mais 2 atores.

```sh
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "Sons of Anarchy",
  "opie",
  400000,
  "1949-04-18",
  "male"
);
```

## Exercício 3

A)

```sh
SELECT * FROM Actor WHERE gender="female";
```

B)

```sh
SELECT salary FROM Actor WHERE name="Tony Ramos";
```

C)

```sh
SELECT * FROM Actor WHERE gender="invalid";
```

a tabela veio como NULL.

D)

```sh
SELECT id,name,salary FROM Actor WHERE salary>=500000;
```

E)

```sh
Código de erro: 1054. Desconhecido coluna 'nome' em 'fields'.
```

O certo seria a coluna name e não nome.

```sh
SELECT id, name from Actor WHERE id = "002"
```

## Exercício 4

```sh
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
```

A) Está retornando os nomes que começa com A ou J e salários acima de 300000.

B)

```sh
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000
```

C)

```sh
SELECT * FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%"
```

D)

```sh
SELECT * FROM
WHERE (name LIKE "%a%" or name LIKE "%A%" or name LIKE "%G%" or name LIKE "%g%") AND salary BETWEEN 350000 AND 900000
```

## Exercício 5

A)

```sh
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR (255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);
```

B)

```sh
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "001",
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06",
  7
);
```

C)

```sh
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "002",
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27",
  10
);
```

D)

```sh
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "003",
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02",
  8
);
```

E)

```sh
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "004",
  "Tropa de Elite",
  "O capitão do BOPE do rio de janeiro decide se aposentar e tentar econtrar o seu substituto, e acaba por treinar os policias militares neto e matias para descobrir quem será seu sucessor.",
  "2007-10-05",
  9
);
```
 
## Exercício 6

A)

```sh
SELECT id, title, rating FROM Movie WHERE id="004"
```

B)

```sh
SELECT * FROM Movie WHERE title="Tropa de Elite"
```

C)

```sh
SELECT id, title, synopsis FROM Movie WHERE rating>=7
```

## Exercício 7

A)

```sh
SELECT * FROM Movie WHERE title LIKE "%vida%"
```

B)

```sh
SELECT * FROM Movie WHERE title LIKE "%elite%" OR synopsis LIKE "%janeiro%"
```

C)

```sh
SELECT * FROM Movie WHERE release_Date < "2021-03-22"
```

D)

```sh
SELECT * FROM Movie WHERE release_Date < "2021-03-22" AND (title LIKE "%elite%" or synopsis LIKE "%janeiro%") and rating>7;
```
