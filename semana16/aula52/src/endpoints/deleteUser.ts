import { Request, Response } from "express";
import { AuthenticationData } from "../types/AuthenticationData";
import { getTokenData } from "../services/authenticator";
import { USER_ROLES } from "../types/user";
import removeUser from "../data/removeUser";

export default async function deleteUser(req: Request, res: Response) {
  try {
    const id: string = req.params.id as string;

    const token: string = req.headers.authorization as string;

    const authData: AuthenticationData = getTokenData(token);

    if (authData.role !== USER_ROLES.ADMIN) {
      res.statusCode = 401;

      throw new Error("Funcionalidade permitida somente para usuários ADMIN!");
    }

    await removeUser(id);

    res.status(200).send("Usuário deletado com sucesso!");
  } catch (error) {
    res.send({
      message: error.message || error.sqlMessage,
    });
  }
}
