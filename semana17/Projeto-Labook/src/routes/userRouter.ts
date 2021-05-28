import express from "express";
import { UserController } from "../controller/userController";

const userController: UserController = new UserController();

export const userRouter = express.Router();

userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login);
