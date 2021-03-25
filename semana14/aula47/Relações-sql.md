## Exercicio 1

a)Chave estrangeira é uma chave utilizada para relacionar duas tabelas.

b)

```
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating
VALUES('001', 'Legal mas nunca assisti', 7, '001'),
	  ('002', 'muito bom, nota 0', 0, '002'),
	  ('003', 'não faço ideia', 3, '003'),
	  ('004', 'Melhor filme brasileiro, fato', 10, '004');
```

c)

```
Código de erro: 1452. Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha (`epps-daniel-ratti` Rating`, CONSTRAINT` Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES` Movie` (` id`) ).
```

O erro diz que não se pode adicionar ou atualizar uma linha filha. E que não foi possivel acessar a chave estrangeira.

d)

```
ALTER TABLE Movie DROP COLUMN rating;
```

e) Não é possível adicionar ou atualizar um item pai.

```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`epps-daniel-ratti`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
```

## Exercício 2

a) A tabela guarda as informações dos filmes e atores juntas.

b)

```
CREATE TABLE MovieCast (
	movie_id INT,
    actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES
	("001", "002"),
	("002", "001"),
	("003", "003"),
	("004", "004"),
	("003", "005");
```

c) Ocorreu o erro porque não existe o id informado na tabela Actor no qual tentamos relacionar ao id na tabela Movies.

d) Ocorreu o erro porque tentamos apagar um id que esta relacionado a outro id na tabela MovieCast.

## Exercício 3

a) o operador ON é oque associa que o campo Movie.id seja igual Rating.movie_id.

b)

```
SELECT Movie.id as movie_id, r.rate as rating FROM Movie
INNER JOIN Rating r ON Movie.id = r.movie_id;
```

## Exercício 4

a)

```
SELECT Movie.id as movie_id, Movie.name, r.rate as rating, r.comment as rating_comment
FROM Movie
LEFT JOIN Rating r ON Movie.id = r.movie_id;
```

b)

```
SELECT Movie.id as movie_id, Movie.name, mc.actor_id FROM Movie
RIGHT JOIN MovieCast mc ON mc.movie_id = Movie.id;
```

c)

```
SELECT AVG(r.rate), Movie.id, Movie.name from Movie
LEFT JOIN Rating r on Movie.id = r.movie_id
GROUP BY (Movie.id);
```

## Exercício 5

a) Usamos o JOIN para evitar dados duplicados.

b)

```
SELECT Movie.id as movie_id, Movie.name, a.id as actor_id, a.name FROM Movie
LEFT JOIN MovieCast mc ON Movie.id = mc.movie_id
Join Actor a ON a.id = mc.actor_id;
```

c)

```
SELECT
	Movie.id as movie_id,
    Movie.name,
    a.id as actor_id,
    a.name,
    r.rate,
    r.comment
FROM Movie
LEFT JOIN Rating r on r.movie_id = Movie.id
LEFT JOIN MovieCast mc ON Movie.id = mc.movie_id
Join Actor a On a.id = mc.actor_id;
```

## Exercício 6
