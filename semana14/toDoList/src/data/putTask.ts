import connection from "../connection";

export default async function putTask(
  title: string,
  description: string,
  limitDate:Date, 
  creatorUserId: string
) {
  await connection
    .insert({
      id: Date.now(),
      title,
      description,
      limit_date: limitDate,
      creator_user_id: creatorUserId,
    })
    .into("TodoListTask");
}
