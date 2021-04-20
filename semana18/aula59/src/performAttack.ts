import { Character } from "./validateCharacter";

export const performAttack = (
  attacker: Character,
  defender: Character,
  validator: (input: Character) => boolean
) => {
  if (!validator(attacker) || !validator(defender)) {
    throw new Error("Invalid character");
  }
  if (attacker.strength > defender.defense) {
    defender.health -= attacker.strength - defender.defense;
  }
};
