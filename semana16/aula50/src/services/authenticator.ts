import { AuthenticationData } from "./../types/AuthenticationData";
import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const expiresIn = "1min";
export const generateToken = (input: AuthenticationData): string => {
  const token = jwt.sign(
    {
      id: input.id,
    },
    process.env.JWT_KEY as string,
    {
      expiresIn,
    }
  );
  return token;
};

export const getTokenData = (token: string): AuthenticationData => {
  return jwt.verify(token, process.env.JWT_KEY as string) as AuthenticationData;
};
