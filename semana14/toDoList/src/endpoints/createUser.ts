import putUser from "../data/putUser";
import { Request, Response } from "express";

export default async function createUser(req: Request, res: Response) {
  try {
    const { name, nickname, email } = req.body;
    if (!name || !nickname || !email) {
      res.status(400).send("preencha os campos name, nickname, email !");
    }
    await putUser(name, nickname, email);
    res.status(201).send({ message: `Usuário ${name} criado com sucesso!` });
  } catch (error) {
    res.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
}