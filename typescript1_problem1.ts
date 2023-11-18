function playWithAsterik(n: number): string {
  // your code here
  let result: string = "";
  let space: number = n - 1;

  for (let i: number = 0; i < n; i++) {
    for (let j: number = 0; j <= space; j++) {
      result += " ";
    }
    space--;
    for (let k: number = 0; k <= i; k++) {
      result += "* ";
    }
    result += "\n";
  }

  return result;
}

console.log(playWithAsterik(5));
console.log(playWithAsterik(7));
console.log(playWithAsterik(11));
