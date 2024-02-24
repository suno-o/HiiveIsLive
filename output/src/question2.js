"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alphabetize = void 0;
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
function alphabetize(input, alphabet = ALPHABET.split('')) {
    const inputLowerCase = input.toLowerCase();
    const occurrence = {};
    for (const letter of alphabet) {
        occurrence[letter] = 0;
    }
    for (const char of inputLowerCase) {
        occurrence[char]++;
    }
    let output = '';
    for (const letter in occurrence) {
        output += letter.repeat(occurrence[letter]);
    }
    return output;
}
exports.alphabetize = alphabetize;
