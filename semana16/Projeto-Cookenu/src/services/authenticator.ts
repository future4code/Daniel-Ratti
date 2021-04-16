import * as jwt from "jsonwebtoken";
import { USER_ROLE } from "../types";

const expiresIn = "1y";

export const generateToken = (id: string, role: string): string => {
  const token: string = jwt.sign(
    {
      id: id,
      role: role,
    },
    process.env.JWT_KEY as string,
    {
      expiresIn,
    }
  );

  return token;
};

export const getTokenData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY!);

  return payload as AuthenticationData;
};

export type AuthenticationData = {
  id: string;
  role: USER_ROLE;
};
