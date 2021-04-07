import getResponsible from "../data/getResponsible";
import { Request, Response } from "express";

export default async function getResponsibleById(req: Request, res: Response) {
  try {
    const user_id: string = req.query.creatorUserId as string;
    if (!req.query.creatorUserId) {
      res.status(400).send("id invalido!");
    }
    const result = await getResponsible(user_id);
    if (!result) {
      res.status(400).send("esse usuario não criou nenhuma tarefa!");
    }
    res.status(200).send({ result });
  } catch (error) {
    res.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
}
