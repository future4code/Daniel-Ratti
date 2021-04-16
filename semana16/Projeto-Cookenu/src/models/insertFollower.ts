import { connection } from "../database/connection";
import { follower } from "../types";

export const insertFollow = async (newFollower: follower) => {
  try {
    await connection("Following").insert(newFollower);
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};
