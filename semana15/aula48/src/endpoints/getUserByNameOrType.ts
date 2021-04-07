import { Request, Response } from "express";
import selectUserByNameOrType from "../data/selectUserByNameOrType";

export default async function getFiveUsers(req: Request, res: Response) {
  let errorCode = 400;

  try {
    const orderBy = req.params.orderBy as string;

    const users = await selectUserByNameOrType(orderBy);

    if (!users.length) {
      res.statusCode = 404;

      throw new Error("Nenhuma informação encontrada!");
    }

    res.status(200).send(users);
  } catch (error) {
    res.status(errorCode).send(error.message || error.sqlMessage);
  }
}
