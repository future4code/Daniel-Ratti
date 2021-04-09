import { Request, Response } from "express";
import { generateId } from "./../services/idGenerator";
import { insertUser } from "./../models/insertUser";
import {
  AuthenticationData,
  generateToken,
  getTokenData,
} from "../services/authenticator";
import { compare, generateHash } from "../services/hashManager";
import { user } from "../types";
import { verifyEmail } from "../utilities/verifiers";
import { selectUserByEmail } from "../models/selectUserByEmail";
import { selectUserById } from "../models/selectUserById";

class UserController {
  async create(req: Request, res: Response) {
    const { name, email, password, role } = req.body;
    try {
      const id: string = generateId();

      if (!name) {
        res.statusCode = 422;
        throw new Error("Por favor informe o nome!");
      }

      if (!email) {
        res.statusCode = 422;
        throw new Error("Email invalido!");
      }

      verifyEmail(email);

      if (!password || password.length < 6) {
        res.statusCode = 422;
        throw new Error("A sua senha precisa ter mais que 6 caracters!");
      }

      const hashPassword: string = await generateHash(password);

      const newUser: user = {
        id: id,
        name: name,
        email: email,
        password: hashPassword,
        role: role || "NORMAL",
      };

      await insertUser(newUser);

      const token = generateToken(id, newUser.role);

      res.status(201).send({ message: "Usuário criado com sucesso", token });
    } catch (error) {
      res.send({
        message: error.message || error.sqlMessage,
      });
    }
  }

  async execute(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      if (!email) {
        res.statusCode = 422;
        throw new Error("Email invalido!");
      }

      verifyEmail(email);

      if (!password || password.length < 6) {
        res.statusCode = 422;
        throw new Error("A sua senha precisa ter mais que 6 caracters!");
      }

      const newUser = {
        email: email,
        password: password,
      };

      const user = await selectUserByEmail(newUser.email);

      if (!user) {
        res.statusCode = 404;
        throw new Error("Usuário não existe!");
      }

      const checkPassword = await compare(newUser.password, user.password);

      if (!checkPassword) {
        throw new Error("Senha Invalida!");
      }

      const token = generateToken(user.id, user.role);

      res.status(200).send({
        token,
      });
    } catch (error) {
      res.send({
        message: error.message || error.sqlMessage,
      });
    }
  }

  async show(req: Request, res: Response) {
    try {
      const token: string = req.headers.authorization as string;
      const tokenData: AuthenticationData = getTokenData(token);

      if (!token || !tokenData) {
        res.statusCode = 406;
        throw new Error("Este Token é invalido!");
      }

      const result = await selectUserById(tokenData.id);

      if (!result) {
        res.statusCode = 404;
        throw new Error("Usuario não encontrado!");
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

export { UserController };
