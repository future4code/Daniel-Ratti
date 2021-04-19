import { performPurchace } from "../src";
import { User } from "../src/types";

test("Testing balance greater than value", () => {
  const user: User = {
    name: "Daniel",
    balance: 80,
  };

  const result = performPurchace(user, 400);
  expect(result).toEqual({
    name: "Daniel",
    balance: 30,
  });
});

test("Testing balance greater than value", () => {
  const user: User = {
    name: "Daniel",
    balance: 80,
  };

  const result = performPurchace(user, 400);
  expect(result).toEqual({
    ...user,
    balance: 0,
  });
});

test("Testing balance greater than value", () => {
  const user: User = {
    name: "Astrodev",
    balance: 50,
  };

  const result = performPurchace(user, 50);

  expect(result).not.toBeDefined();
});
