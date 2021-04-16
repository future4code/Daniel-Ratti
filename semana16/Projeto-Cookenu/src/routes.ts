import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { OtherUserController } from "./controllers/OtherUserController";
import { RecipeController } from "./controllers/RecipeController";
import { FollowController } from "./controllers/FollowController";
import { UnfollowController } from "./controllers/UnfollowController";
import { FeedController } from "./controllers/FeedController";

const router = Router();

const userController = new UserController();
const otherUserController = new OtherUserController();
const recipeController = new RecipeController();
const followController = new FollowController();
const unfollowController = new UnfollowController();
const feedController = new FeedController();

router.post("/signup", userController.create);
router.post("/login", userController.execute);
router.get("/profile", userController.show);
router.get("/profile/:id", otherUserController.show);

router.post("/recipe", recipeController.create);
router.get("/recipe/:id", recipeController.show);
router.get("/user/feed", feedController.show);

router.post("/user/follow", followController.execute);
router.post("/user/unfollow", unfollowController.execute);

export { router };
