import { Request, Response } from "express";
import { removeFollow } from "../models/removeFollow";
import { selectUserById } from "../models/selectUserById";
import { AuthenticationData, getTokenData } from "../services/authenticator";
import { follower } from "../types";

class UnfollowController {
  async execute(req: Request, res: Response) {
    const userToUnfollowId = req.body.userToUnfollowId as string;

    try {
      if (!userToUnfollowId) {
        res.statusCode = 422;
        throw new Error("Preencha o ID!");
      }

      const token: string = req.headers.authorization as string;
      const tokenData: AuthenticationData = getTokenData(token);

      if (!token || !tokenData) {
        res.statusCode = 406;
        throw new Error("Token invalido!");
      }

      const followerData = await selectUserById(tokenData.id);
      const userToFollowData = await selectUserById(userToUnfollowId);

      if (!followerData || !userToFollowData) {
        res.statusCode = 404;
        throw new Error("Usuário não existe!");
      } else {
        const newFollow: follower = {
          follower_id: tokenData.id,
          following_id: userToUnfollowId,
        };

        await removeFollow(newFollow);
        res.status(201).send({
          message: "Você removeu seu follow!",
        });
      }
    } catch (error) {
      res.status(400).send({
        message: error.message || error.sqlMessage,
      });
    }
  }
}

export { UnfollowController };
