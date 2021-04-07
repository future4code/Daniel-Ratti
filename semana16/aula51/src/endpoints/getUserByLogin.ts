import { Request, Response } from "express";
import selectUserByLogin from "../data/selectUserLogin";
import { AuthenticationData } from "../types/AuthenticationData";
import { getTokenData } from "../services/authenticator";
import { USER_ROLES } from "../types/user";

export default async function getUserByLogin(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const token: string = req.headers.authorization as string;
    const authData: AuthenticationData = getTokenData(token);

    if (authData.role !== USER_ROLES.NORMAL) {
      res.statusCode = 401;

      throw new Error("Funcionalidade permitida somente para usuários NORMAL!");
    }

    const user = await selectUserByLogin(authData.id);

    if (!user) {
      res.statusCode = 404;

      throw new Error("Usuário não encontrado!");
    }

    res
      .status(200)
      .send({ message: "Success", id: user.id, email: user.email });
  } catch (error) {
    res.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
}
