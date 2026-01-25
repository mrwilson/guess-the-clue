import { assert, describe, it } from "vitest";
import { MiniClue } from "../miniclue";

// @vitest-environment jsdom

describe("MiniClue", () => {
  const answer = document.createElement("form"),
    clue = document.createElement("h1");

  const miniClue = new MiniClue(answer, clue);

  it("can render a clue", () => {
    miniClue.renderClue({ clue: "What time is it?", answer: "aaaaaa" });

    assert.equal(clue.textContent, "What time is it? (6)");
  });
});
