import express from "express";
import { PostController } from "../controller/postController";

const postController: PostController = new PostController();

export const postRouter = express.Router();

postRouter.post("/create", postController.createPost);
postRouter.get("/:id", postController.getPostById);
