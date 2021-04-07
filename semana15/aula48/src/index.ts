import app from "./app";
import dotenv from "dotenv";
import getAllUsers from "./endpoints/getAllUsers";
import getUserByName from "./endpoints/getUserByName";
import getUserByType from "./endpoints/getUserByType";
import getUserByNameOrType from "./endpoints/getUserByNameOrType";
import getFiveUsers from "./endpoints/getFiveUsers";

dotenv.config();

app.get("/users/all", getAllUsers);
app.get("/users", getFiveUsers);
app.get("/user/searchName", getUserByName);
app.get("/user/:type", getUserByType);
app.get("/users/:orderBy", getUserByNameOrType);
