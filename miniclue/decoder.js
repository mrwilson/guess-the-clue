export class ClueDecoder {
  decode(input) {
    let data = JSON.parse(atob(input.substring(1)));

    return {
      clue: data.c,
      answer: data.a,
    };
  }
}
