function caesarCipher(offset: number, input: string): string {
  // your code here
  let resultArray: Array<string> = [];
  for (let i: number = 0; i < input.length; i++) {
    let code = input.charCodeAt(i) + offset;
    while (code > 122) {
      code = code - 122 + 96;
    }
    resultArray.push(String.fromCharCode(code));
  }
  return resultArray.join("");
}

console.log(caesarCipher(3, "abc")); // def
console.log(caesarCipher(2, "alta")); // cnvc
console.log(caesarCipher(10, "alterraacademy")); // kvdobbkkmknowi
console.log(caesarCipher(1, "abcdefghijklmnopqrstuvwxyz"));
// bcdefghijklmnopqrstuvwxyza
console.log(caesarCipher(1000, "abcdefghijklmnopqrstuvwxyz"));
// mnopqrstuvwxyzabcdefghijkl
