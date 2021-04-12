import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { authenticationData } from "../model/user";

dotenv.config();

export function generateToken(input: authenticationData): string {
  const expiresIn = "1y";

  const token: string = jwt.sign(input, process.env.JWT_KEY as string, {
    expiresIn,
  });

  return token;
}

export function getTokenData(token: string): authenticationData {
  const payload = jwt.verify(
    token,
    process.env.JWT_KEY as string
  ) as authenticationData;

  return {
    id: payload.id,
    role: payload.role,
  };
}
