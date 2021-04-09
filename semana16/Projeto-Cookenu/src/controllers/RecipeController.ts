import dayjs from "dayjs";
import { Request, Response } from "express";
import { insertRecipe } from "../models/insertRecipe.";
import { selectRecipeById } from "../models/selectRecipeById";
import { selectUserById } from "../models/selectUserById";
import { AuthenticationData, getTokenData } from "../services/authenticator";
import { generateId } from "../services/idGenerator";
import { recipe } from "../types";

class RecipeController {
  async create(req: Request, res: Response) {
    const { title, description } = req.body;
    const token = req.headers.authorization as string;
    const id: string = generateId();
    try {
      const tokenData: AuthenticationData = getTokenData(token);

      if (!token || !tokenData) {
        res.statusCode = 406;
        throw new Error("Este Token é invalido!");
      }

      const user = await selectUserById(tokenData.id);

      if (!user) {
        res.statusCode = 404;
        throw new Error("Usuário não encontrado!");
      }

      if (!title) {
        res.statusCode = 422;
        throw new Error("Por favor preencha um titulo para sua receita!");
      }

      const newRecipe: recipe = {
        id: id,
        title: title,
        description: description || "",
        created_at: dayjs().format("YYYY-MM-DD"),
        creator_id: user.id,
      };

      await insertRecipe(newRecipe);

      res.status(201).send({
        message: "Receita criada!",
      });
    } catch (error) {
      res.send({
        message: error.message || error.sqlMessage,
      });
    }
  }

  async show(req: Request, res: Response) {
    const id: string = req.params.id as string;
    try {
      if (!id) {
        res.statusCode = 422;
        throw new Error("Preencha seu ID!");
      }

      const token = req.headers.authorization as string;

      getTokenData(token);

      if (!token || !getTokenData) {
        res.statusCode = 406;
        throw new Error("Token Invalido!");
      }

      const result = await selectRecipeById(id);

      if (!result) {
        res.statusCode = 404;
        throw new Error("Usuario não encontrado!");
      }

      const user = await selectUserById(result.creator_id);

      const recipe = {
        id: result.id,
        title: result.title,
        description: result.description,
        createdAt: dayjs(result.created_at).format("DD/MM/YYYY"),
        creatorId: result.creator_id,
        creatorName: user.name,
      };

      res.status(200).send({ recipe: recipe });
    } catch (error) {
      res.status(400).send({
        message: error.message || error.sqlMessage,
      });
    }
  }
}

export { RecipeController };
