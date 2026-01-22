import { assert, describe, it } from 'vitest'
import { MiniClue } from '../miniclue'

// @vitest-environment jsdom

describe('MiniClue', () => {
    let answer = document.createElement('form');
    let validate = document.createElement('button');

    it('can be initialised with dom objects', () => {
        new MiniClue(answer, validate);
    });

    it('can add validation class when required', () => {
        assert(!answer.classList.contains("validating"));

        MiniClue.validate({}, answer, validate);

        assert(answer.classList.contains("validating"));
    });

})

