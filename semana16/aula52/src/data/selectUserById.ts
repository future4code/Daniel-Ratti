import connection from "../services/connection";

export default async function selectUserById(id: string) {
  const result = await connection
    .select("*")
    .from("User")
    .where({ id });

  return result[0];
}
