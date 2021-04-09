import { recipe } from "../types";
import { connection } from "../database/connection";

export const insertRecipe = async (newRecipe: recipe) => {
  try {
    await connection("Recipes").insert(newRecipe);
  } catch (error) {
    throw new Error(error.message || error.sqlMessage);
  }
};
