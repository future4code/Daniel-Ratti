import connection from "../services/connection";
import { User } from "../types/user";

export default async function insertUser(user: User) {
  await connection
    .insert({
      id: user.id,
      email: user.email,
      password: user.password,
      role: user.role,
    })
    .into("User");
}
