import connection from "../services/connection";

export default async function selectUserByLogin(email: string): Promise<any> {
  const result = await connection
    .select("*")
    .from("User")
    .where({ email });

  return result[0];
}
