function ubahHuruf(sentence: string): string | any {
  // your code here
  let alphabet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
  let newAlphabet: string = "KLMNOPQRSTUVWXYZABCDEFGHIJ ";
  let arrAlphabet: string[] = alphabet.split("");
  let arrNewAlphabet: string[] = newAlphabet.split("");
  let arrSentence: string[] = sentence.split("");
  let index: number[] = [];
  let result: string = "";

  for (let i: number = 0; i < sentence.length; i++) {
    for (let j: number = 0; j < arrAlphabet.length; j++) {
      if (arrSentence[i] == arrAlphabet[j]) {
        index.push(j);
      }
    }
  }

  for (let val of index) {
    result += arrNewAlphabet[val];
  }

  return result;
}

console.log(ubahHuruf("SEPULSA OKE")); // COZEVCK YUO
console.log(ubahHuruf("ALTERRA ACADEMY")); // KVDOBBK KMKNOWI
console.log(ubahHuruf("INDONESIA")); // SXNYXOCSK
console.log(ubahHuruf("GOLANG")); // QYVKXQ
console.log(ubahHuruf("PROGRAMMER")); // ZBYQBKWWOB
