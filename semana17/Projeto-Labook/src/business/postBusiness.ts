import { PostDatabase } from "../data/postDatabase";
import { CustomError } from "../errors/CustomError";
import { POST_TYPES } from "../model/post";
import { AuthenticationData } from "../model/user";
import { getTokenData } from "../services/authenticator";
import { generateId } from "../services/idGenerator";
import dayjs from "dayjs";

const postDatabase: PostDatabase = new PostDatabase();

export class PostBusiness {
  businessCreatePost = async (input: any) => {
    if (!input.photo) {
      throw new CustomError(400, "Photo not informed!");
    }

    if (!input.description) {
      throw new CustomError(400, "Description not informed!");
    }

    if (input.type !== POST_TYPES.NORMAL && input.type !== POST_TYPES.EVENT) {
      throw new CustomError(400, `type needs to be"normal" or "event"`);
    }

    const tokenData: AuthenticationData = getTokenData(input.token);

    const id: string = generateId();

    const newPost = {
      id: id,
      photo: input.photo,
      description: input.description,
      type: input.type,
      created_at: dayjs().format("YYYY-MM-DD"),
      author_id: tokenData.id,
    };

    await postDatabase.insertPost(newPost);
  };

  businessGetPostById = async (id: string) => {
    const result: any = await postDatabase.selectPostById(id);

    if (!result) {
      throw new CustomError(404, "Post not found!");
    } else {
      return result;
    }
  };
}
