import connection from "../connection";

export const getUsers = async (): Promise<any> => {
  try {
    const result = await connection.raw(`
  SELECT * FROM TodoListUser;
`);
    return result[0];
  } catch (error) {
    console.log(error);
  }
};
