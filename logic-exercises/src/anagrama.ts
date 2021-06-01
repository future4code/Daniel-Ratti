export const anagram = (s: string, t: string) => {
  if (s.length === t.length) {
    return s.split("").sort().join("") === t.split("").sort().join("");
  }
  return false;
};
