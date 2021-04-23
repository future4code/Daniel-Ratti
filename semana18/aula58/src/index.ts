import { User } from "./types";


export const user: User = {
  name: "Daniel",
  balance: 100,
};

export const performPurchace = (
  user: User,
  value: number
): User | undefined => {
  if (user.balance >= value) {
    return {
      ...user,
      balance: user.balance - value,
    };
  }
  return undefined;
};
