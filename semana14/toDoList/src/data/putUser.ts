import connection from "../connection";

export default async function putUser(
  name: string,
  nickname: string,
  email: string
) {
  await connection
    .insert({
      id: Date.now(),
      name: name,
      nickname: nickname,
      email: email,
    })
    .into("TodoListUser");
}
