import dayjs from "dayjs";
import { Request, Response } from "express";
import { selectAllRecipes } from "../models/selectAllRecipes";
import { getTokenData } from "../services/authenticator";
import { recipe } from "../types";

class FeedController {
  async show(req: Request, res: Response) {
    try {
      const token: string = req.headers.authorization as string;

      getTokenData(token);

      if (!token || !getTokenData) {
        res.statusCode = 406;
        throw new Error("Token invalido!");
      }

      const result = await selectAllRecipes();

      const recipes = result.map((item: recipe) => {
        return {
          id: item.id,
          title: item.title,
          description: item.description,
          createdAt: dayjs(item.created_at).format("DD/MM/YYYY"),
          userId: item.creator_id,
        };
      });

      res.status(200).send({
        recipes: recipes,
      });
    } catch (error) {
      res.status(400).send({
        message: error.message || error.sqlMessage,
      });
    }
  }
}

export { FeedController };
