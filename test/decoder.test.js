import { assert, describe, it } from "vitest";
import { ClueDecoder } from "../miniclue/decoder.js";

describe("ClueDecoder", () => {
  const decoder = new ClueDecoder();

  it("can decode json-based clues from hash fragment", () => {
    let input = "#eyJhIjoiZXllIG9wZW5pbmciLCJjIjoiSW5jcmVkaWJsZSBwdXBpbCJ9";

    assert.deepEqual(decoder.decode(input), {
      clue: "Incredible pupil",
      answer: "eye opening",
    });
  });
});
