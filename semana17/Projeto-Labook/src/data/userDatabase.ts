import { BaseDatabase } from "./BaseDataBase";
import { User } from "../model/user";

export class UserDatabase extends BaseDatabase {
  insertUser = async (user: User) => {
    await BaseDatabase.connection
      .insert({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
      })
      .into("labook_users");
  };

  selectUserByLogin = async (email: string) => {
    const result = await BaseDatabase.connection
      .select("*")
      .from("labook_users")
      .where({ email });

    return result[0];
  };
}
