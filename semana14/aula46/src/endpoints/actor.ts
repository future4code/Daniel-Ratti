import connection from "../connection";

const getActorById = async (id: string): Promise<void> => {
  const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = "${id}"
    `);

  return result[0][0];
};

const getActorByName = async (name: string): Promise<void> => {
  const result = await connection.raw(`
       SELECT * FROM Actor WHERE name = '${name}'
    `);

  return result[0][0];
};

const countActorByGender = async (gender: string): Promise<void> => {
  const result = await connection.raw(`
       SELECT COUNT(*) as count FROM Actor WHERE gender = '${gender}'
    `);

  return result[0][0].count;
};

const updateSalaryById = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};



const deleteActorById = async (id: string): Promise<void> => {
  await connection("Actor").delete().where("id", id);
};

const averageSalary = async (gender: string): Promise<void> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });
  return result[0].average;
};

export {
  getActorById,
  getActorByName,
  countActorByGender,
  updateSalaryById,
  deleteActorById,
  averageSalary,
};
