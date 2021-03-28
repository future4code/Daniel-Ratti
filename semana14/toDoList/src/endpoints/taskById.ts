import { Request, Response } from "express";
import moment from "moment";
import getTaskById from "../data/getTaskById";

export default async function taskById(req: Request, res: Response) {
  try {
    const taskId = req.params.id;

    const result = await getTaskById(taskId);

    if (!result) {
      res.status(400).send("id não encontrado");
    }

    res.status(200).send({
      ...result,
      limit_date: moment(result.limit_date,'YYYY-MM-DD').format('DD/MM/YYYY')
    });
  } catch (error) {
    res.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
}
