import express, { Request, Response } from "express";
import cors from "cors";
import { users, user } from "./usersList";
import { AddressInfo } from "net";

const app = express();

app.use(cors());

//exc1
// a) GET.
// b) a entidade é o users

app.get("/user/all", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const result: user[] = users;

    res.status(200).send(result);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

//exc2
// a) passei por queryparams.
// b) sim

app.get("/user/search", (req: Request, res: Response) => {
  let errorCode: number = 400;
  const validOnes = ["ADMIN", "NORMAL"];

  try {
    const searchQuery: string = (req.query.type as string).toUpperCase();

    if (!validOnes.includes(searchQuery)) {
      throw new Error("Query inválido.");
    }

    const result: user[] = users.filter((user) => {
      return user.type.toUpperCase() === searchQuery;
    });

    res.status(200).send(result);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

//exc3
// a) query params
app.get("/user/search", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const name: string = req.query.nome as string;

    if (!name) {
      errorCode = 422;
      throw new Error("Nome inválido.");
    }

    const myUser = users.find(
      (u: user) => u.name.toLowerCase() === name.toLowerCase()
    );

    if (!myUser) {
      errorCode = 404;
      throw new Error("Usuário não encontrado");
    }

    const result = myUser;

    res.status(200).send(result);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

//exc4
// a) ele altera as informaçoes do usuario.
// b) não, porque ele edita usuarios em vez de criar.
app.post("/user/create", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const newUser: user = {
      id: Date.now(),
      name: req.body.name,
      email: req.body.email,
      type: req.body.type,
      age: req.body.age,
    };

    if (!newUser.age || !newUser.email || !newUser.type || !newUser.name) {
      errorCode = 422;
      throw new Error("Algum campo está inválido. Preencha corretamente.");
    }

    users.push(newUser);

    res.status(200).send({ message: "Usuário inserido com sucesso!" });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

//exc5
app.put("/user/edit/:id", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const reqBody: { id: number; name: string } = {
      id: Number(req.params.id),
      name: req.body.name,
    };

    if (!reqBody.name) {
      errorCode = 422;
      throw new Error("Nome inválido. Preencha corretamente.");
    }

    if (isNaN(Number(reqBody.id))) {
      errorCode = 422;
      throw new Error("Id inválido");
    }

    const myUserIndex = users.findIndex(
      (u: user) => u.id === Number(reqBody.id)
    );

    if (myUserIndex === -1) {
      errorCode = 404;
      throw new Error("Usuário não encontrado");
    }

    users[myUserIndex].name = reqBody.name;

    res.status(200).send({ message: "Usuário atualizado com sucesso!" });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

//exc6
app.patch("/user/patch/:id", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const reqBody: { id: number; name: string } = {
      id: Number(req.params.id),
      name: req.body.name,
    };

    if (!reqBody.name) {
      errorCode = 422;
      throw new Error("Nome inválido. Preencha corretamente.");
    }

    if (isNaN(Number(reqBody.id))) {
      errorCode = 422;
      throw new Error("Id inválido");
    }

    const myUserIndex = users.findIndex(
      (u: user) => u.id === Number(reqBody.id)
    );

    if (myUserIndex === -1) {
      errorCode = 404;
      throw new Error("Usuário não encontrado");
    }

    users[myUserIndex].name = reqBody.name;

    res.status(200).send({ message: "Usuário atualizado com sucesso!" });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

//exc7
app.delete("/user/delete/:id", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const userIndex: number = users.findIndex(
      (u) => u.id === Number(req.params.id)
    );

    if (userIndex === -1) {
      errorCode = 404;
      throw new Error("Usuario não encontrado");
    }

    users.splice(userIndex, 1);

    res.status(200).send({ message: "Usuário deletado" });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
