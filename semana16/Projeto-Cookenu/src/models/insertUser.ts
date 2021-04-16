import { connection } from "./../database/connection";
import { user } from "./../types";

export const insertUser = async (newUser: user): Promise<void> => {
  try {
    await connection.insert(newUser).into("Users");
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};
