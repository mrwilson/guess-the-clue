export class ClueDecoder {
  constructor(examples) {
    this.examples = examples;
  }

  #decodeJson(input) {
    let data = JSON.parse(input);

    return {
      clue: data.c,
      answer: data.a,
    };
  }

  #decodeString(input) {
    let data = input.split("|");

    return {
      clue: data[0],
      answer: data[1],
    };
  }

  decode(input) {
    let hash = input.substring(1);

    if (hash in this.examples) {
      return this.examples[hash];
    }

    let data = atob(hash);

    return data.startsWith("{")
      ? this.#decodeJson(data)
      : this.#decodeString(data);
  }
}
