import {getFixedResult, helper} from './lintRunner';
import {Rule} from './myCustomRule';

const rule = 'my-custom';

describe('myCustomRule test examples [actually a sample rule that disallows debugger statements]', () => {
    it(`testing failure example`, () => {
        const src = `debugger;`;
        const result = helper({src, rule});
        expect(result.errorCount).toBe(1);
    });

    it(`testing not failure example`, () => {
        const src = `console.log(1);`;
        const result = helper({src, rule});
        expect(result.errorCount).toBe(0);
    });

    it(`testing position example`, () => {
        const src = `debugger;`;
        const startPosition = src.indexOf('debugger;');
        const endPosition = startPosition + 'debugger;'.length;
        const failure = helper({src, rule}).failures[0];

        expect(failure.getStartPosition().getPosition()).toEqual(startPosition);
        expect(failure.getEndPosition().getPosition()).toEqual(endPosition);
        expect(failure.getFailure()).toBe(Rule.FAILURE_STRING);
    });

    it(`testing failure message example`, () => {
        const src = `debugger;`;
        const failure = helper({src, rule}).failures[0];

        expect(failure.getFailure()).toBe(Rule.FAILURE_STRING);
    });

    it('testing fixer example', () => {
        const src = `debugger;`;
        const output = ``;

        const result = helper({src, rule});
        expect(result.errorCount).toBe(1);
        expect(getFixedResult({src, rule})).toEqual(output);
    });
});
