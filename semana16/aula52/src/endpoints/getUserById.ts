import { Request, Response } from "express";
import selectUserById from "../data/selectUserById";
import { AuthenticationData } from "../types/AuthenticationData";
import { getTokenData } from "../services/authenticator";

export default async function getUserById(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const token: string = req.headers.authorization as string;

    const authData: AuthenticationData = getTokenData(token);

    const user = await selectUserById(authData.id);

    if (!user) {
      res.statusCode = 404;

      throw new Error("Usuário não encontrado!");
    }

    res.status(200).send({
      message: "Success",
      id: user.id,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
}
