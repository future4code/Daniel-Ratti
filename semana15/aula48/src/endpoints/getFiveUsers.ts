import { Request, Response } from "express";
import selectFiveUsers from "../data/selectFiveUsers";

export default async function getFiveUsers(req: Request, res: Response) {
  let errorCode = 400;

  try {
    const users = await selectFiveUsers();

    if (!users.length) {
      res.statusCode = 404;

      throw new Error("Nenhuma informação encontrada!");
    }

    res.status(200).send(users);
  } catch (error) {
    res.status(errorCode).send(error.message || error.sqlMessage);
  }
}
