import connection from "../connection";

export default async function updateUser(
  id: string,
  name: string,
  nickname: string
) {
  await connection("TodoListUser")
    .where({ id })
    .update({ name: name, nickname: nickname });
}
