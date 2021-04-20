import { Character } from "../src/validateCharacter";
import { performAttack } from "../src/performAttack";

describe("Testing performAttack", () => {
  test("Should perform attack", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });

    const attacker: Character = {
      name: "jardel",
      health: 1500,
      strength: 500,
      defense: 400,
    };

    const defender: Character = {
      name: "chibs",
      health: 1500,
      strength: 400,
      defense: 300,
    };

    performAttack(attacker, defender, validatorMock);

    expect(defender.health).toEqual(1300);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  });

  test("Should return invalid character error", () => {
    const validatorMock = jest.fn(() => {
      return false;
    });

    const attacker: Character = {
      name: "playmobil",
      health: 1500,
      strength: 500,
      defense: 400,
    };

    const defender: Character = {
      name: "jack",
      health: 1500,
      strength: 400,
      defense: 300,
    };

    try {
      performAttack(attacker, defender, validatorMock);
    } catch (error) {
      expect(error.message).toEqual("Invalid character");
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);
    }
  });
});
