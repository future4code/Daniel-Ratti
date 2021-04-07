import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types/AuthenticationData";

export function generateToken(input: AuthenticationData): string {
  const expiresIn = "1y";

  const token: string = jwt.sign(
    { id: input, role: input.role },
    process.env.JWT_KEY as string,
    { expiresIn }
  );

  return token;
}

export function getTokenData(token: string): AuthenticationData {
  const payload = jwt.verify(
    token,
    process.env.JWT_KEY as string
  ) as AuthenticationData;

  return {
    id: payload.id,
    role: payload.role,
  };
}
