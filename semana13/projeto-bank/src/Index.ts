import { AddressInfo } from "net";
import { checkAge, getTimestamp, today, findCpf } from "./verifiers/verifiers";
import { user, users, extract } from "./users/users";
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
      throw new Error(
        "Ops! algum campo não esta válido , verifique os campos!"
      );
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

app.put("/accinfo/deposit", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const findUsername = users.find(
      (user) => user.username === req.body.username
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
      description: "Depósito de dinheiro.",
    };

    findUsername.accinfo.push(addBalance);

    res.status(200).send("Crédito enviado.");
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

app.post("/accinfo/payment", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    if (!req.body.cpf || !Number(req.body.value)) {
      errorCode = 422;
      throw new Error(
        "Algum campo está inválido, por favor confira o CPF e valor digitado."
      );
    }

    const existingAccount: user | undefined = findCpf(req.body.cpf);

    if (!existingAccount) {
      errorCode = 404;
      throw new Error("A conta não existe!");
    } else if (existingAccount.balance < Number(req.body.value)) {
      throw new Error("Saldo insuficiente");
    } else {
      let date: any = req.body.date;

      if (!date) {
        date = today;
      } else if (!getTimestamp(date)) {
        throw new Error("Formato errado. Por favor siga o formato DD/MM/YYYY");
      } else {
        date = getTimestamp(date);
        if (date < today) {
          throw new Error("Essa data já passou.");
        }
      }

      const newPayment: extract = {
        value: Number(req.body.value),
        date: Date(),
        description: req.body.description || "",
      };

      existingAccount.accinfo.push(newPayment);

      res.status(202).send("Pagamento agendado com sucesso!");
    }
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
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
