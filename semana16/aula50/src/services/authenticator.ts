import * as jwt from "jsonwebtoken";

export function generateToken(id: string): string {
  const token: string = jwt.sign({ id }, process.env.JWT_KEY as string, {
    expiresIn: "1min",
  });

  return token;
}

