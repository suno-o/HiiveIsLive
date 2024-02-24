"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alphabetize = void 0;
function alphabetize(input) {
    const inputArr = input.toLowerCase().split('');
    return inputArr.sort().join('');
}
exports.alphabetize = alphabetize;
