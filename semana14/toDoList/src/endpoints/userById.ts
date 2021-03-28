import { Request, Response } from "express";
import getUserById from "../data/getUserById";

export default async function userById(req: Request, res: Response) {
  try {
    const user = await getUserById(req.params.id);
    if (!user) {
      res.status(404).send({
        message: "id de usuario não encontrado!",
      });
    }

    res.status(200).send({
      id: user.id,
      nickname: user.nickname,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
}
