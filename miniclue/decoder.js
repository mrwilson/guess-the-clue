export class ClueDecoder {
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
    let data = atob(input.substring(1));

    return data.startsWith("{")
      ? this.#decodeJson(data)
      : this.#decodeString(data);
  }
}
