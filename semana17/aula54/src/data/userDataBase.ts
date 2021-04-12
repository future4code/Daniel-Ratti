import { connection } from "./connection";
import { User } from "../model/user";

export const insertUser = async (user: User) => {
  await connection
    .insert({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
    })
    .into("User_Arq");
};

export const selectUserByLogin = async (email: string) => {
  try {
    const result = await connection
      .select("*")
      .from("User_Arq")
      .where({ email });

    return result[0];
  } catch (error) {
    throw new Error(error.slqMessage || error.message);
  }
};

export const selectAllUsers = async (): Promise<any> => {
  try {
    const result = await connection
      .select("id", "name", "email", "role")
      .from("User_Arq");

    return result;
  } catch (error) {
    throw new Error(error.slqMessage || error.message);
  }
};

export const deleteUser = async (id: string) => {
  await connection("User_Arq").where({ id }).del();
};
