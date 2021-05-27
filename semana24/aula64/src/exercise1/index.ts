function isOneEdit(sA: string, sB: string): boolean {
  if (Math.abs(sB.length - sA.length) > 1) return false;
  if (sA.length > sB.length) return sA.includes(sB);
  if (sB.length > sA.length) return sB.includes(sA);

  let CharacterDiff = 0;
  for (let i = 0; i < sA.length; i++) {
    if (sA[i] !== sB[i]) CharacterDiff++;
  }

  return CharacterDiff === 1;
}

console.log(isOneEdit("banana", "anbana"));
