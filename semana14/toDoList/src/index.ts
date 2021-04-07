import app from "./app";
import createUser from "./endpoints/createUser";
import userById from "./endpoints/userById";
import updateUserById from "./endpoints/updateUserById";
import createTask from "./endpoints/createTask";
import taskById from "./endpoints/taskById";
import getAllUsers from "./endpoints/getAllUsers";
import getResponsibleById from "./endpoints/getResponsibleById";

app.put("/user", createUser);
app.get("/user/:id", userById);
app.post("/user/edit/:id", updateUserById);
app.put("/task", createTask);
app.get("/task/:id", taskById);
app.get("/user/all", getAllUsers);
app.get("/task", getResponsibleById);
