import connection from "../connection";
import { User } from "../types/user";
import { userTableName } from "../services/table";

export const insertUser = async (user: User) => {
  await connection
    .insert({
      id: user.id,
      email: user.email,
      password: user.password,
    })
    .into(userTableName);
};
