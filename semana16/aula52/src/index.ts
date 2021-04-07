import { envMail } from "./endpoints/envMail";
import express from "express";
import { AddressInfo } from "net";
import createUser from "./endpoints/createUser";
import getUserById from "./endpoints/getUserById";
import getUserByLogin from "./endpoints/getUserByLogin";
import UserLogin from "./endpoints/userLogin";
import deleteUser from "./endpoints/deleteUser";

const app = express();
app.use(express.json());

app.post("/user/signup", createUser);
app.post("/user/login", UserLogin);
app.get("/user/profile", getUserByLogin);
app.get("/user/:id", getUserById);
app.delete("/user/:id", deleteUser);
app.post("/send/mail", envMail);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
