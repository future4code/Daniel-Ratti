# EXERCÍCIO 01

a)

Round é o cost, um valor para definir o tempo. Quanto maior o valor que damos ao cost, mais lento será a requisição. O salt é um dado aleatório gerado pelo bcrypt,quanto maior o round, maior sera o nivel de segurança.

# EXERCÍCIO 02

a)

O primeiro a ser modificado deve ser o cadastro, pois a senha criada será criptografada.

d)

Não é necessário modificar esse endpoint pois ele apenas mostra as informação de certo usuario.

# EXERCÍCIO 03

a)

```
ALTER TABLE User
ADD Role enum('NORMAL','ADMIN') DEFAULT 'NORMAL';
```
