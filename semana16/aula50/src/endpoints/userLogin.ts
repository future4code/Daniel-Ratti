import { Request, Response } from "express";
import { selectUserByLogin } from "../data/selectUserLogin";
import { generateToken } from "../services/authenticator";
import { login } from "../types/login";

export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  const input: login = {
    email: req.body.email,
    password: req.body.password,
  };

  try {
    if (!input.email || input.email.indexOf("@") === -1) {
      throw new Error("E-mail inválido!");
    }

    const user = await selectUserByLogin(input.email);

    if (!user) {
      res.statusCode = 404;

      throw new Error("Usuário não encontrado!");
    }

    if (!input.password || input.password.length < 6) {
      throw new Error("A senha deve conter mais de seis digitos!");
    }

    if (user.password !== input.password) {
      res.statusCode = 401;

      throw new Error("Senha inválida!");
    }

    const token = generateToken(user.id);

    res.status(200).send({ message: "Success", token });
  } catch (error) {
    res.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
}
