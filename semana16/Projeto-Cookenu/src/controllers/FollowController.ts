import { Request, Response } from "express";
import { insertFollow } from "../models/insertFollower";
import { selectUserById } from "../models/selectUserById";
import { AuthenticationData, getTokenData } from "../services/authenticator";
import { follower } from "../types";

class FollowController {
  async execute(req: Request, res: Response) {
    const userToFollowId = req.body.userToFollowId as string;

    try {
      if (!userToFollowId) {
        res.statusCode = 422;
        throw new Error("Preencha o ID!");
      }

      const token: string = req.headers.authorization as string;
      const result: AuthenticationData = getTokenData(token);

      if (!token || !result) {
        res.statusCode = 406;
        throw new Error("Token invalido!");
      }

      const followerData = await selectUserById(result.id);
      const userToFollowData = await selectUserById(userToFollowId);

      if (!followerData || !userToFollowData) {
        res.statusCode = 404;
        throw new Error("Usuário não existe!");
      } else {
        const newFollow: follower = {
          follower_id: result.id,
          following_id: userToFollowId,
        };

        await insertFollow(newFollow);
        res.status(201).send({
          message: "Usuário seguido!",
        });
      }
    } catch (error) {
      res.status(400).send({
        message: error.message || error.sqlMessage,
      });
    }
  }
}

export { FollowController };
