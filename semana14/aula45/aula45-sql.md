### Exercício 1
a. Altera a tabela "Actor", a coluna "Salary" será deletada.

b. Altera a tabela "Actor", ira alterar o nome da culuna'gender' 'sex', continuando com o maximo de 6 caracters.

c. Altera a tabela "Actor", a coluna voltara a ser chamada 'gender', mas tera o maximo de caracters aumentado para 255.

d.
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### Exercício 2
a.
```
UPDATE Actor
SET name = "FERNANDA MONTENEGRO", birth_date = '1929-10-19'
WHERE id = "003";
```

b.
```
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
```

c.
```
UPDATE Actor
SET name = "Jax Teller", salary = 300000, birth_date = '1999-01-03', gender = "male"
WHERE id = "005";
```

d.
```
UPDATE Actor
SET name = "Clay Morrow"
WHERE id = "666";

0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
Não ocorre nenhum erro, mas não houve nenhuma alteração pois o id "666" não existe.

### Exercício 3
a.
```
DELETE FROM Actor
WHERE name = "FERNANDA MONTENEGRO";
```

b. 
```
DELETE FROM Actor
WHERE gender = "male" AND salary > 1000000;
```

### Exercício 4
a. 
```
SELECT MAX(salary)
FROM Actor;
```

b. 
```
SELECT MIN(salary)
FROM Actor
WHERE gender = "female";
```

c. 
```
SELECT COUNT(*)
FROM Actor
WHERE gender = "female";
```

d. 
```
SELECT SUM(salary)
FROM Actor;
```

### Exercício 5
a. Essa query retorna a quantidade de atores de cada gênero.

b. 
```
SELECT id, name
FROM Actor
WHERE gender = "male"
ORDER BY name DESC;
```

c. 
```
SELECT *
FROM Actor
WHERE gender = "male"
ORDER BY salary;
```

d. 
```
SELECT *
FROM Actor
WHERE gender = "male"
ORDER BY salary DESC
LIMIT 3;
```

e. 
```
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;
```

### Exercício 6
a. 
```
ALTER TABLE Movie
ADD playing_limit_date DATE;
```

b. 
```
ALTER TABLE Movie
CHANGE rating rating FLOAT;
```

c. 
```
UPDATE Movie
SET playing_limit_date = "2021-03-23"
WHERE id = "001";

UPDATE Movie
SET playing_limit_date = "2021-03-23"
WHERE id = "002";
```

d. 
```
DELETE FROM Movie
WHERE id = "003";
```

### Exercício 7
a. 
```
SELECT COUNT(*)
FROM Movie
WHERE rating > 7.5;
```

b. 
```
SELECT AVG(rating)
FROM Movie;
```

c. 
```
SELECT COUNT(*)
FROM Movie
WHERE playing_limit_date > CURRENT_DATE;
```

d. 
```
SELECT COUNT(*)
FROM Movie
WHERE release_date > CURRENT_DATE;
```

e. 
```
SELECT MAX(rating)
FROM Movie;
```

f. 
```
SELECT MIN(rating)
FROM Movie;
```

### Exercício 8
a. 
```
SELECT *
FROM Movie
ORDER BY name;
```

b. 
```
SELECT *
FROM Movie
ORDER BY name DESC
LIMIT 5;
```

c. 
```
SELECT *
FROM Movie
WHERE playing_limit_date > CURRENT_DATE
ORDER BY release_date DESC
LIMIT 3;
```

d. 
```
SELECT *
FROM Movie
ORDER BY rating DESC
LIMIT 3;
```