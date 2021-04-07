import { Request, Response } from "express";
import selectAllUsers from "../data/selectAllsusers";

export default async function getAllUsers(req: Request, res: Response) {
  try {
    const users = await selectAllUsers();

    if (!users.length) {
      res.statusCode = 404;

      throw new Error("Nenhum usuário encontrado!");
    }

    res.status(200).send(users);
  } catch (error) {
    console.log(error);

    res.send(error.message || error.sqlMessage);
  }
}
