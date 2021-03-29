import { Request, Response } from "express";
import selectUserByType from "../data/selectUserByType";
import { user } from "../types/user";

export default async function getFiveUsers(req: Request, res: Response) {
  let errorCode = 400;

  try {
    const type: string = req.params.type as string;

    if (!type) {
      errorCode = 406;

      throw new Error("Por favor, informe um tipo!");
    } else {
      const users: user[] = await selectUserByType(type);

      if (!type.length) {
        errorCode = 404;

        throw new Error("Não encontramos nunhum usuário com o tipo informado!");
      }

      res.status(200).send(users);
    }
  } catch (error) {
    res.status(errorCode).send(error.message || error.sqlMessage);
  }
}
