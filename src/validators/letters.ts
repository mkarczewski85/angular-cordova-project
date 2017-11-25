import { AbstractControl } from '@angular/forms';

export function IsPlausible(control: AbstractControl): any {
    var distinctLettersCounter: { [letter: string]: any; } = {};
    var letters = control.value;

    for (var _i = 0; _i < letters.length; _i++) {
        if (!(letters.charAt(_i) in distinctLettersCounter)) {
            distinctLettersCounter[letters.charAt(_i)] = 1;
        } else {
            distinctLettersCounter[letters.charAt(_i)]++;
        }
    }

    if (distinctLettersCounter.hasOwnProperty('e') && distinctLettersCounter['e'] > 7) {
        return { notPlausible: true };
    }

    if (distinctLettersCounter.hasOwnProperty('n') && distinctLettersCounter['n'] > 5) {
        return { notPlausible: true };
    }

    if (distinctLettersCounter.hasOwnProperty('o') && distinctLettersCounter['o'] > 6) {
        return { notPlausible: true };
    }

    if (distinctLettersCounter.hasOwnProperty('r') && distinctLettersCounter['r'] > 4) {
        return { notPlausible: true };
    }

    if (distinctLettersCounter.hasOwnProperty('s') && distinctLettersCounter['s'] > 4) {
        return { notPlausible: true };
    }

    if (distinctLettersCounter.hasOwnProperty('w') && distinctLettersCounter['w'] > 4) {
        return { notPlausible: true };
    }

    if (distinctLettersCounter.hasOwnProperty('z') && distinctLettersCounter['z'] > 5) {
        return { notPlausible: true };
    }

    if (distinctLettersCounter.hasOwnProperty('c') && distinctLettersCounter['c'] > 3) {
        return { notPlausible: true };
    }

    if (distinctLettersCounter.hasOwnProperty('d') && distinctLettersCounter['d'] > 3) {
        return { notPlausible: true };
    }

    if (distinctLettersCounter.hasOwnProperty('k') && distinctLettersCounter['k'] > 3) {
        return { notPlausible: true };
    }

    if (distinctLettersCounter.hasOwnProperty('l') && distinctLettersCounter['l'] > 3) {
        return { notPlausible: true };
    }

    if (distinctLettersCounter.hasOwnProperty('m') && distinctLettersCounter['m'] > 3) {
        return { notPlausible: true };
    }

    if (distinctLettersCounter.hasOwnProperty('p') && distinctLettersCounter['p'] > 3) {
        return { notPlausible: true };
    }

    if (distinctLettersCounter.hasOwnProperty('t') && distinctLettersCounter['t'] > 3) {
        return { notPlausible: true };
    }

    if (distinctLettersCounter.hasOwnProperty('y') && distinctLettersCounter['y'] > 4) {
        return { notPlausible: true };
    }

    if (distinctLettersCounter.hasOwnProperty('b') && distinctLettersCounter['b'] > 2) {
        return { notPlausible: true };
    }

    if (distinctLettersCounter.hasOwnProperty('g') && distinctLettersCounter['g'] > 2) {
        return { notPlausible: true };
    }

    if (distinctLettersCounter.hasOwnProperty('h') && distinctLettersCounter['h'] > 2) {
        return { notPlausible: true };
    }

    if (distinctLettersCounter.hasOwnProperty('j') && distinctLettersCounter['j'] > 2) {
        return { notPlausible: true };
    }

    if (distinctLettersCounter.hasOwnProperty('ł') && distinctLettersCounter['ł'] > 2) {
        return { notPlausible: true };
    }

    if (distinctLettersCounter.hasOwnProperty('u') && distinctLettersCounter['u'] > 1) {
        return { notPlausible: true };
    }

    if (distinctLettersCounter.hasOwnProperty('ą') && distinctLettersCounter['ą'] > 1) {
        return { notPlausible: true };
    }

    if (distinctLettersCounter.hasOwnProperty('ę') && distinctLettersCounter['ę'] > 1) {
        return { notPlausible: true };
    }

    if (distinctLettersCounter.hasOwnProperty('ó') && distinctLettersCounter['ó'] > 1) {
        return { notPlausible: true };
    }

    if (distinctLettersCounter.hasOwnProperty('ś') && distinctLettersCounter['ś'] > 1) {
        return { notPlausible: true };
    }

    if (distinctLettersCounter.hasOwnProperty('ż') && distinctLettersCounter['ż'] > 2) {
        return { notPlausible: true };
    }

    if (distinctLettersCounter.hasOwnProperty('ć') && distinctLettersCounter['ć'] > 2) {
        return { notPlausible: true };
    }

    if (distinctLettersCounter.hasOwnProperty('ń') && distinctLettersCounter['ń'] > 2) {
        return { notPlausible: true };
    }

    if (distinctLettersCounter.hasOwnProperty('ź') && distinctLettersCounter['ź'] > 2) {
        return { notPlausible: true };
    }

    return null;


}

