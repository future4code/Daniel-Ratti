import { connection } from "../database/connection";
import { follower } from "../types";

export const removeFollow = async (newUnfollow: follower): Promise<void> => {
  try {
    await connection("Following").where(newUnfollow).delete();
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};
