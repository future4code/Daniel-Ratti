import * as bcrypt from "bcryptjs";

export const generateHash = async (s: string): Promise<string> => {
  const salt: string = await bcrypt.genSalt(Number(process.env.BCRYPT_COST));
  const result: string = await bcrypt.hash(s, salt);
  return result;
};

export const compare = async (s: string, hash: string): Promise<boolean> =>
  bcrypt.compare(s, hash);
