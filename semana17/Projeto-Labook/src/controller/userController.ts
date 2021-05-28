import { Request, Response } from "express";
import { loginInputDTO } from "../model/user";
import { UserBusiness } from "../business/userBusiness";

const userBusiness: UserBusiness = new UserBusiness();

export class UserController {
  signup = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;

      const newUser = {
        name: name,
        email: email,
        password: password,
      };

      const token = await userBusiness.businessSignup(newUser);

      res.status(200).send({
        message: "User created successfully!",
        token,
      });
    } catch (error) {
      res.status(400).send({
        message: error.message || error.sqlMessage,
      });
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const input: loginInputDTO = {
        email: req.body.email,
        password: req.body.password,
      };

      const token = await userBusiness.businessLogin(input);

      res.status(200).send({
        message: "User logged in!",
        token,
      });
    } catch (error) {
      res.status(400).send({
        message: error.message || error.sqlMessage,
      });
    }
  };
}
