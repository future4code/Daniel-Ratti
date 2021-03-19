import { AddressInfo } from 'net';
import { checkAge, getTimestamp } from "./verifiers/verifiers";
import { user, users } from "./users/users";
import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/create", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const requestBody: user = {
      username: req.body.username,
      cpf: req.body.cpf,
      birthDate: req.body.birthDate,
      balance: 0,
      accinfo: [],
    };
    if (!requestBody.username || !requestBody.cpf || !requestBody.birthDate) {
      errorCode = 422;
      throw new Error("Ops! algum campo não esta válido , verifique os campos!");
    }

    if (!getTimestamp(req.body.birthDate)) {
      errorCode = 422;
      throw new Error("Erro! data invalida!");
    }

    const okAge: boolean = checkAge(req.body.birthDate);

    if (!okAge) {
      errorCode = 401;
      throw new Error("Você precisa ter 18 ou mais de 18 para criar uma conta");
    }

    if (users.find((user) => user.cpf === requestBody.cpf)) {
      throw new Error("CPF já cadastrado.");
    }

    users.push(requestBody);
    res.status(200).send("Usuário cadastrado.");
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.get("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    res.status(200).send(users);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.get("/users/:cpf", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const findUser = users.find((user) => user.cpf === req.params.cpf);
    if (!findUser) {
      errorCode = 422;
      throw new Error("CPF inválido");
    }

    res.status(200).send({ balance: findUser.balance });
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.put("/addToBalance", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const findUsername = users.find(
      (u) => u.username === req.body.username
    ) as user;
    const findUserCpf = findUsername.cpf === req.body.cpf;

    if (!findUsername || !findUserCpf) {
      errorCode = 422;
      throw new Error("Nome e/ou CPF inválido(s).");
    }

    findUsername.balance = findUsername.balance + Number(req.body.value);

    const addBalance = {
      value: Number(req.body.value),
      date: Date(),
      description: "Depósito em dinheiro.",
    };

    findUsername.accinfo.push(addBalance);

    res.status(200).send("Crédito enviado.");
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.log("Failure upon starting server.");
  }
});
