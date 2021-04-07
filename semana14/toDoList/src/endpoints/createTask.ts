import { Request, Response } from "express";
import putTask from "../data/putTask";

export default async function createTask(req: Request, res: Response) {
  try {
    const { title, description, limitDate, creatorUserId } = req.body;

    const [day, month, year] = limitDate.split("/");

    const formatLimitDate: Date = new Date(`${year}-${month}-${day}`);

    if (!title || !description || !formatLimitDate || !creatorUserId) {
      res.status(400).send("preencha todos os campos!");
    }

    await putTask(title, description, formatLimitDate, creatorUserId);

    res.status(200).send(`tarefa ${title} criada !`);
  } catch (error) {
    res.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
}
