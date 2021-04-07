import  connection  from "../services/connection";

export default async function removeUser(id: string) {
  await connection("User").where({ id }).delete();
}
