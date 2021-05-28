import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../model/user";

const expiresIn = "1y";

export function generateToken(input: AuthenticationData): string {
  const token: string = jwt.sign(input, process.env.JWT_KEY as string, {
    expiresIn,
  });

  return token;
}

export function getTokenData(token: string): AuthenticationData {
  const result: any = jwt.verify(token, process.env.JWT_KEY as string);

  return { id: result.id };
}
