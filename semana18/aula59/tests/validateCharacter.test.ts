import { validateCharacter } from "../src/validateCharacter";

describe("Testing validateCharacter", () => {
  test("Should return false when name is ''.", () => {
    const result = validateCharacter({
      name: "",
      health: 1500,
      strength: 100,
      defense: 2500,
    });

    expect(result).toEqual(false);
  });

  test("Should return false when health is 0.", () => {
    const result = validateCharacter({
      name: "luan-fumaça",
      health: 0,
      strength: 500,
      defense: 600,
    });

    expect(result).toEqual(false);
  });

  test("Should return false when strength is 0.", () => {
    const result = validateCharacter({
      name: "bob",
      health: 1500,
      strength: 0,
      defense: 200,
    });

    expect(result).toEqual(false);
  });

  test("Should return false when defense is 0.", () => {
    const result = validateCharacter({
      name: "jose",
      health: 1500,
      strength: 600,
      defense: 0,
    });

    expect(result).toEqual(false);
  });

  test("Should return false when health is negative.", () => {
    const result = validateCharacter({
      name: "mahavatar",
      health: -1500,
      strength: 100,
      defense: 500,
    });

    expect(result).toEqual(false);
  });

  test("Should return true when all fields is valid.", () => {
    const result = validateCharacter({
      name: "andy",
      health: 1500,
      strength: 500,
      defense: 500,
    });

    expect(result).toEqual(true);
  });
});
