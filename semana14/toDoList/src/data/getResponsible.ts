import connection from "../connection";

export default async function getResponsible(user_id: string): Promise<any> {
  const result = await connection.raw(`
  SELECT
     TodoListTask.id as taskId,
     TodoListTask.title,
     TodoListTask.description,
     TodoListTask.limit_date,
     TodoListTask.status,
     TodoListTask.creator_user_id as creatorUserId,
     TodoListUser.nickname as creatorUserNickname
  FROM TodoListTask
  LEFT JOIN TodoListUser ON TodoListTask.creator_user_id = TodoListUser.id
  WHERE TodoListUser.id=${user_id};
  `);
  return result[0];
}
