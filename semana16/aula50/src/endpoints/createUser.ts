import { Request, Response } from "express";
import { insertUser } from "../data/insertUser";
import { generateId } from "../services/idGenerator";
import { generateToken } from "../services/authenticator";
import { User } from "../types/user";

export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  const { email, password } = req.body;

  try {
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("E-mail inválido!");
    }

    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("A senha deve conter mais de seis digitos!");
    }

    const id: string = generateId();

    const newUser: User = {
      id: generateId(),
      email,
      password,
    };

    await insertUser(newUser);

    const token = generateToken({ id });

    res.status(200).send({ message: "Usuário criado com sucesso!", token });
  } catch (error) {
    res.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
}
