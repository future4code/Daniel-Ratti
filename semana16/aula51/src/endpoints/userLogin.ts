import { Request, Response } from "express";
import selectUserByLogin from "../data/selectUserLogin";
import { generateToken } from "../services/authenticator";
import { login } from "../types/login";
import { compare } from "../services/hashManager";

export default async function createUser(req: Request, res: Response) {
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

    const passwordIsCorrect: boolean = await compare(
      input.password,
      user.password
    );

    if (!passwordIsCorrect) {
      res.statusCode = 401;

      throw new Error("Senha incorreta!");
    }

    const token = generateToken({
      id: user.id,
      role: user.role,
    });

    res.status(200).send({ message: "Success", token });
  } catch (error) {
    res.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
}
