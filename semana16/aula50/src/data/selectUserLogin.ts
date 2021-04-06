import connection from "../connection";
import { userTableName } from "../services/table";

export const selectUserByLogin = async (email: string): Promise<any> => {
  try {
    const result = await connection
      .select("*")
      .from(userTableName)
      .where({ email });

    return result[0];
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};
