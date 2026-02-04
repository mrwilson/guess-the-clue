import { assert, describe, it, beforeEach } from 'vitest';
import { CryptickClue } from '../miniclue/clue.js';

// @vitest-environment jsdom

describe('MiniClue', () => {
    let answer, clue, hint, revealLetter, revealWord, showHint, share;

    beforeEach(() => {
        answer = document.createElement('form');
        clue = document.createElement('h1');
        hint = document.createElement('h4');
        revealLetter = document.createElement('button');
        revealWord = document.createElement('button');
        showHint = document.createElement('button');
        share = document.createElement('button');

        new CryptickClue(
            answer,
            clue,
            hint,
            revealLetter,
            revealWord,
            showHint,
            share,
        ).renderClue({
            clue: 'What time is it?',
            answer: 'aaaaaa',
        });
    });

    it('can render a clue', () => {
        assert.equal(clue.textContent, 'What time is it? (6)');
    });

    it('can reveal single letter', () => {
        assert.equal(answerValue(), '');
        revealLetter.click();
        assert.equal(answerValue(), 'A');
    });

    it('can reveal whole word', () => {
        assert.equal(answerValue(), '');
        revealWord.click();
        assert.equal(answerValue(), 'AAAAAA');
    });

    function answerValue() {
        return [...new FormData(answer).values()].join('');
    }
});
