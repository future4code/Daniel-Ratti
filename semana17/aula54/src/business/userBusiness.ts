import { hash } from "../services/hashManager";
import { generate } from "../services/idGenerator";
import { generateToken } from "../services/authenticator";
import { authenticationData, User, USER_ROLES } from "../model/user";
import {
  insertUser,
  selectUserByLogin,
  selectAllUsers,
  deleteUser,
} from "../data/userDataBase";
import { compare } from "../services/hashManager";
import { getTokenData } from "../services/authenticator";

export const businessSignup = async (input: any) => {
  if (!input.name) {
    throw new Error("Por favor preeencha o nome");
  }

  if (!input.email || input.email.indexOf("@") === -1) {
    throw new Error("Email invalido");
  }

  if (!input.password || input.password.length < 6) {
    throw new Error("Senha tem que ter mais que 6 digitos");
  }

  if (input.role !== USER_ROLES.ADMIN && input.role !== USER_ROLES.NORMAL) {
    throw new Error("O usuario tem quer ser NORMAL ou ADMIN");
  }

  const id: string = generate();

  const cypherPassword: string = await hash(input.password);

  const newUser: User = {
    id,
    name: input.name,
    email: input.email,
    password: cypherPassword,
    role: input.role,
  };

  await insertUser(newUser);

  const token = generateToken({
    id,
    role: input.role,
  });

  return token;
};

export const businessLogin = async (input: any) => {
  if (!input.email || input.email.indexOf("@") === -1) {
    throw new Error("Email invalido!");
  }

  const user = await selectUserByLogin(input.email);

  if (!user) {
    throw new Error("Usuario não encontrado!");
  }

  if (!input.password || input.password.length < 6) {
    throw new Error("Senha tem que ter mais que 6 digitos");
  }

  const passwordIsCorrect: boolean = await compare(
    input.password,
    user.password
  );

  if (!passwordIsCorrect) {
    throw new Error("Senha incorreta!");
  }

  const token = generateToken({
    id: user.id,
    role: user.role,
  });

  return token;
};

export const businessGetAllUsers = async (token: string) => {
  getTokenData(token);

  const users: User[] = await selectAllUsers();

  return users;
};

export const businessDeleteUser = async (input: {
  token: string;
  id: string;
}) => {
  const tokenData: authenticationData = getTokenData(input.token);

  if (tokenData.role !== USER_ROLES.ADMIN) {
    throw new Error(
      "Somente o usuario com a role ADMIN pode deletar usuarios."
    );
  } else {
    await deleteUser(input.id);
  }
};
