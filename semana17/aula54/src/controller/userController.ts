import { Request, Response } from "express";
import {
  businessSignup,
  businessLogin,
  businessGetAllUsers,
  businessDeleteUser,
} from "../business/userBusiness";
import { loginInput } from "../model/user";

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role } = req.body;

    const newUser = {
      name: name,
      email: email,
      password: password,
      role,
    };

    const token = await businessSignup(newUser);

    res.status(200).send({
      message: "Usuario criado!",
      token,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const input: loginInput = {
      email: req.body.email,
      password: req.body.password,
    };

    const token = await businessLogin(input);

    res.status(200).send({
      message: "Usuario logado",
      token,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const token: string = req.headers.authorization as string;

    const users = await businessGetAllUsers(token);

    res.status(200).send({
      users: users,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const token: string = req.headers.authorization as string;

    const id: string = req.params.id as string;

    const requestData = {
      token: token,
      id: id,
    };

    await businessDeleteUser(requestData);

    res.status(200).send({
      message: "Usuario deletado!",
    });
  } catch (error) {
    res.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
};
