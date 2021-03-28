import { Request, Response } from "express";
import updateUser from "../data/updateUser";

export default async function updateUserById(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const { name, nickname } = req.body;
    if (name === "" || nickname === "") {
      res.status(400).send({
        message: "Os campos não podem estar vazios!",
      });
    }
    await updateUser(id, name, nickname);
    res.status(201).send({ message: `Usuário ${name} atualizado!` });
  } catch (error) {
    res.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
}
