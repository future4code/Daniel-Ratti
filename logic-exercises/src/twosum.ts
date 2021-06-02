interface hashTable {
  [index: number]: number;
}

export const twoSum = (arr: number[], target: number) => {
  let hash: hashTable = {};
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let next = target - current;
    const indexNext = hash[next];
    if (indexNext !== undefined) return [indexNext, i];
    hash[current] = i;
  }
};
