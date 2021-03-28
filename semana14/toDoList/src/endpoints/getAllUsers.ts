import { Request, Response } from "express";
import { getUsers } from "../data/getUsers";

export default async function getAllUsers(req: Request, res: Response) {
  try {
    const result = await getUsers();
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
}
