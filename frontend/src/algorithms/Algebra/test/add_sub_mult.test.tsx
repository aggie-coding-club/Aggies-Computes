import {add} from '../add_sub_mult';
import {subtract} from '../add_sub_mult';
import {multiply} from '../add_sub_mult';

test('two-function-add: ', () => {
    const input1: string[] = ["2x + 3", "8x^2 + 9x - 1"];
    const input2: string[] = ["3x^7 + x^5 + 24", "3x^5 - 13"];

    const correct_result1: string = "8x^2 + 11x +2";
    const correct_result2: string = "3x^7 + 4x^5 + 11";

    let computed_result1: string = add(input1);
    let computed_result2: string = add(input2);

    expect(computed_result1).toEqual(
        correct_result1
    );
    expect(computed_result2).toEqual(
        correct_result2
    );
})

test('three-plus-function-add: ', () => {
    const input1: string[] = ["", "", ""];
    const input2: string[] = ["", "", "", ""];

    const correct_result1: string = "";
    const correct_result2: string = "";
    
    let computed_result1: string = add(input1);
    let computed_result2: string = add(input2);

    expect(computed_result1).toEqual(
        correct_result1
    );
    expect(computed_result2).toEqual(
        correct_result2
    );
})