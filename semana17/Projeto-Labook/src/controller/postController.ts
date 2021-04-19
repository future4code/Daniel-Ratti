import { Request, Response } from "express";
import { postInputDTO } from "../model/post";
import { PostBusiness } from "../business/postBusiness";
import { PostDatabase } from "../data/postDatabase";

const postDatabase: PostDatabase = new PostDatabase();

const postBusiness: PostBusiness = new PostBusiness();

export class PostController {
  createPost = async (req: Request, res: Response) => {
    try {
      const { photo, description, type } = req.body;

      const token: string = req.headers.authorization as string;

      const postData: postInputDTO = {
        token,
        photo,
        description,
        type,
      };

      await postBusiness.businessCreatePost(postData);

      res.status(200).send({ message: "Post successfully created!" });
    } catch (error) {
      res.status(error.statusCode).send(error.sqlMessage || error.message);
    }
  };

  getPostById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      const result = await postDatabase.selectPostById(id);

      await postBusiness.businessGetPostById(result);

      res.status(200).send(result);
    } catch (error) {
      res.status(error.statusCode).send(error.sqlMessage || error.message);
    }
  };
}
