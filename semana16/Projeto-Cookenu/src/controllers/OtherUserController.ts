import { Request, Response } from "express";
import { getTokenData } from "../services/authenticator";
import { selectUserById } from "../models/selectUserById";

class OtherUserController {
  async show(req: Request, res: Response) {
    const id: string = req.params.id as string;
    try {
      if (!id) {
        res.statusCode = 422;
        throw new Error("Preencha seu ID!");
      }

      const token = req.headers.authorization as string;

      getTokenData(token);

      if (!token || !getTokenData) {
        res.statusCode = 406;
        throw new Error("Este Token é invalido!");
      }

      const result = await selectUserById(id);

      if (!result) {
        res.statusCode = 404;
        throw new Error("Usuário não encontrado!");
      }

      const user = {
        id: result.id,
        name: result.name,
        email: result.email,
      };

      res.status(200).send({
        user: user,
      });
    } catch (error) {
      res.status(400).send({
        message: error.message || error.sqlMessage,
      });
    }
  }
}

export { OtherUserController };
