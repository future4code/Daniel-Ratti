import connection from "../connection";
import { userTableName } from "../services/table";

export const selectUserById = async (id: string): Promise<any> => {
  try {
    const result = await connection
      .select("*")
      .from(userTableName)
      .where({ id });

    return result[0];
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};
